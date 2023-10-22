/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  useColorScheme,
} from "react-native";

import { useTheme } from "@/context/theme";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];

export function Text({ style, ...props }: TextProps) {
  const { foreground } = useTheme();
  return <DefaultText style={[{ color: foreground }, style]} {...props} />;
}

export function View({ style, ...props }: ViewProps) {
  const { background } = useTheme();
  return (
    <DefaultView style={[{ backgroundColor: background }, style]} {...props} />
  );
}
