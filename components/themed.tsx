import { forwardRef } from "react";
import { Text as DefaultText, View as DefaultView } from "react-native";

import { useTheme } from "@/context/theme";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];

export const Text = forwardRef<DefaultText, TextProps>(
  ({ style, ...props }, ref) => {
    const { foreground } = useTheme();
    return (
      <DefaultText
        ref={ref}
        style={[{ color: foreground }, style]}
        {...props}
      />
    );
  }
);

export const View = forwardRef<DefaultView, ViewProps>(
  ({ style, ...props }, ref) => {
    const { background } = useTheme();
    return (
      <DefaultView
        ref={ref}
        style={[{ backgroundColor: background }, style]}
        {...props}
      />
    );
  }
);
