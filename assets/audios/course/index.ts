import { CourseAudios } from "@/types/course";

export const courseAudio = {
  rice: {
    en: require("./files/rice-jp-audio.mp3"),
    jp: require("./files/rice-jp-audio.mp3"),
    mm: require("./files/rice-jp-audio.mp3"),
    th: require("./files/rice-jp-audio.mp3"),
  },
  sushi: {
    en: require("./files/sushi-jp-audio.mp3"),
    jp: require("./files/sushi-jp-audio.mp3"),
    mm: require("./files/sushi-jp-audio.mp3"),
    th: require("./files/sushi-jp-audio.mp3"),
  },
  tea: {
    en: require("./files/tea-jp-audio.mp3"),
    jp: require("./files/tea-jp-audio.mp3"),
    mm: require("./files/tea-jp-audio.mp3"),
    th: require("./files/tea-jp-audio.mp3"),
  },
  water: {
    en: require("./files/water-jp-audio.mp3"),
    jp: require("./files/water-jp-audio.mp3"),
    mm: require("./files/water-jp-audio.mp3"),
    th: require("./files/water-jp-audio.mp3"),
  },
} satisfies CourseAudios;
