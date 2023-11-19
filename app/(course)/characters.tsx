import { useState } from "react";
import { Pressable, ScrollView } from "react-native";

import { Text, View } from "@/components/themed";
import { layouts } from "@/constants/layouts";
import { courseContent } from "@/content/courses/data";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";

export default function Characters() {
  const { courseId } = useCourse();
  const breakpoint = useBreakpoint();
  const { mutedForeground, border, foreground } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  if (!courseId) return null;

  const characters = courseContent.characters[courseId];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {characters.map(({ role }, index) => (
          <Pressable
            key={index}
            style={{
              flex: 1,
              paddingBottom: layouts.padding,
              paddingTop:
                breakpoint === "sm"
                  ? layouts.padding
                  : breakpoint === "md"
                  ? layouts.padding * 2
                  : layouts.padding * 3,
              borderBottomWidth: layouts.borderWidth,
              borderBottomColor: activeIndex === index ? foreground : border,
            }}
            onPress={() => (activeIndex !== index ? setActiveIndex(index) : {})}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: activeIndex === index ? foreground : mutedForeground,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {role}
            </Text>
          </Pressable>
        ))}
      </View>
      <ScrollView
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          padding: breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
          gap: breakpoint === "sm" ? layouts.padding / 2 : layouts.padding,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {characters[activeIndex].dialogueItems.map((item, index) => {
          const size =
            breakpoint === "sm"
              ? (containerWidth -
                  ((layouts.padding / 2) * 4 + layouts.padding * 2)) /
                5
              : (containerWidth -
                  (layouts.padding * 4 + layouts.padding * 2.0079 * 2)) /
                5;

          return (
            <Pressable
              key={index}
              style={{
                width: size,
                height: size,
                borderWidth: layouts.borderWidth,
                borderColor: border,
                borderRadius: layouts.padding,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, color: mutedForeground }}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
