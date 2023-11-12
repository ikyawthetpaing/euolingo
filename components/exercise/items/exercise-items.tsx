import { Text } from "@/components/themed";
import {
  ExerciseItemProps,
  ExerciseItemVariant as ExerciseItemType,
  FlashCardExercise,
  TranslateExercise,
} from "@/types/course";

import { FlashCardItem } from "./flash-card-item";
import { TranslateItem } from "./translate-item";

interface Props extends ExerciseItemProps {
  exerciseItem: ExerciseItemType;
}

export default function ExerciseItems({
  exerciseItem,
  onContinue,
  onResult,
}: Props) {
  if (exerciseItem.type === "flashCard") {
    return (
      <FlashCardItem
        exercise={exerciseItem as FlashCardExercise}
        onResult={onResult}
        onContinue={onContinue}
      />
    );
  } else if (exerciseItem.type === "translate") {
    return (
      <TranslateItem
        exercise={exerciseItem as TranslateExercise}
        onResult={onResult}
        onContinue={onContinue}
      />
    );
  } else {
    return <Text>Unknown exercise</Text>;
  }
}
