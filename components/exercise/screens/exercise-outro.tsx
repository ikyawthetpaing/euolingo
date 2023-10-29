import { router } from "expo-router";
import { useWindowDimensions } from "react-native";

import { Container } from "@/components/container";
import { Icon } from "@/components/icons";
import { Shell } from "@/components/shell";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { IconName } from "@/types";

interface Props {
  xp: number;
  duration: string;
  target: string;
}

const exerciseResults: {
  icon: IconName;
  color: string;
  type: keyof Props;
  title: string;
}[] = [
  {
    icon: "bolt",
    color: "orange",
    type: "xp",

    title: "Total xp",
  },
  {
    icon: "clockCircle",
    color: "blue",
    type: "duration",
    title: "Speedy",
  },
  {
    icon: "targetCircle",
    color: "green",
    type: "target",
    title: "Good",
  },
];

export default function LessonOutrolayout(props: Props) {
  const breakpoint = useBreakpoint();
  const layout = useWindowDimensions();

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
                  backgroundColor: result.color,
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
                    color: "#fff",
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
                    <Icon name={result.icon} color={result.color} />
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: result.color,
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
          <Button onPress={() => router.push("/learn")}>Continue</Button>
        </View>
      </Container>
    </Shell>
  );
}
