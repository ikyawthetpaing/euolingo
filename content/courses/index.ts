// import { Course, CourseContent, SupportedLanguageCode } from "@/types";

import { SupportedLanguageCode } from "@/types";

import { courseContent } from "./data";

// import { japaneseCourse, japaneseCourseContent } from "./jp";

// export const courses: Course[] = [japaneseCourse];
// export const courseContents: CourseContent[] = [japaneseCourseContent];

// export function getCourseById(_id: SupportedLanguageCode) {
//   return courses.find(({ id }) => id === _id);
// }
// export function getCourseContentById(_id: SupportedLanguageCode) {
//   return courseContents.find(({ id }) => id === _id);
// }
export function getExerxise({
  chapterId,
  courseId,
  exerciseId,
  lessonId,
  sectionId,
}: {
  courseId: SupportedLanguageCode;
  sectionId: number;
  chapterId: number;
  lessonId: number;
  exerciseId: number;
}) {
  const exercise = courseContent.sections
    .find(({ id }) => id === sectionId)
    ?.chapters.find(({ id }) => id === chapterId)
    ?.lessons.find(({ id }) => id === lessonId)
    ?.exercises.find(({ id }) => id === exerciseId);
  return exercise || null;
}
