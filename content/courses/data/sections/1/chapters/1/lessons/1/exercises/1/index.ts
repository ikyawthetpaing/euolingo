import { waterFlashCard } from "@/content/courses/items/flashcard/water";
import { sushiPleaseTranslate } from "@/content/courses/items/translate/sushi-please";
import { ExerciseSet } from "@/types/course";

export const exerciseOne: ExerciseSet = {
  id: 1,
  xp: 10,
  difficulty: "easy",
  items: [sushiPleaseTranslate, waterFlashCard],
};
