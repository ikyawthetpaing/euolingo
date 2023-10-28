import { useMemo, useState } from "react";
import { router } from "expo-router";
import { Pressable, useWindowDimensions } from "react-native";

import { soundEffects } from "@/assets/sound-effects";
import { Icon } from "@/components/icons";
import { FlashCardItem } from "@/components/lesson/flash-card-item";
import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { CURRENT } from "@/constants/dev";
import { layouts } from "@/constants/layouts";
import { getExerxise } from "@/content/courses";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";
import { useAudio } from "@/hooks/audio";
import { shuffleArray } from "@/lib/utils";
import { FlashCardExercise } from "@/types";

export default function Lesson() {
  const { accent, foreground, background } = useTheme();
  const breakpoint = useBreakpoint();
  const { playSound: playCorrectSound } = useAudio({
    source: soundEffects.correctAnswer,
  });
  const { playSound: playWrongSound } = useAudio({
    source: soundEffects.wrongAnswer,
  });
  const screen = useWindowDimensions();

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
  const shuffledExerciseItems = useMemo(
    () => shuffleArray(exercise.items),
    [exercise.items]
  );
  const totalExerciseItems = shuffledExerciseItems.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [failedIds, setFailedIds] = useState<number[]>([]);

  const renderOutro = () => {
    return (
      <View
        style={{
          flex: 1,
          padding: layouts.padding,
          maxWidth: 1024,
          width: "100%",
          marginHorizontal: "auto",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: layouts.padding * 4,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>
            Practice complete!
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: layouts.padding,
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                padding: layouts.borderWidth,
                borderRadius: layouts.padding,
                backgroundColor: "orange",
                width:
                  breakpoint === "sm"
                    ? screen.width / 3 - layouts.padding * 1.34
                    : 128,
                height: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: background,
                  fontSize: 12,
                  padding: layouts.padding / 4,
                }}
              >
                Total xp
              </Text>
              <View
                style={{
                  flex: 1,
                  borderRadius: layouts.padding - layouts.borderWidth,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: layouts.padding / 2,
                    alignItems: "center",
                  }}
                >
                  <Icon name="bolt" color="orange" />
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "orange",
                      fontSize: 18,
                    }}
                  >
                    {exercise.xp}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: layouts.borderWidth,
                borderRadius: layouts.padding,
                backgroundColor: "blue",
                width:
                  breakpoint === "sm"
                    ? screen.width / 3 - layouts.padding * 1.34
                    : 128,
                height: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: background,
                  fontSize: 12,
                  padding: layouts.padding / 4,
                }}
              >
                Speedy
              </Text>
              <View
                style={{
                  flex: 1,
                  borderRadius: layouts.padding - layouts.borderWidth,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: layouts.padding / 2,
                    alignItems: "center",
                  }}
                >
                  <Icon name="clockCircle" color="blue" />
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "blue",
                      fontSize: 18,
                    }}
                  >
                    2:19
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: layouts.borderWidth,
                borderRadius: layouts.padding,
                backgroundColor: "green",
                width:
                  breakpoint === "sm"
                    ? screen.width / 3 - layouts.padding * 1.34
                    : 128,
                height: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: background,
                  fontSize: 12,
                  padding: layouts.padding / 4,
                }}
              >
                Good
              </Text>
              <View
                style={{
                  flex: 1,
                  borderRadius: layouts.padding - layouts.borderWidth,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: layouts.padding / 2,
                    alignItems: "center",
                  }}
                >
                  <Icon name="targetCircle" color="green" />
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "green",
                      fontSize: 18,
                    }}
                  >
                    83%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Button onPress={() => router.push("/learn")}>Continue</Button>
        </View>
      </View>
    );
  };

  const renderCurrentExercise = () => {
    const currentExerciseItem = shuffledExerciseItems[currentIndex];
    if (currentExerciseItem.type === "flashCard") {
      const exerciseItem = currentExerciseItem as FlashCardExercise;
      return (
        <FlashCardItem
          exercise={exerciseItem}
          onResult={(success) => {
            if (finishedCount < totalExerciseItems) {
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
            if (currentIndex < totalExerciseItems - 1) {
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
      {isFinished ? (
        renderOutro()
      ) : (
        <View
          style={{
            maxWidth: 1024,
            width: "100%",
            marginHorizontal: "auto",
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
          <View
            style={{
              flexDirection: "row",
              gap: layouts.padding * 2,
              paddingHorizontal: layouts.padding,
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
          {renderCurrentExercise()}
        </View>
      )}
    </View>
  );
}
