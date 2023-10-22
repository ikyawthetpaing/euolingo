export type Colors = {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
};

type ThemeColors = {
  light: Colors;
  dark: Colors;
};

export const themeColors: ThemeColors = {
  light: {
    background: "rgb(255, 255, 255)",
    foreground: "rgb(10, 10, 10)",
    primary: "rgb(23, 23, 23)",
    primaryForeground: "rgb(250, 250, 250)",
    secondary: "rgb(245, 245, 245)",
    secondaryForeground: "rgb(23, 23, 23)",
    muted: "rgb(245, 245, 245)",
    mutedForeground: "rgb(115, 115, 115)",
    accent: "rgb(245, 245, 245)",
    accentForeground: "rgb(23, 23, 23)",
    destructive: "rgb(239, 68, 68)",
    destructiveForeground: "rgb(250, 250, 250)",
    border: "rgb(229, 229, 229)",
  },
  dark: {
    background: "rgb(10, 10, 10)",
    foreground: "rgb(250, 250, 250)",
    primary: "rgb(250, 250, 250)",
    primaryForeground: "rgb(23, 23, 23)",
    secondary: "rgb(38, 38, 38)",
    secondaryForeground: "rgb(250, 250, 250)",
    muted: "rgb(38, 38, 38)",
    mutedForeground: "rgb(163, 163, 163)",
    accent: "rgb(38, 38, 38)",
    accentForeground: "rgb(250, 250, 250)",
    destructive: "rgb(127, 29, 29)",
    destructiveForeground: "rgb(250, 250, 250)",
    border: "rgb(38, 38, 38)",
  },
};
