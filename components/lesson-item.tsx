import { useState } from "react";
import { router } from "expo-router";
import { Pressable, PressableProps } from "react-native";
import Popover from "react-native-popover-view/dist/Popover";

import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";
import { CourseExercise } from "@/types";

interface Props extends PressableProps {
  circleWidth: number;
  isCurrentLesson: boolean;
  isFinishedLesson: boolean;
  index: number;
  lessonDescription: string;
  totalExercise: number;
  currentExercise: CourseExercise;
}

export function LessonItem({
  isCurrentLesson,
  isFinishedLesson,
  circleWidth,
  index,
  lessonDescription,
  totalExercise,
  currentExercise,
  style,
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
        <Pressable
          style={[
            {
              padding: layouts.padding * 0.5,
              borderColor: isCurrentLesson ? border : layouts.transparentColor,
              borderWidth: layouts.padding * 0.5,
              borderRadius: 9999,
            },
            // @ts-ignore
            style,
          ]}
          onPress={openPopover}
          {...props}
        >
          <View
            style={{
              width: circleWidth,
              aspectRatio: 1,
              borderRadius: circleWidth,
              backgroundColor:
                isCurrentLesson || isFinishedLesson || index === 0
                  ? primary
                  : mutedForeground,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isCurrentLesson ? (
              <Icon name="star" size={24} color={primaryForeground} />
            ) : isFinishedLesson ? (
              <Icon name="check" size={24} color={primaryForeground} />
            ) : index === 0 ? (
              <Icon name="skip" size={24} color={primaryForeground} />
            ) : (
              <Icon name="lock" size={24} color={muted} />
            )}
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
                {currentExercise.mode}
              </Text>
            </View>
          )}
        </View>
        <Text style={{ color: mutedForeground }}>
          {isFinishedLesson
            ? "Prove your proficiency with Legendary"
            : isNotFinishedLesson
            ? "Complete all levels above to unlock this!"
            : `Exercise ${currentExercise.id + 1} of ${totalExercise}`}
        </Text>
        <Button
          onPress={() => {
            closePopover();
            router.push("/lesson");
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
