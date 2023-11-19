import { Lesson } from "@/types/course";

import { exerciseOne } from "./exercises/1";

export const lessonOne: Lesson = {
  id: 1,
  description: {
    en: "Order food",
    ja: "注文します",
    my: "အစားအသောက်များ မှာယူပါ။",
    th: "สั่งอาหาร",
    cn: "点菜",
    es: "Ordenar comida",
    fr: "Commander de la nourriture",
    hi: "भोजन का आदेश करें",
    ru: "заказать еду",
  },
  exercises: [exerciseOne],
};
