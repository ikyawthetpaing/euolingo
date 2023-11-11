import { TranslateExercise } from "@/types/course";

export const sushiPleaseTranslate: TranslateExercise = {
  id: 0,
  type: "translate",
  question: {
    en: "Translate this sentence",
    jp: "この文を翻訳してください",
    mm: "ဒီစာကြောင်းကို ဘာသာပြန်ပါ။",
    th: "แปลประโยคนี้",
  },
  sentence: {
    content: {
      en: "Sushi, please",
      jp: "お寿司をください",
      mm: "ကျေးဇူးပြုပြီး ဆူရှီ",
      th: "ซูชิโปรด",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "tea",
          jp: "おちゃ",
          mm: "လက်ဖက်ရည်",
          th: "ชา",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "sushi",
          jp: "すし",
          mm: "ဆူရှီ",
          th: "ซูชิ",
        },
      },
    },
    {
      id: 2,
      word: {
        content: {
          en: "please",
          jp: "ください",
          mm: "ကျေးဇူးပြုပြီး",
          th: "โปรด",
        },
      },
    },
    {
      id: 3,
      word: {
        content: {
          en: "water",
          jp: "みず",
          mm: "ရေ",
          th: "น้ำ",
        },
      },
    },
  ],
  correctOrderIds: {
    en: [1, 2],
    jp: [1, 2],
    mm: [2, 1],
    th: [1, 2],
  },
};
