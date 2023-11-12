import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { validLanguages } from "@/config/language";
import { DEFAULT_COURSE_PROGRESS } from "@/constants/default";
import {
  COURSE_PROGRESS_STORAGE_KEY,
  CURRENT_COURSE_ID_STORAGE_KEY,
} from "@/constants/storage-key";
import { getExercise } from "@/content/courses/data";
import { getLocalData, setLocalData } from "@/lib/local-storage";
import { SupportedLanguageCode } from "@/types";
import { CourseProgression } from "@/types/course";

type CourseContextType = {
  courseId: SupportedLanguageCode | null;
  setCourseId: Dispatch<SetStateAction<SupportedLanguageCode | null>>;
  courseProgress: CourseProgression;
  setCourseProgress: Dispatch<SetStateAction<CourseProgression>>;
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
  const [courseProgress, setCourseProgress] = useState<CourseProgression>(
    DEFAULT_COURSE_PROGRESS
  );
  const [isInitialized, setIsInitialized] = useState(false);

  const handleCourseProgress = async (courseId: SupportedLanguageCode) => {
    const courseProgressKey = COURSE_PROGRESS_STORAGE_KEY(courseId);
    const storedCourseProgress = await getLocalData(courseProgressKey);

    try {
      if (storedCourseProgress) {
        const parsedCourseProgress = JSON.parse(
          storedCourseProgress
        ) as CourseProgression;
        if (
          isValidCourseProgress(parsedCourseProgress) &&
          isValidCourseProgressIds(parsedCourseProgress)
        ) {
          setCourseProgress(parsedCourseProgress);
        } else {
          handleInvalidCourseProgress();
        }
      } else {
        setCourseProgress(DEFAULT_COURSE_PROGRESS);
        await setLocalData(
          courseProgressKey,
          JSON.stringify(DEFAULT_COURSE_PROGRESS)
        );
      }
    } catch (error) {
      console.error("Error parsing stored course progress data:", error);
      handleInvalidCourseProgress();
    }
  };

  const isValidCourseProgress = (
    parsedCourseProgress: any
  ): parsedCourseProgress is CourseProgression => {
    if (
      parsedCourseProgress &&
      typeof parsedCourseProgress === "object" &&
      "sectionId" in parsedCourseProgress &&
      "chapterId" in parsedCourseProgress &&
      "lessonId" in parsedCourseProgress &&
      "exerciseId" in parsedCourseProgress &&
      typeof parsedCourseProgress.sectionId === "number" &&
      typeof parsedCourseProgress.chapterId === "number" &&
      typeof parsedCourseProgress.lessonId === "number" &&
      typeof parsedCourseProgress.exerciseId === "number"
    ) {
      return true;
    }
    return false;
  };

  const isValidCourseProgressIds = (courseProgress: CourseProgression) => {
    return !!getExercise(courseProgress);
  };

  const handleInvalidCourseProgress = () => {
    setCourseProgress(DEFAULT_COURSE_PROGRESS);
  };

  useEffect(() => {
    const initializeCourse = async () => {
      try {
        let storedCourseId = await getLocalData(CURRENT_COURSE_ID_STORAGE_KEY);

        if (
          storedCourseId &&
          validLanguages.includes(storedCourseId as SupportedLanguageCode)
        ) {
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
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  useEffect(() => {
    if (isInitialized && courseId !== null) {
      setLocalData(CURRENT_COURSE_ID_STORAGE_KEY, courseId);
      handleCourseProgress(courseId);
    }
  }, [courseId, isInitialized]);

  useEffect(() => {
    if (isInitialized && courseId !== null) {
      const courseProgressKey = COURSE_PROGRESS_STORAGE_KEY(courseId);
      setLocalData(courseProgressKey, JSON.stringify(courseProgress));
    }
  }, [courseProgress, isInitialized]);

  const courseContextValue: CourseContextType = {
    courseId,
    setCourseId,
    courseProgress,
    setCourseProgress,
  };

  return (
    <CourseContext.Provider value={courseContextValue}>
      {isInitialized && children}
    </CourseContext.Provider>
  );
}
