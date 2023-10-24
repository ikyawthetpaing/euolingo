import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { CURRENT_COURSE_ID_KEY } from "@/constants/storage-key";
import { getLocalData, setLocalData } from "@/lib/local-storage";
import { SupportedLanguageCode } from "@/types";

type CourseContextType = {
  courseId: SupportedLanguageCode | null;
  setCourseId: Dispatch<SetStateAction<SupportedLanguageCode | null>>;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export function CourseProvider({ children }: Props) {
  const [courseId, setCourseId] = useState<SupportedLanguageCode | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeCourse = async () => {
      try {
        let course_id = await getLocalData(CURRENT_COURSE_ID_KEY);
        // Handle the case where course_id is undefined or null
        setCourseId((course_id as SupportedLanguageCode) || null);
      } catch (error) {
        console.error("Error fetching course ID:", error);
        // Handle the error gracefully, for example, set courseId to a default value
        setCourseId(null);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeCourse();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    if (isInitialized && courseId !== null) {
      setLocalData(CURRENT_COURSE_ID_KEY, courseId);
    }
  }, [courseId, isInitialized]);

  const courseContextValue: CourseContextType = {
    courseId,
    setCourseId,
  };

  return (
    <CourseContext.Provider value={courseContextValue}>
      {isInitialized && children}
    </CourseContext.Provider>
  );
}
