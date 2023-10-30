import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { validLanguages } from "@/config/language";
import { DEFAULT_LANGUAGE_CODE } from "@/constants/default";
import { LANGUAGE_ID_STORAGE_KEY } from "@/constants/storage-key";
import { getLocalData, setLocalData } from "@/lib/local-storage";
import { SupportedLanguageCode } from "@/types";

type LanguageCodeContextType = {
  languageCode: SupportedLanguageCode;
  setLanguageCode: Dispatch<SetStateAction<SupportedLanguageCode>>;
};

const LanguageCodeContext = createContext<LanguageCodeContextType | undefined>(
  undefined
);

export function useLanguageCode() {
  const context = useContext(LanguageCodeContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

export function LanguageCodeProvider({ children }: Props) {
  const [language, setLanguage] = useState<SupportedLanguageCode>(
    DEFAULT_LANGUAGE_CODE
  );
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        let languageKey = await getLocalData(LANGUAGE_ID_STORAGE_KEY);

        // Validate if the stored languageKey is a valid language
        if (
          languageKey &&
          validLanguages.includes(languageKey as SupportedLanguageCode)
        ) {
          setLanguage(languageKey as SupportedLanguageCode);
        } else {
          // If languageKey is not valid, set the default language to "en"
          setLanguage(DEFAULT_LANGUAGE_CODE);
          await setLocalData(LANGUAGE_ID_STORAGE_KEY, DEFAULT_LANGUAGE_CODE);
        }
      } catch (error) {
        console.error("Error fetching language:", error);
        throw error;
      } finally {
        setIsInitialized(true);
      }
    };

    initializeLanguage();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      setLocalData(LANGUAGE_ID_STORAGE_KEY, language);
    }
  }, [language, isInitialized]);

  const languageContextValue: LanguageCodeContextType = {
    languageCode: language,
    setLanguageCode: setLanguage,
  };

  return (
    <LanguageCodeContext.Provider value={languageContextValue}>
      {isInitialized && children}
    </LanguageCodeContext.Provider>
  );
}
