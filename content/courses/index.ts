import { Course, CourseContent, SupportedLanguageCode } from "@/types";

import { japaneseCourse, japaneseCourseContent } from "./jp";

export const courses: Course[] = [japaneseCourse];
export const courseContents: CourseContent[] = [japaneseCourseContent];

export function getCourseById(_id: SupportedLanguageCode) {
  return courses.find(({ id }) => id === _id);
}
export function getCourseContentById(_id: SupportedLanguageCode) {
  return courseContents.find(({ id }) => id === _id);
}
