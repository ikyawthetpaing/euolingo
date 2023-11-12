import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";

interface Props {
  correctAnswer: string;
  isSuccess: boolean | null;
  checkButtonDisabled: boolean;
  onPressCheck: () => void;
  onPressContinue: () => void;
}

export function ExerciseItemEvent({
  isSuccess,
  correctAnswer,
  onPressCheck,
  onPressContinue,
  checkButtonDisabled,
}: Props) {
  const { destructive, destructiveForeground, sucess, sucessForeground } =
    useTheme();

  return (
    <View
      style={{
        paddingVertical: layouts.padding,
        borderTopWidth: layouts.borderWidth,
        borderTopColor:
          isSuccess === null
            ? colors.transparent
            : isSuccess === true
            ? sucessForeground
            : destructiveForeground,
        paddingHorizontal: layouts.padding,
        backgroundColor:
          isSuccess === null
            ? colors.transparent
            : isSuccess === true
            ? sucess
            : destructive,
      }}
    >
      {isSuccess !== null ? (
        <View
          style={{
            gap: layouts.padding,
            backgroundColor: colors.transparent,
          }}
        >
          <View
            style={{
              backgroundColor: colors.transparent,
              gap: layouts.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: layouts.padding,
                backgroundColor: colors.transparent,
              }}
            >
              <Icon
                name={isSuccess ? "checkCircle" : "closeCircle"}
                color={isSuccess ? sucessForeground : destructiveForeground}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: isSuccess ? sucessForeground : destructiveForeground,
                }}
              >
                {isSuccess ? "Excellect" : "Incorrect"}
              </Text>
            </View>
            {isSuccess === false && (
              <View
                style={{
                  backgroundColor: colors.transparent,
                  flexDirection: "row",
                  gap: layouts.padding,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: destructiveForeground,
                  }}
                >
                  Correct Answer:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: destructiveForeground,
                  }}
                >
                  {correctAnswer}
                </Text>
              </View>
            )}
          </View>
          <Button
            onPress={onPressContinue}
            viewStyle={{
              backgroundColor: isSuccess
                ? sucessForeground
                : destructiveForeground,
            }}
            textStyle={{
              color: isSuccess ? sucess : destructive,
            }}
          >
            Continue
          </Button>
        </View>
      ) : (
        <Button disabled={checkButtonDisabled} onPress={onPressCheck}>
          Check
        </Button>
      )}
    </View>
  );
}
