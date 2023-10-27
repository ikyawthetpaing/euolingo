import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";

import { useTheme } from "@/context/theme";

export const STATUSBAR_HEIGHT = RNStatusBar.currentHeight || 0;

export function StatusBar() {
  const { background } = useTheme();
  return <ExpoStatusBar backgroundColor={background} animated translucent />;
}
