import { useEffect, useMemo, useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";

import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";
import { shuffleArray } from "@/lib/utils";
import { FlashCardExercise } from "@/types";

interface Props {
  exercise: FlashCardExercise;
  onResult: (sucess: boolean) => void;
  onContinue: () => void;
}

export function FlashCardItem({ exercise, onResult, onContinue }: Props) {
  const shuffled = useMemo(() => shuffleArray(exercise.words), [exercise]);

  const breakpoint = useBreakpoint();
  const { mutedForeground, muted, foreground } = useTheme();
  const window = useWindowDimensions();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [sucess, setSucess] = useState<boolean | null>(null);

  useEffect(() => {
    if (sucess !== null) {
      onResult(sucess);
    }
  }, [sucess]);

  const reset = () => {
    setSelectedId(null);
    setSucess(null);
  };

  const onCheck = () => {
    if (selectedId !== null) {
      exercise.correctWordId === selectedId
        ? setSucess(true)
        : setSucess(false);
    }
  };

  return (
    <View style={{ justifyContent: "space-between", flex: 1 }}>
      <View
        style={{
          marginHorizontal: "auto",
          maxWidth: "100%",
          gap: layouts.padding * 2,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {exercise.question}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: layouts.padding,
          }}
        >
          {shuffled.map((word, index) => (
            <Pressable key={index} onPress={() => setSelectedId(word.id)}>
              <View
                style={{
                  borderWidth: layouts.borderWidth,
                  borderColor: selectedId === word.id ? foreground : muted,
                  width:
                    breakpoint === "sm"
                      ? window.width / 2 - layouts.padding * 2
                      : 150,
                  aspectRatio: 1,
                  borderRadius: layouts.padding,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color:
                      selectedId === word.id ? foreground : mutedForeground,
                  }}
                >
                  {word.content}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      {sucess !== null ? (
        <Button
          onPress={() => {
            reset();
            onContinue();
          }}
        >
          Continue
        </Button>
      ) : (
        <Button disabled={selectedId === null} onPress={onCheck}>
          Check
        </Button>
      )}
    </View>
  );
}
