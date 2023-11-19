import { TranslateExercise } from "@/types/course";

export const sushiPleaseTranslate: TranslateExercise = {
  id: 0,
  type: "translate",
  question: {
    en: "Translate this sentence",
    ja: "この文を翻訳してください",
    my: "ဒီစာကြောင်းကို ဘာသာပြန်ပါ။",
    th: "แปลประโยคนี้",
    cn: "翻译这句话",
    es: "Traducir esta frase",
    fr: "Traduisez cette phrase",
    hi: "इस वाक्य का अनुवाद करें",
    ru: "Переведите это предложение",
  },
  sentence: {
    content: {
      en: "Sushi, please",
      ja: "お寿司をください",
      my: "ကျေးဇူးပြုပြီး ဆူရှီ",
      th: "ซูชิโปรด",
      cn: "寿司，请",
      es: "sushi, por favor",
      fr: "Des sushis, s'il vous plaît",
      hi: "सुशी, कृपया",
      ru: "Суши, пожалуйста",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "tea",
          ja: "おちゃ",
          my: "လက်ဖက်ရည်",
          th: "ชา",
          cn: "茶",
          es: "té",
          fr: "thé",
          hi: "चाय",
          ru: "чай",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "sushi",
          ja: "すし",
          my: "ဆူရှီ",
          th: "ซูชิ",
          cn: "寿司",
          es: "Sushi",
          fr: "Sushi",
          hi: "सुशी",
          ru: "суши",
        },
      },
    },
    {
      id: 2,
      word: {
        content: {
          en: "please",
          ja: "ください",
          my: "ကျေးဇူးပြုပြီး",
          th: "โปรด",
          cn: "请",
          es: "por favor",
          fr: "s'il te plaît",
          hi: "कृपया",
          ru: "пожалуйста",
        },
      },
    },
    {
      id: 3,
      word: {
        content: {
          en: "water",
          ja: "みず",
          my: "ရေ",
          th: "น้ำ",
          cn: "水",
          es: "agua",
          fr: "eau",
          hi: "पानी",
          ru: "вода",
        },
      },
    },
  ],
  correctOrderIds: {
    en: [1, 2],
    ja: [1, 2],
    my: [2, 1],
    th: [1, 2],
    cn: [1, 2],
    es: [1, 2],
    fr: [1, 2],
    hi: [1, 2],
    ru: [1, 2],
  },
};
