import { Text } from "@/components/themed";
import {
  CourseExerciseItem,
  ExerciseItemProps,
  FlashCardExercise,
} from "@/types";

import { FlashCardItem } from "./flash-card-item";

interface Props extends ExerciseItemProps {
  exerciseItem: CourseExerciseItem;
}

export default function ExerciseItem({
  exerciseItem,
  onContinue,
  onResult,
}: Props) {
  if (exerciseItem.type === "flashCard") {
    const item = exerciseItem as FlashCardExercise;
    return (
      <FlashCardItem
        exercise={item}
        onResult={onResult}
        onContinue={onContinue}
      />
    );
  } else {
    return <Text>Unknown exercise type</Text>;
  }
}
