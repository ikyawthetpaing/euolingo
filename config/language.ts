import { Languages, SupportedLanguageCode } from "@/types";

export const languages = {
  en: {
    name: "English",
    flag: "https://www.svgrepo.com/show/405645/flag-for-flag-united-states.svg",
  },
  ja: {
    name: "日本語",
    flag: "https://www.svgrepo.com/show/405519/flag-for-flag-japan.svg",
  },
  es: {
    name: "Español",
    flag: "https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg",
  },
  fr: {
    name: "Français",
    flag: "https://www.svgrepo.com/show/405485/flag-for-flag-france.svg",
  },
  cn: {
    name: "普通话",
    flag: "https://www.svgrepo.com/show/405448/flag-for-flag-china.svg",
  },
  ru: {
    name: "Русский",
    flag: "https://www.svgrepo.com/show/405590/flag-for-flag-russia.svg",
  },
  my: {
    name: "မြန်မာ",
    flag: "https://www.svgrepo.com/show/405559/flag-for-flag-myanmar-burma.svg",
  },
  th: {
    name: "ไทย",
    flag: "https://www.svgrepo.com/show/405628/flag-for-flag-thailand.svg",
  },
  hi: {
    name: "हिंदी",
    flag: "https://www.svgrepo.com/show/405510/flag-for-flag-india.svg",
  },
} satisfies Languages;

export function getLanguage(code: SupportedLanguageCode) {
  return languages[code];
}

export const validLanguages: SupportedLanguageCode[] = Object.keys(
  languages
).map((key) => key as SupportedLanguageCode);
