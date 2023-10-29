import React, { useMemo, useState } from "react";
import { Pressable } from "react-native";

import { soundEffects } from "@/assets/sound-effects";
import { Container } from "@/components/container";
import ExerciseItem from "@/components/exercise/exercise-item";
import LessonOutroScreen from "@/components/exercise/screens/exercise-outro";
import { Icon } from "@/components/icons";
import { Shell } from "@/components/shell";
import { Text, View } from "@/components/themed";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";
import { useAudio } from "@/hooks/audio";
import { calculatePrecentage, shuffleArray } from "@/lib/utils";
import { CourseExercise } from "@/types";

interface Props {
  exercise: CourseExercise;
}

export default function ExerciseScreen({ exercise }: Props) {
  const shuffledExerciseItems = useMemo(
    () => shuffleArray(exercise.items),
    [exercise.items]
  );
  const totalExerciseItems = shuffledExerciseItems.length;

  const { accent, foreground } = useTheme();
  const breakpoint = useBreakpoint();

  const { playSound: playCorrectSound } = useAudio({
    source: soundEffects.correctAnswer,
  });
  const { playSound: playWrongSound } = useAudio({
    source: soundEffects.wrongAnswer,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const onResult = (success: boolean) => {
    if (finishedCount < totalExerciseItems) {
      setFinishedCount(finishedCount + 1);
      if (success) {
        playCorrectSound();
      } else {
        playWrongSound();
      }
    }
  };

  const onContinue = () => {
    if (currentIndex < totalExerciseItems - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return <LessonOutroScreen xp={exercise.xp} duration="2:30" target="80%" />;
  }

  return (
    <Shell>
      <Container style={{ gap: layouts.padding * 2 }}>
        <View
          style={{
            flexDirection: "row",
            gap: layouts.padding * 2,
            paddingHorizontal: layouts.padding,
            paddingTop:
              breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
          }}
        >
          <Pressable>
            <Icon name="setting" />
          </Pressable>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                height: 16,
                backgroundColor: accent,
                borderRadius: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  width: `${calculatePrecentage(
                    finishedCount,
                    totalExerciseItems
                  )}%`,
                  height: "100%",
                  backgroundColor: foreground,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: layouts.padding * 0.5,
            }}
          >
            <Icon name="heart" />
            <Text style={{ fontWeight: "800" }}>5</Text>
          </View>
        </View>
        <ExerciseItem
          exerciseItem={shuffledExerciseItems[currentIndex]}
          onContinue={onContinue}
          onResult={onResult}
        />
      </Container>
    </Shell>
  );
}
