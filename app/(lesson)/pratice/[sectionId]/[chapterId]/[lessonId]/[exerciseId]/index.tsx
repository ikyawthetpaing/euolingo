import { useLocalSearchParams } from "expo-router";

import ExerciseScreen from "@/components/exercise/screens/exercise";
import { Metadata } from "@/components/metadata";
import { getExercise } from "@/content/courses/data";

export default function Practice() {
  const { sectionId, chapterId, lessonId, exerciseId } = useLocalSearchParams();

  const toNumber = (value: any) =>
    typeof value === "string" ? Number(value) : -1;

  const exercise = getExercise({
    sectionId: toNumber(sectionId),
    chapterId: toNumber(chapterId),
    lessonId: toNumber(lessonId),
    exerciseId: toNumber(exerciseId),
  });
  if (!exercise) return null;

  return (
    <>
      <Metadata
        title="Pratice"
        description="Pratice a lesson every day to keep your streak."
      />
      <ExerciseScreen exercise={exercise} increaseProgress={false} />
    </>
  );
}
