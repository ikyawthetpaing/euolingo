import { AVPlaybackSource } from "expo-av";

import { Translations } from "@/types";

export interface ExerciseItemProps {
  onResult: (sucess: boolean) => void;
  onContinue: () => void;
}

export interface ExerciseWord {
  id: number;
  content: Translations;
  audio: AVPlaybackSource;
}

export interface ExerciseType {
  id: number;
  type: "flashCard" | "listening";
}

export interface FlashCardExerciseWord extends ExerciseWord {
  image: string;
}

export interface FlashCardExercise extends ExerciseType {
  question: Translations;
  words: FlashCardExerciseWord[];
  correctWordId: number;
}

export interface ListeningExercise extends ExerciseType {
  audio: string;
  sentence: string;
  availableAnswers: ExerciseWord[];
  correctOrderIds: number[];
}

export type ExerciseItem = FlashCardExercise | ListeningExercise;

export type Exercise = {
  id: number;
  xp: number;
  mode: "easy" | "medium" | "hard";
  items: ExerciseItem[];
};

export type Lesson = {
  id: number;
  description: Translations;
  exercises: Exercise[];
};

export type Chapter = {
  id: number;
  title: Translations;
  description: Translations;
  lessons: Lesson[];
};

export type Section = {
  id: number;
  title: Translations;
  chapters: Chapter[];
};

export type Course = {
  sections: Section[];
};
