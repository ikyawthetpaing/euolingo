import { ExerciseSet } from "@/types/course";

import { sushiPleaseTranslate } from "@/content/courses/items/translate/sushi-please";
import { waterFlashCard } from "@/content/courses/items/flashcard/water";

export const exerciseOne: ExerciseSet = {
  id: 1,
  xp: 10,
  difficulty: "easy",
  items: [sushiPleaseTranslate, waterFlashCard],
};
