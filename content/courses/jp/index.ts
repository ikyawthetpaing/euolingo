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
                        { id: 0, content: "おちゃ" },
                        { id: 1, content: "みず" },
                        { id: 2, content: "すし" },
                        { id: 3, content: "ごはん" },
                      ],
                      correctWordId: 2,
                    } satisfies FlashCardExercise,
                    {
                      id: 1,
                      type: "flashCard",
                      question: "What is the meaning of 'おはようございます'?",
                      words: [
                        { id: 0, content: "Good morning" },
                        { id: 1, content: "Good night" },
                        { id: 2, content: "Thank you" },
                        { id: 3, content: "Hello" },
                      ],
                      correctWordId: 0,
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
