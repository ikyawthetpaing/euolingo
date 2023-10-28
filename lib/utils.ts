import { Platform } from "react-native";

export function isWeb() {
  return Platform.OS === "web";
}

export function changeColorOpacity(rgbColor: string, opacity: number): string {
  // Extract RGB values from the input string
  const regex = /(\d+),\s*(\d+),\s*(\d+)/;
  const match = rgbColor.match(regex);

  if (match) {
    // Extract RGB values and convert them to numbers
    const red = parseInt(match[1], 10);
    const green = parseInt(match[2], 10);
    const blue = parseInt(match[3], 10);

    // Ensure opacity is within the valid range [0, 1]
    const validOpacity = Math.min(1, Math.max(0, opacity));

    // Convert RGB to RGBA format
    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${validOpacity})`;

    return rgbaColor;
  } else {
    // Invalid input format, return an error message or handle as appropriate
    throw new Error("Invalid RGB color format");
  }
}

export function shuffleArray<T>(array: T[]): T[] {
  // Create a copy of the original array to avoid modifying the input array
  const shuffledArray = array.slice();

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j indices
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
