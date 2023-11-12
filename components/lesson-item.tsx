import { useState } from "react";
import { router } from "expo-router";
import { Pressable, PressableProps } from "react-native";
import Popover from "react-native-popover-view/dist/Popover";

import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";
import { CourseProgression, ExerciseSet } from "@/types/course";

interface Props extends PressableProps {
  circleRadius: number;
  isCurrentLesson: boolean;
  isFinishedLesson: boolean;
  index: number;
  lessonDescription: string;
  totalExercise: number;
  currentExercise: ExerciseSet;
  courseProgression: CourseProgression;
}

export function LessonItem({
  isCurrentLesson,
  isFinishedLesson,
  circleRadius,
  index,
  lessonDescription,
  totalExercise,
  currentExercise,
  courseProgression,
  ...props
}: Props) {
  const {
    border,
    background,
    primary,
    primaryForeground,
    foreground,
    mutedForeground,
    muted,
  } = useTheme();
  const isNotFinishedLesson = !isFinishedLesson && !isCurrentLesson;
  const [isVisiable, setIsVisiable] = useState(false);
  const openPopover = () => setIsVisiable(true);
  const closePopover = () => setIsVisiable(false);

  const {
    sectionId: sectionId,
    chapterId: chapterId,
    lessonId: lessonId,
    exerciseId: exerciseId,
  } = courseProgression;

  return (
    <Popover
      isVisible={isVisiable}
      onRequestClose={closePopover}
      popoverStyle={{
        borderRadius: layouts.padding,
        backgroundColor: border,
      }}
      backgroundStyle={{
        backgroundColor: background,
        opacity: 0.5,
      }}
      from={
        <Pressable onPress={openPopover} {...props}>
          <View
            style={{
              padding: layouts.padding / 2,
              width: circleRadius * 2,
              aspectRatio: 1,
            }}
          >
            <View
              style={{
                width: "100%",
                aspectRatio: 1,
                borderRadius: 9999,
                backgroundColor:
                  isCurrentLesson || isFinishedLesson || index === 0
                    ? primary
                    : mutedForeground,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isCurrentLesson ? (
                <Icon name="star" size={32} color={primaryForeground} />
              ) : isFinishedLesson ? (
                <Icon name="check" size={32} color={primaryForeground} />
              ) : index === 0 ? (
                <Icon name="skip" size={32} color={primaryForeground} />
              ) : (
                <Icon name="lock" size={32} color={muted} />
              )}
            </View>
          </View>
        </Pressable>
      }
    >
      <View
        style={{
          padding: layouts.padding,
          borderRadius: layouts.padding,
          width: 300,
          borderWidth: layouts.borderWidth,
          borderColor: border,
          gap: layouts.padding,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: layouts.padding,
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: isNotFinishedLesson ? mutedForeground : foreground,
            }}
          >
            {lessonDescription}
          </Text>
          {isCurrentLesson && (
            <View
              style={{
                paddingVertical: layouts.padding / 2,
                paddingHorizontal: layouts.padding,
                borderRadius: layouts.padding / 2,
                backgroundColor: muted,
              }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: mutedForeground,
                }}
              >
                {currentExercise.difficulty}
              </Text>
            </View>
          )}
        </View>
        <Text style={{ color: mutedForeground }}>
          {isFinishedLesson
            ? "Prove your proficiency with Legendary"
            : isNotFinishedLesson
            ? "Complete all levels above to unlock this!"
            : `Exercise ${currentExercise.id} of ${totalExercise}`}
        </Text>
        <Button
          onPress={() => {
            closePopover();
            if (isFinishedLesson) {
              router.push(
                `/pratice/${sectionId}/${chapterId}/${lessonId}/${exerciseId}`
              );
            } else {
              router.push("/lesson");
            }
          }}
          disabled={isNotFinishedLesson}
        >
          {isFinishedLesson
            ? `Pratice +${currentExercise.xp / 2} xp`
            : isNotFinishedLesson
            ? "Locked"
            : `Start +${currentExercise.xp} xp`}
        </Button>
      </View>
    </Popover>
  );
}
