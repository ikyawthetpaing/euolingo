import { router } from "expo-router";
import { useWindowDimensions } from "react-native";

import { Container } from "@/components/container";
import { Icon } from "@/components/icons";
import { Shell } from "@/components/shell";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { nextProgress } from "@/content/courses/data";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";
import { IconName } from "@/types";

interface Props {
  xp: number;
  duration: string;
  target: string;
  increaseProgress: boolean;
}

const exerciseResults: {
  icon: IconName;
  type: keyof Pick<Props, "xp" | "duration" | "target">;
  title: string;
}[] = [
  {
    icon: "bolt",
    type: "xp",
    title: "Total xp",
  },
  {
    icon: "clockCircle",
    type: "duration",
    title: "Speedy",
  },
  {
    icon: "targetCircle",
    type: "target",
    title: "Good",
  },
];

export default function LessonOutrolayout(props: Props) {
  const { foreground, background } = useTheme();
  const breakpoint = useBreakpoint();
  const layout = useWindowDimensions();
  const { courseProgress, setCourseProgress } = useCourse();

  const onContinue = () => {
    if (props.increaseProgress) {
      const nextCourseProgress = nextProgress(courseProgress);
      if (nextCourseProgress) {
        setCourseProgress(nextCourseProgress);
      }
    }
    router.push("/learn");
  };

  return (
    <Shell>
      <Container style={{ padding: layouts.padding }}>
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
            {exerciseResults.map((result, index) => (
              <View
                key={index}
                style={{
                  padding: layouts.borderWidth,
                  borderRadius: layouts.padding,
                  backgroundColor: foreground,
                  width:
                    breakpoint === "sm"
                      ? layout.width / exerciseResults.length -
                        layouts.padding *
                          ((exerciseResults.length + 1) /
                            exerciseResults.length)
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
                  {result.title}
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
                    <Icon name={result.icon} color={foreground} />
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: foreground,
                        fontSize: 18,
                      }}
                    >
                      {props[result.type]}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Button onPress={onContinue}>Continue</Button>
        </View>
      </Container>
    </Shell>
  );
}
