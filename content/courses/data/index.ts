import { Course } from "@/types/course";
import { CourseProgression, ExerciseSet } from "@/types/course";
import { sectionOne } from "./sections/1";

export const courseContent: Course = {
  sections: [sectionOne]
}

export function getExercise({
  sectionIndex: sectionId,
  chapterIndex: chapterId,
  lessonIndex: lessonId,
  exerciseIndex: exerciseId,
}: CourseProgression): ExerciseSet | null {
  const section = courseContent.sections[sectionId];
  if (section) {
    const chapter = section.chapters[chapterId];
    if (chapter) {
      const lesson = chapter.lessons[lessonId];
      if (lesson && lesson.exercises && lesson.exercises.length > exerciseId) {
        return lesson.exercises[exerciseId];
      }
    }
  }
  return null;
}

export function nextProgress(current: CourseProgression): CourseProgression | null {
  const { sectionIndex: sectionId, chapterIndex: chapterId, lessonIndex: lessonId, exerciseIndex: exerciseId } = current;
  const section = courseContent.sections[sectionId];
  const chapter = section.chapters[chapterId];
  const lesson = chapter.lessons[lessonId];
  const exercisesCount = lesson.exercises.length;

  if (exerciseId < exercisesCount - 1) {
    return { ...current, exerciseIndex: exerciseId + 1 };
  } else if (lessonId < chapter.lessons.length - 1) {
    return { ...current, lessonIndex: lessonId + 1, exerciseIndex: 0 };
  } else if (chapterId < section.chapters.length - 1) {
    return { ...current, chapterIndex: chapterId + 1, lessonIndex: 0, exerciseIndex: 0 };
  } else if (sectionId < courseContent.sections.length - 1) {
    return {
      ...current,
      sectionIndex: sectionId + 1,
      chapterIndex: 0,
      lessonIndex: 0,
      exerciseIndex: 0,
    };
  }

  return null;
}
