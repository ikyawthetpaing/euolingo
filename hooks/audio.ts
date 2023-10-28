import { useEffect, useState } from "react";
import { Audio, AVPlaybackSource } from "expo-av";

interface Props {
  source: AVPlaybackSource;
}

export function useAudio({ source }: Props) {
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);

  async function loadSound() {
    console.log("Loading Sound");
    try {
      const { sound } = await Audio.Sound.createAsync(source);
      setSound(sound);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  }

  useEffect(() => {
    loadSound();

    // Cleanup function
    return () => {
      sound
        ?.unloadAsync()
        .then(() => {
          console.log("Unloading Sound");
        })
        .catch((error) => {
          console.error("Error unloading sound:", error);
        });
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  async function playSound() {
    await sound?.stopAsync();
    await sound?.playAsync();
  }

  return { playSound };
}
