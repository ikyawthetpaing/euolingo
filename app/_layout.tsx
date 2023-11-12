import { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { StatusBar } from "@/components/status-bar";
import { BreakpointsProvider } from "@/context/breakpoints";
import { CourseProvider } from "@/context/course";
import { LanguageCodeProvider } from "@/context/language";
import { ProtectedRouteProvider } from "@/context/protected-route";
import { ThemeProvider } from "@/context/theme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(guest)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <BreakpointsProvider>
        <LanguageCodeProvider>
          <CourseProvider>
            <ProtectedRouteProvider>
              <Stack screenOptions={{ headerShown: false }} />
              <StatusBar />
            </ProtectedRouteProvider>
          </CourseProvider>
        </LanguageCodeProvider>
      </BreakpointsProvider>
    </ThemeProvider>
  );
}
