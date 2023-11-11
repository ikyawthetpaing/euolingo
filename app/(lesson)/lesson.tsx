import ExerciseScreen from "@/components/exercise/screens/exercise";
import { Metadata } from "@/components/metadata";
import { getExercise } from "@/content/courses/data";
import { useCourse } from "@/context/course";

export default function Lesson() {
  const { courseId, courseProgress } = useCourse();
  if (!courseId) return null;

  const exercise = getExercise(courseProgress);
  if (!exercise) return null;

  return (
    <>
      <Metadata
        title="Lesson"
        description="Learn a new lesson every day to keep your streak."
      />
      <ExerciseScreen exercise={exercise} increaseProgress={true} />
    </>
  );
}
