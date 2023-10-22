import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { getLocalData, setLocalData } from "@/lib/local-storage";
import { Language } from "@/types";

type LanguageContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
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

interface Props {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }: Props) => {
  const defaultLanguage: Language = "en";
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        let languageKey = await getLocalData("languageKey");
        if (languageKey) {
          setLanguage(languageKey as Language);
        } else {
          await setLocalData("languageKey", defaultLanguage);
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
      setLocalData("languageKey", language);
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
};
