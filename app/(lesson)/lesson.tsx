import ExerciseScreen from "@/components/exercise/screens/exercise";
import { Metadata } from "@/components/metadata";
import { CURRENT } from "@/constants/dev";
import { getExerxise } from "@/content/courses";
import { useCourse } from "@/context/course";

export default function Lesson() {
  const { courseId } = useCourse();
  if (!courseId) return null;

  const exercise = getExerxise({
    courseId,
    chapterId: CURRENT.chapterId,
    sectionId: CURRENT.sectionId,
    lessonId: CURRENT.lessonId,
    exerciseId: CURRENT.exerciseId,
  });
  if (!exercise) return null;

  return (
    <>
      <Metadata
        title="Lesson"
        description="Learn a new lesson every day to keep your streak."
      />
      <ExerciseScreen exercise={exercise} />
    </>
  );
}
