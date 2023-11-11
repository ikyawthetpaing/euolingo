import { courseAudio } from "@/assets/audios/course";
import { FlashCardExercise } from "@/types/course";

export const waterFlashCard: FlashCardExercise = {
  id: 1,
  type: "flashCard",
  question: {
    en: 'Which one of these is "water"?',
    jp: "この中で「水」はどれ？",
    mm: 'အဲဒီထဲက ဘယ်ဟာက "ရေ" လဲ။',
    th: 'ข้อใดคือ "น้ำ"?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "tea",
        jp: "おちゃ",
        mm: "လက်ဖက်ရည်",
        th: "ชา",
      },
      image: "https://www.svgrepo.com/show/475139/tea.svg",
      audio: courseAudio.tea,
    },
    {
      id: 1,
      content: {
        en: "water",
        jp: "みず",
        mm: "ရေ",
        th: "น้ำ",
      },
      image: "https://www.svgrepo.com/show/218416/water.svg",
      audio: courseAudio.water,
    },
    {
      id: 2,
      content: {
        en: "sushi",
        jp: "すし",
        mm: "ဆူရှီ",
        th: "ซูชิ",
      },
      image: "https://www.svgrepo.com/show/402766/sushi.svg",
      audio: courseAudio.sushi,
    },
    {
      id: 3,
      content: {
        en: "rice",
        jp: "ごはん",
        mm: "ထမင်း",
        th: "ข้าว",
      },
      image: "https://www.svgrepo.com/show/505200/rice.svg",
      audio: courseAudio.rice,
    },
  ],
  correctWordId: 1,
};
