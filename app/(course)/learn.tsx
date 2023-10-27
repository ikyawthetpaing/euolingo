import { useState } from "react";
import { router } from "expo-router";
import Head from "expo-router/head";
import { Pressable, ScrollView } from "react-native";
import Popover from "react-native-popover-view/dist/Popover";

import { CourseDetailsBar } from "@/components/course-details-bar";
import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";
import { CURRENT } from "@/constants/dev";
import { layouts } from "@/constants/layouts";
import { getCourseContentById } from "@/content/courses";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";

const CAMP = 16;
const CIRCLE_WIDTH = 64;
const CIRCLE_RADUIS = CIRCLE_WIDTH / 2;

export default function Learn() {
  const { courseId } = useCourse();
  const {
    mutedForeground,
    border,
    accent,
    muted,
    primary,
    primaryForeground,
    foreground,
  } = useTheme();
  const [headerHeight, setHeaderHeight] = useState(0);
  const breakpoint = useBreakpoint();

  let isOdd = true;
  let translateX = 0;

  const course = courseId ? getCourseContentById(courseId) : undefined;
  const currentSection = course?.sections.find(
    ({ id }) => id == CURRENT.sectionId
  );
  if (!currentSection) return null;

  return (
    <>
      <Head>
        <title>Learn - {appConfig.name}</title>
        <meta name="description" content="Register now!" />
      </Head>
      <View style={{ flex: 1, position: "relative" }}>
        <View
          style={{
            borderBottomWidth: layouts.borderWidth,
            borderBottomColor: border,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            zIndex: 9999,
            gap: layouts.padding * 2,
          }}
          onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
        >
          {(breakpoint === "sm" || breakpoint === "md") && courseId && (
            <CourseDetailsBar
              courseId={courseId}
              style={{
                paddingTop:
                  breakpoint == "sm" ? layouts.padding : layouts.padding * 3,
                paddingHorizontal:
                  breakpoint == "sm" ? layouts.padding : layouts.padding * 2,
              }}
            />
          )}
          <View
            style={{
              paddingBottom: layouts.padding,
              paddingTop:
                breakpoint === "sm"
                  ? 0
                  : breakpoint === "md"
                  ? layouts.padding * 2
                  : layouts.padding * 3,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: mutedForeground,
                textAlign: "center",
              }}
            >
              {currentSection?.title}
            </Text>
          </View>
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
          {currentSection.chapters.map((chapter) => (
            <View
              key={chapter.id}
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
                  breakpoint == "sm" && {
                    paddingHorizontal: layouts.padding,
                  },
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
                  <Icon name="notebook" />
                </Button>
              </View>

              <View
                style={{
                  gap: layouts.padding * 2,
                  alignItems: "center",
                }}
              >
                {chapter.lessons.map((lession, index) => {
                  if (translateX > CAMP || translateX < -CAMP) {
                    isOdd = !isOdd;
                  }

                  if (index !== 0) {
                    isOdd
                      ? (translateX += CIRCLE_RADUIS)
                      : (translateX -= CIRCLE_RADUIS);
                  }

                  const isCurrentChapter = CURRENT.chapterId === chapter.id;
                  const isCurrentLesson =
                    isCurrentChapter && CURRENT.lessonId === lession.id;
                  const isFinishedLesson =
                    (isCurrentChapter && lession.id < CURRENT.lessonId) ||
                    chapter.id < CURRENT.chapterId;
                  const isNotFinishedLesson =
                    !isFinishedLesson && !isCurrentLesson;
                  const currentExercise = lession.exercises.find(
                    ({ id }) => id === CURRENT.exerciseId
                  );
                  if (!currentExercise) return null;

                  return (
                    <Popover
                      popoverStyle={{
                        borderRadius: layouts.padding,
                        backgroundColor: border,
                      }}
                      from={
                        <Pressable
                          style={{
                            padding: layouts.padding * 0.5,
                            borderColor: isCurrentLesson
                              ? border
                              : layouts.transparentColor,
                            borderWidth: layouts.padding * 0.5,
                            borderRadius: 9999,
                            transform: [{ translateX }],
                          }}
                        >
                          <View
                            style={{
                              width: CIRCLE_WIDTH,
                              aspectRatio: 1,
                              borderRadius: CIRCLE_WIDTH,
                              backgroundColor:
                                isCurrentLesson ||
                                isFinishedLesson ||
                                index === 0
                                  ? primary
                                  : mutedForeground,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {isCurrentLesson ? (
                              <Icon
                                name="star"
                                size={24}
                                color={primaryForeground}
                              />
                            ) : isFinishedLesson ? (
                              <Icon
                                name="check"
                                size={24}
                                color={primaryForeground}
                              />
                            ) : index === 0 ? (
                              <Icon
                                name="skip"
                                size={24}
                                color={primaryForeground}
                              />
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
                              color: isNotFinishedLesson
                                ? mutedForeground
                                : foreground,
                            }}
                          >
                            {lession.description}
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
                            : `Exercise ${currentExercise.id + 1} of ${
                                lession.exercises.length
                              }`}
                        </Text>
                        <Button
                          onPress={() => router.push("/lesson")}
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
                })}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
