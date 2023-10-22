import { LanguageDetails } from "@/types";

export const languages: LanguageDetails[] = [
  {
    key: "en",
    name: "English",
    flag: "https://www.svgrepo.com/show/405645/flag-for-flag-united-states.svg",
  },
  {
    key: "mm",
    name: "မြန်မာ",
    flag: "https://www.svgrepo.com/show/405559/flag-for-flag-myanmar-burma.svg",
  },
  {
    key: "jpn",
    name: "日本語",
    flag: "https://www.svgrepo.com/show/249004/japan.svg",
  },
  {
    key: "th",
    name: "ไทย",
    flag: "https://www.svgrepo.com/show/405628/flag-for-flag-thailand.svg",
  },
];

export function getLanguage(key: string): LanguageDetails | undefined {
  return languages.find((language) => language.key === key);
}
