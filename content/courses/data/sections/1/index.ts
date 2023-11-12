import { Section } from "@/types/course";

import { chapterOne } from "./chapters/1";

export const sectionOne: Section = {
  id: 1,
  title: {
    en: "Section 1: Rookie",
    jp: "セクション 1: ルーキー",
    mm: "အပိုင်း 1- လူသစ်",
    th: "ส่วนที่ 1: มือใหม่",
  },
  chapters: [chapterOne],
};
