import { Lesson } from "@/types/course";
import { exerciseOne } from "./exercises/1";

export const lessonOne: Lesson = {
  id: 1,
  description: {
    en: "Order food",
    jp: "注文します",
    mm: "အစားအသောက်များ မှာယူပါ။",
    th: "สั่งอาหาร",
  },
  exercises: [exerciseOne]
};
