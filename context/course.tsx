import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { COURSE_PROGRESS_DEFAULT } from "@/constants/default";
import {
  COURSE_PROGRESS_STORAGE_KEY,
  CURRENT_COURSE_ID_STORAGE_KEY,
} from "@/constants/storage-key";
import { getLocalData, setLocalData } from "@/lib/local-storage";
import { CourseProgress, SupportedLanguageCode } from "@/types";

type CourseContextType = {
  courseId: SupportedLanguageCode | null;
  setCourseId: Dispatch<SetStateAction<SupportedLanguageCode | null>>;
  courseProgress: CourseProgress;
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
  const [courseProgress, setCourseProgress] = useState<CourseProgress>(
    COURSE_PROGRESS_DEFAULT
  );
  const [isInitialized, setIsInitialized] = useState(false);

  const handleCourseProgress = async (courseId: SupportedLanguageCode) => {
    const courseProgressKey = COURSE_PROGRESS_STORAGE_KEY(courseId);
    const storedCourseProgress = await getLocalData(courseProgressKey);

    if (storedCourseProgress) {
      setCourseProgress(JSON.parse(storedCourseProgress) as CourseProgress);
    } else {
      setCourseProgress(COURSE_PROGRESS_DEFAULT);
      await setLocalData(
        courseProgressKey,
        JSON.stringify(COURSE_PROGRESS_DEFAULT)
      );
    }
  };

  useEffect(() => {
    const initializeCourse = async () => {
      try {
        let storedCourseId = await getLocalData(CURRENT_COURSE_ID_STORAGE_KEY);

        // Handle the case where course_id is not in supported courses
        // const validCourseId = supportedCourses.includes(
        //   storedCourseId as SupportedLanguageCode
        // );

        if (storedCourseId) {
          const COURSE_ID = storedCourseId as SupportedLanguageCode;
          handleCourseProgress(COURSE_ID);
          setCourseId(COURSE_ID);
        }
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
      setLocalData(CURRENT_COURSE_ID_STORAGE_KEY, courseId);
      handleCourseProgress(courseId);
    }
  }, [courseId, isInitialized]);

  const courseContextValue: CourseContextType = {
    courseId,
    setCourseId,
    courseProgress,
  };

  return (
    <CourseContext.Provider value={courseContextValue}>
      {isInitialized && children}
    </CourseContext.Provider>
  );
}
