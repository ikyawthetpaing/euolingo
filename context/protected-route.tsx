import { useEffect } from "react";
import { router, usePathname, useSegments } from "expo-router";

import { useCourse } from "@/context/course";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRouteProvider({ children }: Props) {
  const segments = useSegments();
  const { courseId } = useCourse();
  const pathname = usePathname();

  useEffect(() => {
    if (courseId && pathname !== "/learn") {
      router.replace("/learn");
    } else if (!courseId && pathname === "/learn") {
      router.replace("/register");
    }
    console.log("run case of: segments");
  }, [segments]);

  return <>{children}</>;
}
