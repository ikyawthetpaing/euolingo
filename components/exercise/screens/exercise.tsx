import React, { useMemo, useState } from "react";
import { router } from "expo-router";

import { sound } from "@/assets/audios/sound";
import { Container } from "@/components/container";
import ExerciseItems from "@/components/exercise/items/exercise-items";
import LessonOutroScreen from "@/components/exercise/screens/exercise-outro";
import { Icon } from "@/components/icons";
import { SelectLanguage } from "@/components/select-language";
import { Shell } from "@/components/shell";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";
import { useAudio } from "@/hooks/audio";
import { calculatePrecentage, shuffleArray } from "@/lib/utils";
import { ExerciseSet } from "@/types/course";

interface Props {
  exercise: ExerciseSet;
  increaseProgress: boolean;
}

export default function ExerciseScreen({ exercise, increaseProgress }: Props) {
  const shuffledExerciseItems = useMemo(
    () => shuffleArray(exercise.items),
    [exercise.items]
  );
  const totalExerciseItems = shuffledExerciseItems.length;

  const { courseId } = useCourse();
  const { accent, foreground, mutedForeground } = useTheme();
  const breakpoint = useBreakpoint();

  const { playSound: playCorrectSound } = useAudio({ source: sound.correct });
  const { playSound: playWrongSound } = useAudio({ source: sound.wrong });

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

  if (!courseId) return null;

  if (isFinished) {
    return (
      <LessonOutroScreen
        xp={exercise.xp}
        duration="2:30"
        target="80%"
        increaseProgress={increaseProgress}
      />
    );
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
          <Dialog
            trigger={<Icon name="setting" />}
            title="Settings"
            contentContainerStyle={{ gap: layouts.padding }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: mutedForeground,
                  textTransform: "uppercase",
                }}
              >
                Language:
              </Text>
              <SelectLanguage excludes={[courseId]} />
            </View>
            <Button variant="outline" onPress={() => router.push("/learn")}>
              End Session
            </Button>
          </Dialog>
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
        <ExerciseItems
          exerciseItem={shuffledExerciseItems[currentIndex]}
          onContinue={onContinue}
          onResult={onResult}
        />
      </Container>
    </Shell>
  );
}
