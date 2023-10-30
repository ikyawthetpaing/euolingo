import { Languages, SupportedLanguageCode } from "@/types";

export const languages = {
  en: {
    name: "English",
    flag: "https://www.svgrepo.com/show/405645/flag-for-flag-united-states.svg",
  },
  jp: {
    name: "日本語",
    flag: "https://www.svgrepo.com/show/249004/japan.svg",
  },
  mm: {
    name: "မြန်မာ",
    flag: "https://www.svgrepo.com/show/405559/flag-for-flag-myanmar-burma.svg",
  },
  th: {
    name: "ไทย",
    flag: "https://www.svgrepo.com/show/405628/flag-for-flag-thailand.svg",
  },
} satisfies Languages;

export function getLanguage(code: SupportedLanguageCode) {
  return languages[code];
}

export const validLanguages: SupportedLanguageCode[] = Object.keys(
  languages
).map((key) => key as SupportedLanguageCode);
