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

export type Course = {
  id: SupportedLanguageCode;
  name: string;
  image: string;
};

export interface ExerciseWord {
  id: number;
  content: string;
}

export interface ExerciseType {
  id: number;
  type: "flashCard" | "listening";
}

export interface FlashCardExerciseWord extends ExerciseWord {
  image: string;
}

export interface FlashCardExercise extends ExerciseType {
  question: string;
  words: FlashCardExerciseWord[];
  correctWordId: number;
}

export interface ListeningExercise extends ExerciseType {
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

export type CourseLesson = {
  id: number;
  description: string;
  exercises: CourseExercise[];
};

export type CourseChapter = {
  id: number;
  title: string;
  description: string;
  lessons: CourseLesson[];
};

export type CourseSection = {
  id: number;
  title: string;
  chapters: CourseChapter[];
};

export type CourseContent = {
  id: SupportedLanguageCode;
  sections: CourseSection[];
};
