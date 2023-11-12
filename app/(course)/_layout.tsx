import { Stack } from "expo-router";

import { Container } from "@/components/container";
import { CourseLeftBar } from "@/components/layouts/course-left-bar";
import { CourseRightBar } from "@/components/layouts/course-right-bar";
import { MobileTabsBar } from "@/components/layouts/mobile-tabs-bar";
import { Shell } from "@/components/shell";
import { View } from "@/components/themed";
import { courseConfig } from "@/config/course";
import { siteConfig } from "@/config/site";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";

export default function CourseLayout() {
  const { courseId } = useCourse();
  const breakpoint = useBreakpoint();

  if (!courseId) return null;

  return (
    <Shell>
      <Container layout="lg">
        <View style={{ flexDirection: "row", flex: 1 }}>
          {breakpoint !== "sm" && (
            <CourseLeftBar
              appName={siteConfig.name}
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
            breakpoint === "2xl") && <CourseRightBar courseId={courseId} />}
        </View>
      </Container>
    </Shell>
  );
}
