import { Chapter } from "@/types/course";

import { lessonOne } from "./lessons/1";

export const chapterOne: Chapter = {
  id: 1,
  title: {
    en: "Unit 1",
    jp: "ユニット1",
    mm: "ယူနစ် ၁",
    th: "บทที่ 1",
  },
  description: {
    en: "Order food, describe people",
    jp: "食べ物を注文し、人々について説明する",
    mm: "အစားအစာကို မှာယူပါ၊ လူများကို ဖော်ပြပါ။",
    th: "สั่งอาหารบรรยายคน",
  },
  lessons: [lessonOne, lessonOne, lessonOne, lessonOne, lessonOne],
};
