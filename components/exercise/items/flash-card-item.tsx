import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Image } from "expo-image";
import {
  Pressable,
  PressableProps,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { Text, View } from "@/components/themed";
import { colors } from "@/constants/colors";
import { DEFAULT_COURSE_ID } from "@/constants/default";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useLanguageCode } from "@/context/language";
import { useTheme } from "@/context/theme";
import { useAudio } from "@/hooks/audio";
import { shuffleArray } from "@/lib/utils";
import {
  ExerciseItemProps,
  FlashCardExercise,
  FlashCardExerciseWord,
} from "@/types/course";

import { ExerciseItemEvent } from "./exercise-item-event";

interface Props extends ExerciseItemProps {
  exercise: FlashCardExercise;
}

export function FlashCardItem({ exercise, onResult, onContinue }: Props) {
  const shuffled = useMemo(() => shuffleArray(exercise.words), [exercise]);

  const { languageCode } = useLanguageCode();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (isSuccess !== null) {
      onResult(isSuccess);
    }
  }, [isSuccess]);

  const reset = () => {
    setSelectedId(null);
    setIsSuccess(null);
  };

  const onCheck = () => {
    if (selectedId !== null) {
      setIsSuccess(exercise.correctWordId === selectedId);
    }
  };

  return (
    <View
      style={{ justifyContent: "space-between", flex: 1, position: "relative" }}
    >
      <View
        style={{
          flex: 1,
          marginHorizontal: "auto",
          maxWidth: "100%",
          paddingHorizontal: layouts.padding,
        }}
      >
        <View
          style={{
            flex: 1,
            gap: layouts.padding * 2,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {exercise.question[languageCode]}
          </Text>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                gap: layouts.padding,
              }}
            >
              {shuffled.map((word, index) => (
                <FlashCardWord
                  key={index}
                  word={word}
                  isSuccess={isSuccess}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <ExerciseItemEvent
        checkButtonDisabled={selectedId === null}
        correctAnswer={
          exercise.words.find(({ id }) => id === exercise.correctWordId)
            ?.content[languageCode] || ""
        }
        isSuccess={isSuccess}
        onPressCheck={onCheck}
        onPressContinue={() => {
          reset();
          onContinue();
        }}
      />
    </View>
  );
}

interface FlashCardWordProps extends PressableProps {
  word: FlashCardExerciseWord;
  isSuccess: boolean | null;
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
}

function FlashCardWord({
  word,
  isSuccess,
  selectedId,
  setSelectedId,
}: FlashCardWordProps) {
  const {
    foreground,
    muted,
    mutedForeground,
    sucess,
    sucessForeground,
    destructive,
    destructiveForeground,
  } = useTheme();
  const { courseId } = useCourse();
  const layout = useWindowDimensions();
  const breakpoint = useBreakpoint();
  const { playSound } = useAudio({
    source: word.audio ? word.audio[courseId!] : undefined,
  });

  return (
    <Pressable
      style={[
        {
          borderWidth: layouts.borderWidth,
          borderColor: selectedId === word.id ? foreground : muted,
          width:
            breakpoint === "sm"
              ? layout.width / 2 - layouts.padding * 1.5
              : 150,
          borderRadius: layouts.padding,
          justifyContent: "center",
          alignItems: "center",
          padding: layouts.padding,
          gap: layouts.padding,
        },
        selectedId === word.id &&
          isSuccess === true && {
            borderColor: sucessForeground,
            backgroundColor: sucess,
          },
        selectedId === word.id &&
          isSuccess === false && {
            borderColor: destructiveForeground,
            backgroundColor: destructive,
          },
      ]}
      onPress={() => {
        if (isSuccess === null) {
          setSelectedId(word.id);
        }
        playSound();
      }}
    >
      <View
        style={{
          padding: layouts.padding,
          width: "100%",
          aspectRatio: 1,
          backgroundColor: colors.transparent,
        }}
      >
        <Image
          source={word.image}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <Text
        style={[
          {
            fontSize: 24,
            fontWeight: "bold",
            color: selectedId === word.id ? foreground : mutedForeground,
          },
          selectedId === word.id &&
            isSuccess === true && {
              color: sucessForeground,
            },
          selectedId === word.id &&
            isSuccess === false && {
              color: destructiveForeground,
            },
        ]}
      >
        {word.content[courseId || DEFAULT_COURSE_ID]}
      </Text>
    </Pressable>
  );
}
