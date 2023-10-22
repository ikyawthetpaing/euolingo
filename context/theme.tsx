import React, { createContext, useContext, useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as DefaultThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { Colors, themeColors } from "@/constants/colors";

type ThemeContextType = Colors;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const colorScheme = useColorScheme();

  const [colors, setColors] = useState(themeColors.light); // default light theme

  useEffect(() => {
    setColors(themeColors[colorScheme ?? "light"]);
  }, [colorScheme]);

  const userContext: ThemeContextType = colors;

  return (
    <DefaultThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <ThemeContext.Provider value={userContext}>
        {children}
      </ThemeContext.Provider>
    </DefaultThemeProvider>
  );
}
