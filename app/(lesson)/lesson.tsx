import { useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";

import { soundEffects } from "@/assets/sound-effects";
import { Icon } from "@/components/icons";
import { FlashCardItem } from "@/components/lesson/flash-card-item";
import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { Text, View } from "@/components/themed";
import { CURRENT } from "@/constants/dev";
import { layouts } from "@/constants/layouts";
import { getExerxise } from "@/content/courses";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";
import { useAudio } from "@/hooks/audio";
import { FlashCardExercise } from "@/types";

export default function Lesson() {
  const { accent, foreground } = useTheme();
  const breakpoint = useBreakpoint();
  const { playSound: playCorrectSound } = useAudio({
    source: soundEffects.correctAnswer,
  });
  const { playSound: playWrongSound } = useAudio({
    source: soundEffects.wrongAnswer,
  });

  const { courseId } = useCourse();
  if (!courseId) return null;

  const exercise = getExerxise({
    courseId,
    chapterId: CURRENT.chapterId,
    sectionId: CURRENT.sectionId,
    lessonId: CURRENT.lessonId,
    exerciseId: CURRENT.exerciseId,
  });
  if (!exercise) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [failedIds, setFailedIds] = useState<number[]>([]);

  const renderCurrentExercise = () => {
    const currentExerciseItem = exercise.items[currentIndex];
    if (currentExerciseItem.type === "flashCard") {
      const exerciseItem = currentExerciseItem as FlashCardExercise;
      return (
        <FlashCardItem
          exercise={exerciseItem}
          onResult={(success) => {
            if (finishedCount < exercise.items.length) {
              setFinishedCount(finishedCount + 1);
              if (success) {
                playCorrectSound();
              } else {
                playWrongSound();
                setFailedIds((prev) => [...prev, exerciseItem.id]);
              }
            }
          }}
          onContinue={() => {
            if (currentIndex < exercise.items.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setIsFinished(true);
            }
          }}
        />
      );
    } else {
      return <Text>Unknown exercise type</Text>;
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT }}>
      <View
        style={{
          maxWidth: 1024,
          width: "100%",
          marginHorizontal: "auto",
          padding: layouts.padding,
          gap: layouts.padding * 2,
          paddingTop:
            breakpoint === "sm"
              ? layouts.padding
              : breakpoint === "md"
              ? layouts.padding * 2
              : layouts.padding * 3,
          flex: 1,
        }}
      >
        {/* header */}
        <View style={{ flexDirection: "row", gap: layouts.padding * 2 }}>
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
                  width: `${(finishedCount / exercise.items.length) * 100}%`,
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
        {isFinished ? (
          <Text>Finished, Failed: {failedIds.join(", ")}</Text>
        ) : (
          <View style={{ flex: 1 }}>{renderCurrentExercise()}</View>
        )}
      </View>
    </View>
  );
}
