import { Href } from "expo-router";

import { Icons } from "@/components/icons";

export type SupportedLanguageCode = "en" | "mm" | "jp" | "th";

export type LanguageDetails = {
  key: SupportedLanguageCode;
  name: string;
  flag: string;
};

export type Translations = {
  [key in SupportedLanguageCode]: string;
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

export type CourseExercise = {
  id: number;
  xp: number;
  mode: "easy" | "medium" | "hard";
  items: CourseExerciseItem[];
};

export interface CourseLesson {
  id: number;
  description: string;
  exercises: CourseExercise[];
}

export interface CourseChapter {
  id: number;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface CourseSection {
  id: number;
  title: string;
  chapters: CourseChapter[];
}

export interface CourseContent {
  id: SupportedLanguageCode;
  sections: CourseSection[];
}
