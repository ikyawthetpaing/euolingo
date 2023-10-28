import { Course, CourseContent, FlashCardExercise } from "@/types";

export const japaneseCourse: Course = {
  id: "jp",
  name: "Japanese",
  image: "https://www.svgrepo.com/show/249004/japan.svg",
};

export const japaneseCourseContent: CourseContent = {
  id: japaneseCourse.id,
  sections: [
    {
      id: 0,
      title: "Section 1: Rookie",
      chapters: [
        {
          id: 0,
          title: "Unit 1",
          description: "Order food, describe people",
          lessons: [
            {
              id: 0,
              description: "Talk about countries",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: "Which one of these is “sushi”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 1,
                      type: "flashCard",
                      question: "Which one of these is “tea”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: "Which one of these is “water”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 1,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: "Which one of these is “rice”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
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
              description: "Talk about countries",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: "Which one of these is “sushi”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 1,
                      type: "flashCard",
                      question: "Which one of these is “tea”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: "Which one of these is “water”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 1,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: "Which one of these is “rice”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
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
              description: "Talk about countries",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: "Which one of these is “sushi”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 1,
                      type: "flashCard",
                      question: "Which one of these is “tea”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: "Which one of these is “water”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 1,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: "Which one of these is “rice”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
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
              description: "Talk about countries",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: "Which one of these is “sushi”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 1,
                      type: "flashCard",
                      question: "Which one of these is “tea”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: "Which one of these is “water”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 1,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: "Which one of these is “rice”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
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
              description: "Talk about countries",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      id: 0,
                      type: "flashCard",
                      question: "Which one of these is “sushi”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 1,
                      type: "flashCard",
                      question: "Which one of these is “tea”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 0,
                    } satisfies FlashCardExercise,
                    {
                      id: 2,
                      type: "flashCard",
                      question: "Which one of these is “water”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
                        },
                      ],
                      correctWordId: 1,
                    } satisfies FlashCardExercise,
                    {
                      id: 3,
                      type: "flashCard",
                      question: "Which one of these is “rice”?",
                      words: [
                        {
                          id: 0,
                          content: "おちゃ",
                          image: "https://www.svgrepo.com/show/475139/tea.svg",
                        },
                        {
                          id: 1,
                          content: "みず",
                          image:
                            "https://www.svgrepo.com/show/218416/water.svg",
                        },
                        {
                          id: 2,
                          content: "すし",
                          image:
                            "https://www.svgrepo.com/show/402766/sushi.svg",
                        },
                        {
                          id: 3,
                          content: "ごはん",
                          image: "https://www.svgrepo.com/show/505200/rice.svg",
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
