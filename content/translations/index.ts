import { SupportedLanguageCode } from "@/types";

import { commonTranslations } from "./common";

export function getCommonTranslation(
  name: keyof typeof commonTranslations,
  language: SupportedLanguageCode
): string {
  return commonTranslations[name][language];
}
