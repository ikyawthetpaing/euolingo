import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { LANGUAGE_ID_KEY } from "@/constants/storage-key";
import { getLocalData, setLocalData } from "@/lib/local-storage";
import { SupportedLanguageCode } from "@/types";

type LanguageContextType = {
  language: SupportedLanguageCode;
  setLanguage: Dispatch<SetStateAction<SupportedLanguageCode>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const validLanguages: SupportedLanguageCode[] = ["en", "mm", "jp", "th"];

interface Props {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const defaultLanguage: SupportedLanguageCode = "en";
  const [language, setLanguage] =
    useState<SupportedLanguageCode>(defaultLanguage);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        let languageKey = await getLocalData(LANGUAGE_ID_KEY);

        // Validate if the stored languageKey is a valid language
        if (
          languageKey &&
          validLanguages.includes(languageKey as SupportedLanguageCode)
        ) {
          setLanguage(languageKey as SupportedLanguageCode);
        } else {
          // If languageKey is not valid, set the default language to "en"
          setLanguage(defaultLanguage);
          await setLocalData(LANGUAGE_ID_KEY, defaultLanguage);
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
      setLocalData(LANGUAGE_ID_KEY, language);
    }
  }, [language, isInitialized]);

  const languageContextValue: LanguageContextType = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {isInitialized && children}
    </LanguageContext.Provider>
  );
}
