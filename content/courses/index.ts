import { courseContent } from "@/content/courses/data";
import {
  CourseProgress,
  Exercise,
  ExerciseItem,
  FlashCardExercise,
  ListeningExercise,
} from "@/types/course";

export function getExercise({
  sectionId,
  chapterId,
  lessonId,
  exerciseId,
}: CourseProgress): Exercise | null {
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

export function nextProgress(current: CourseProgress): CourseProgress | null {
  const { sectionId, chapterId, lessonId, exerciseId } = current;
  const section = courseContent.sections[sectionId];
  const chapter = section.chapters[chapterId];
  const lesson = chapter.lessons[lessonId];
  const exercisesCount = lesson.exercises.length;

  if (exerciseId < exercisesCount - 1) {
    return { ...current, exerciseId: exerciseId + 1 };
  } else if (lessonId < chapter.lessons.length - 1) {
    return { ...current, lessonId: lessonId + 1, exerciseId: 0 };
  } else if (chapterId < section.chapters.length - 1) {
    return { ...current, chapterId: chapterId + 1, lessonId: 0, exerciseId: 0 };
  } else if (sectionId < courseContent.sections.length - 1) {
    return {
      ...current,
      sectionId: sectionId + 1,
      chapterId: 0,
      lessonId: 0,
      exerciseId: 0,
    };
  }

  return null;
}

export function isFlashCardExercise(
  exercise: ExerciseItem
): exercise is FlashCardExercise {
  return (exercise as FlashCardExercise).question !== undefined;
}

export function isListeningExercise(
  exercise: ExerciseItem
): exercise is ListeningExercise {
  return (exercise as ListeningExercise).audio !== undefined;
}
