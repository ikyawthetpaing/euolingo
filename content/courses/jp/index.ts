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
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 1,
              description: "Ask for directions",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 2,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 3,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 4,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 1,
          title: "Unit 2",
          description: "Introduce yourself, order food and drink",
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
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 1,
              description: "Ask for directions",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 2,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 3,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 4,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Unit 3",
          description: "Talk about countries, ask for directions",
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
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 1,
              description: "Ask for directions",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 2,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 3,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
              ],
            },
            {
              id: 4,
              description: "Describe belongings",
              exercises: [
                {
                  id: 0,
                  xp: 10,
                  mode: "easy",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 1,
                  xp: 20,
                  mode: "medium",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
                  ],
                },
                {
                  id: 2,
                  xp: 30,
                  mode: "hard",
                  items: [
                    {
                      question: "Which one of these is “sushi”?",
                      words: [
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } as FlashCardExercise,
                    {
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
                    } as FlashCardExercise,
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
