export type LanguageDetails = {
  key: Language;
  name: string;
  flag: string;
};

type Translation = {
  content: string;
};

export type Translations = {
  en: Translation;
  mm: Translation;
  jpn: Translation;
  th: Translation;
};

export type Language = keyof Translations;

export type CommonTranslations = {
  [key: string]: Translations;
};
