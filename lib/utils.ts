import { Platform } from "react-native";

export function isWeb() {
  return Platform.OS === "web";
}

export function changeColorOpacity(rgbColor: string, opacity: number): string {
  const regex = /(\d+),\s*(\d+),\s*(\d+)/;
  const match = rgbColor.match(regex);

  if (match) {
    const red = parseInt(match[1], 10);
    const green = parseInt(match[2], 10);
    const blue = parseInt(match[3], 10);

    const validOpacity = Math.min(1, Math.max(0, opacity));
    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${validOpacity})`;

    return rgbaColor;
  } else {
    throw new Error("Invalid RGB color format");
  }
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export function calculatePrecentage(part: number, whole: number) {
  return (part / whole) * 100;
}
