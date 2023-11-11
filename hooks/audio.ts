import { useEffect, useState } from "react";
import { Audio, AVPlaybackSource } from "expo-av";

interface Props {
  source?: AVPlaybackSource;
}

export function useAudio({ source }: Props) {
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);

  async function playSound() {
    if (source) {
      const { sound } = await Audio.Sound.createAsync(source);
      setSound(sound);
      await sound.playAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return { playSound };
}
