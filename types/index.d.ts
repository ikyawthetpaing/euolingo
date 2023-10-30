import { Href } from "expo-router";

import { Icons } from "@/components/icons";

export type SupportedLanguageCode = "en" | "mm" | "jp" | "th";

export type Languages = {
  [key in SupportedLanguageCode]: { name: string; flag: string };
};

export type Translations = {
  [key in SupportedLanguageCode]: string;
};

export type CommonTranslations = {
  [key: string]: Translations;
};

export type IconName = keyof typeof Icons;

export type NavItem = {
  icon: keyof typeof Icons;
  label: string;
  href: Href;
};
