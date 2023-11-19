import { Section } from "@/types/course";

import { chapterOne } from "./chapters/1";

export const sectionOne: Section = {
  id: 1,
  title: {
    en: "Section 1: Rookie",
    ja: "セクション 1: ルーキー",
    my: "အပိုင်း 1- လူသစ်",
    th: "ส่วนที่ 1: มือใหม่",
    cn: "第 1 部分：新秀",
    es: "Sección 1: Novato",
    fr: "Section 1 : Recrue",
    hi: "धारा 1: नौसिखिया",
    ru: "Раздел 1: Новичок",
  },
  chapters: [chapterOne],
};
