import { courseAudio } from "@/assets/audios/course";
import { Course, FlashCardExercise } from "@/types/course";

export const courseContent: Course = {
  sections: [
    {
      id: 0,
      title: {
        en: "Section 1: Rookie",
        jp: "セクション 1: ルーキー",
        mm: "အပိုင်း 1- လူသစ်",
        th: "ส่วนที่ 1: มือใหม่",
      },
      chapters: [
        {
          id: 0,
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
          lessons: [
            {
              id: 0,
              description: {
                en: "Order food",
                jp: "注文します",
                mm: "အစားအသောက်များ မှာယူပါ။",
                th: "สั่งอาหาร",
              },
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 1,
              description: {
                en: "Order food",
                jp: "注文します",
                mm: "အစားအသောက်များ မှာယူပါ။",
                th: "สั่งอาหาร",
              },
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 2,
              description: {
                en: "Order food",
                jp: "注文します",
                mm: "အစားအသောက်များ မှာယူပါ။",
                th: "สั่งอาหาร",
              },
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 3,
              description: {
                en: "Order food",
                jp: "注文します",
                mm: "အစားအသောက်များ မှာယူပါ။",
                th: "สั่งอาหาร",
              },
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 4,
              description: {
                en: "Order food",
                jp: "注文します",
                mm: "အစားအသောက်များ မှာယူပါ။",
                th: "สั่งอาหาร",
              },
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “tea”?",
                        jp: "この中で「お茶」はどれですか？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "လက်ဖက်ရည်" လဲ။',
                        th: 'ข้อใดคือ "ชา"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: {
                        en: "Which one of these is “sushi”?",
                        jp: "この中で「寿司」はどれですか?",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ဆူရှီ" လဲ။',
                        th: 'ข้อใดคือ "ซูชิ"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: {
                        en: 'Which one of these is "rice"?',
                        jp: "このうち「お米」はどれ？",
                        mm: 'အဲဒီထဲက ဘယ်ဟာက "ထမင်း" လဲ။',
                        th: 'ข้อใดคือ "ข้าว"?',
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
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
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
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
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
                      correctWordId: 3,
                    } satisfies FlashCardExercise,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
