import { Chapter } from "@/types/course";

import { lessonOne } from "./lessons/1";

export const chapterOne: Chapter = {
  id: 1,
  title: {
    en: "Unit 1",
    ja: "ユニット1",
    my: "ယူနစ် ၁",
    th: "บทที่ 1",
    cn: "单元1",
    es: "Unidad 1",
    fr: "Unité 1",
    hi: "यूनिट 1",
    ru: "Раздел 1",
  },
  description: {
    en: "Order food, describe people",
    ja: "食べ物を注文し、人々について説明する",
    my: "အစားအစာကို မှာယူပါ၊ လူများကို ဖော်ပြပါ။",
    th: "สั่งอาหารบรรยายคน",
    cn: "点菜、描述人",
    es: "Ordenar comida, describir personas.",
    fr: "Commander de la nourriture, décrire les gens",
    hi: "खाना ऑर्डर करें, लोगों का वर्णन करें",
    ru: "Заказать еду, описать людей",
  },
  lessons: [lessonOne, lessonOne, lessonOne, lessonOne, lessonOne],
};
