import { Href } from "expo-router";

import { Icons } from "@/components/icons";

export type SupportedLanguageCode = "en" | "mm" | "jp" | "th";

export type LanguageDetails = {
  key: SupportedLanguageCode;
  name: string;
  flag: string;
};

export type Translation = {
  content: string;
};

export type Translations = {
  [key in SupportedLanguageCode]: Translation;
};

export type CommonTranslations = {
  [key: string]: Translations;
};

export type Icon = keyof typeof Icons;

export type NavItem = {
  icon: keyof typeof Icons;
  label: string;
  href: Href;
};

export type CourseConfig = {
  sidebarNavItems: NavItem[];
  mobileNavItems: NavItem[];
};

export interface Course {
  id: SupportedLanguageCode;
  name: string;
  image: string;
}

export type ExerciseWord = {
  id: number;
  content: string;
};

export interface FlashCardExercise {
  question: string;
  words: ExerciseWord[];
  correctWordId: number;
}

export interface ListeningExercise {
  audio: string;
  sentence: string;
  availableAnswers: ExerciseWord[];
  correctOrderIds: number[];
}

export type CourseExerciseItem = FlashCardExercise | ListeningExercise;

export interface Lesson {
  id: number;
  exercises: { id: number; items: CourseExerciseItem[] }[];
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Section {
  id: number;
  title: string;
  chapters: Chapter[];
}

export interface CourseContent {
  id: SupportedLanguageCode;
  sections: Section[];
}

// export interface CourseContent {
//   id: SupportedLanguageCode;
//   sections: {
//     id: number;
//     title: string;
//     chapters: {
//       id: number;
//       title: string;
//       description: string;
//       lessons: {
//         id: number;
//         exercises: { id: number; items: CourseExerciseItem[] }[];
//       }[];
//     }[];
//   }[];
// }

// export type LessonType = typeof CourseContent["sections"]["chapters"]["lessons"];
