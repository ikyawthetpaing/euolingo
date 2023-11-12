import { useEffect, useState } from "react";
import { Image } from "expo-image";
import { Pressable, ScrollView } from "react-native";

import { Text, View } from "@/components/themed";
import { colors } from "@/constants/colors";
import { DEFAULT_COURSE_ID } from "@/constants/default";
import { layouts } from "@/constants/layouts";
import { useCourse } from "@/context/course";
import { useLanguageCode } from "@/context/language";
import { useTheme } from "@/context/theme";
import {
  ExerciseItemProps,
  TranslateExercise,
  TranslateExerciseOption,
} from "@/types/course";

import { ExerciseItemEvent } from "./exercise-item-event";

interface Props extends ExerciseItemProps {
  exercise: TranslateExercise;
}

export function TranslateItem({ exercise, onContinue, onResult }: Props) {
  const { languageCode } = useLanguageCode();
  const { courseId } = useCourse();
  const { border } = useTheme();

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [selectedOptions, setSelectOptions] = useState<
    TranslateExerciseOption[]
  >([]);

  useEffect(() => {
    if (isSuccess !== null) {
      onResult(isSuccess);
    }
  }, [isSuccess]);

  const onPressCheck = () => {
    let flag = true;
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].id !== exercise.correctOrderIds[languageCode][i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const onPressContinue = () => {
    setSelectOptions([]);
    setIsSuccess(null);
    onContinue();
  };

  const correctAnswer = exercise.correctOrderIds[languageCode]
    .map(
      (id) =>
        exercise.options.find((option) => option.id === id)?.word.content[
          languageCode
        ]
    )
    .join(" ");

  return (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
        position: "relative",
        gap: layouts.padding,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: layouts.padding,
          gap: layouts.padding * 2,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {exercise.question[languageCode]}
        </Text>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              source={
                "https://www.svgrepo.com/show/509002/avatar-thinking-8.svg"
              }
              style={{ aspectRatio: 1, width: 150 }}
            />
            <View>
              <View
                style={{
                  padding: layouts.padding,
                  borderWidth: layouts.borderWidth,
                  borderColor: border,
                  borderRadius: layouts.padding,
                  position: "relative",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {exercise.sentence.content[courseId!]}
                </Text>
                <View
                  style={{
                    width: 0,
                    height: 0,
                    borderTopWidth: 8,
                    borderBottomWidth: 8,
                    borderRightWidth: 10,
                    borderTopColor: colors.transparent,
                    borderBottomColor: colors.transparent,
                    borderRightColor: border,
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: [{ translateX: -12 }],
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: layouts.borderWidth,
              borderTopColor: border,
              borderBottomWidth: layouts.borderWidth,
              borderBottomColor: border,
              minHeight: 100,
              justifyContent: "center",
              paddingVertical: layouts.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: layouts.padding,
                justifyContent: "center",
              }}
            >
              {selectedOptions.map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() =>
                    setSelectOptions(
                      selectedOptions.filter(({ id }) => id !== option.id)
                    )
                  }
                  disabled={isSuccess !== null}
                >
                  <View
                    key={index}
                    style={{
                      padding: layouts.padding,
                      borderWidth: layouts.borderWidth,
                      borderColor: border,
                      borderRadius: layouts.padding,
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {option.word.content[languageCode]}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: layouts.padding,
              justifyContent: "center",
            }}
          >
            {exercise.options.map((option, index) => {
              const isSelected = !!selectedOptions.find(
                ({ id }) => id === option.id
              );
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    if (!isSelected) {
                      setSelectOptions([...selectedOptions, option]);
                    }
                  }}
                  disabled={isSuccess !== null}
                >
                  <View
                    style={[
                      {
                        padding: layouts.padding,
                        borderWidth: layouts.borderWidth,
                        borderColor: border,
                        borderRadius: layouts.padding,
                      },
                      isSelected && { backgroundColor: border },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 16, fontWeight: "bold" },
                        isSelected && { color: border },
                      ]}
                    >
                      {option.word.content[languageCode]}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <ExerciseItemEvent
        checkButtonDisabled={selectedOptions.length === 0}
        correctAnswer={correctAnswer}
        isSuccess={isSuccess}
        onPressCheck={onPressCheck}
        onPressContinue={onPressContinue}
      />
    </View>
  );
}
