import { useState } from "react";
import { ScrollView } from "react-native";

import { CourseDetailsBar } from "@/components/course-details-bar";
import { Icon } from "@/components/icons";
import { LessonItem } from "@/components/lesson-item";
import { Metadata } from "@/components/metadata";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { getCourseContentById } from "@/content/courses";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useTheme } from "@/context/theme";
import { CourseChapter } from "@/types";

const CAMP = 16;
const CIRCLE_RADUIS = 48;

export default function Learn() {
  const { courseId, courseProgress } = useCourse();
  const { mutedForeground, border, accent } = useTheme();
  const [headerHeight, setHeaderHeight] = useState(0);
  const breakpoint = useBreakpoint();

  let isOdd = true;
  let translateX = 0;

  const course = courseId ? getCourseContentById(courseId) : null;
  const currentSection = course?.sections.find(
    ({ id }) => id == courseProgress.currentSectionId
  );
  if (!currentSection) return null;

  const renderCourseChapter = (chapter: CourseChapter) => (
    <View
      key={chapter.id}
      style={{
        gap: layouts.padding * 4,
        paddingHorizontal: breakpoint === "sm" ? 0 : layouts.padding * 2,
      }}
    >
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: breakpoint == "md" ? "flex-start" : "space-between",
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
          <Text style={{ color: mutedForeground }}>{chapter.description}</Text>
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

          const isCurrentChapter =
            courseProgress.currentChapterId === chapter.id;
          const isCurrentLesson =
            isCurrentChapter && courseProgress.currentLessonId === lession.id;
          const isFinishedLesson =
            (isCurrentChapter && lession.id < courseProgress.currentLessonId) ||
            chapter.id < courseProgress.currentChapterId;
          const currentExercise = lession.exercises.find(
            ({ id }) => id === courseProgress.currentExerciseId
          );
          if (!currentExercise) return null;

          return (
            <LessonItem
              key={index}
              index={index}
              circleRadius={CIRCLE_RADUIS}
              currentExercise={currentExercise}
              isCurrentLesson={isCurrentLesson}
              isFinishedLesson={isFinishedLesson}
              lessonDescription={lession.description}
              totalExercise={lession.exercises.length}
              style={{ transform: [{ translateX }] }}
            />
          );
        })}
      </View>
    </View>
  );

  return (
    <>
      <Metadata
        title="Learn"
        description="Learn a new lesson every day to keep your streak."
      />
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
          {currentSection.chapters.map((chapter) =>
            renderCourseChapter(chapter)
          )}
        </ScrollView>
      </View>
    </>
  );
}
