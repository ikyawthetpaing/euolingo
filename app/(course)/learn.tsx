import { useState } from "react";
import Head from "expo-router/head";
import { Animated, ScrollView } from "react-native";

import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";
import { layouts } from "@/constants/layouts";
import { getCourseContentById } from "@/content/courses";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";

const CAMP = 32;

export default function Learn() {
  const { courseId } = useCourse();
  const {
    mutedForeground,
    border,
    accent,
    background,
    muted,
    primary,
    primaryForeground,
  } = useTheme();
  const course = courseId ? getCourseContentById(courseId) : undefined;
  const currentSection = course?.sections[0];
  const [headerHeight, setHeaderHeight] = useState(0);
  const breakpoint = useBreakpoint();
  let isOdd = true;
  let translateX = 0;
  return (
    <>
      <Head>
        <title>Learn - {appConfig.name}</title>
        <meta name="description" content="Register now!" />
      </Head>
      <View style={{ flex: 1, position: "relative" }}>
        <View
          style={{
            paddingTop:
              breakpoint === "sm"
                ? layouts.padding
                : breakpoint === "md"
                ? layouts.padding * 2
                : layouts.padding * 3,
            paddingBottom: layouts.padding,
            alignItems: "center",
            borderBottomWidth: layouts.borderWidth,
            borderBottomColor: border,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            zIndex: 9999,
          }}
          onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: mutedForeground }}
          >
            {currentSection?.title}
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingTop:
              breakpoint == "sm"
                ? headerHeight
                : headerHeight + layouts.padding * 2,
            paddingBottom: layouts.padding * 2,
            gap: layouts.padding * 4,
          }}
          showsVerticalScrollIndicator={false}
        >
          {currentSection?.chapters.map((chapter, index) => (
            <View
              key={index}
              style={{
                gap: layouts.padding * 4,
                paddingHorizontal:
                  breakpoint === "sm" ? 0 : layouts.padding * 2,
              }}
            >
              <View
                style={[
                  {
                    flexDirection: "row",
                    justifyContent:
                      breakpoint == "md" ? "flex-start" : "space-between",
                    padding: layouts.padding * 2,
                    backgroundColor: accent,
                    borderRadius: breakpoint === "sm" ? 0 : layouts.padding,
                    alignItems: "center",
                  },
                  breakpoint == "sm" && { paddingHorizontal: layouts.padding },
                ]}
              >
                <View
                  style={{
                    backgroundColor: accent,
                    gap: layouts.padding,
                    flex: 1,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {chapter.title}
                  </Text>
                  <Text style={{ color: mutedForeground }}>
                    {chapter.description}
                  </Text>
                </View>
                <Button
                  variant="outline"
                  viewStyle={{
                    borderColor: mutedForeground,
                    padding: layouts.padding * 0.5,
                  }}
                >
                  <Icon icon="notebook" />
                </Button>
              </View>

              <View style={{ gap: layouts.padding * 2, alignItems: "center" }}>
                {chapter.lessons.map((lession, _index) => {
                  if (translateX > CAMP || translateX < -CAMP) {
                    isOdd = !isOdd;
                  }

                  if (_index !== 0) {
                    isOdd ? (translateX += CAMP) : (translateX -= CAMP);
                  }
                  return (
                    <View
                      key={_index}
                      style={{
                        width: 64,
                        aspectRatio: 1,
                        borderRadius: 64,
                        backgroundColor: _index === 0 ? primary : muted,
                        justifyContent: "center",
                        alignItems: "center",
                        transform: [
                          {
                            translateX,
                            rotateY: new Animated.Value(45),
                          },
                        ],
                      }}
                    >
                      {_index === 0 ? (
                        <Icon icon="star" color={primaryForeground} size={24} />
                      ) : (
                        <Icon icon="lock" size={24} />
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
