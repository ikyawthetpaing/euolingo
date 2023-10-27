import { Stack } from "expo-router";

import { CourseDetailsBar } from "@/components/course-details-bar";
import { CourseLeftBar } from "@/components/layouts/course-left-bar";
import { CourseRightBar } from "@/components/layouts/course-right-bar";
import { MobileTabsBar } from "@/components/layouts/mobile-tabs-bar";
import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { View } from "@/components/themed";
import { appConfig } from "@/config/app";
import { courseConfig } from "@/config/course";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";

export default function CourseLayout() {
  const { courseId } = useCourse();
  const breakpoint = useBreakpoint();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          maxWidth: 1400,
          width: "100%",
          marginHorizontal: "auto",
          paddingTop: STATUSBAR_HEIGHT,
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          {breakpoint !== "sm" && (
            <CourseLeftBar
              appName={appConfig.name}
              navItems={courseConfig.sidebarNavItems}
            />
          )}
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Stack screenOptions={{ headerShown: false }} />
            </View>
            {breakpoint === "sm" && (
              <MobileTabsBar navItems={courseConfig.mobileNavItems} />
            )}
          </View>
          {(breakpoint === "lg" ||
            breakpoint === "xl" ||
            breakpoint === "2xl") &&
            courseId && <CourseRightBar courseId={courseId} />}
        </View>
      </View>
    </View>
  );
}
