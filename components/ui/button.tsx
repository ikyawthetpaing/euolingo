import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { colors } from "@/constants/colors";
import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";
import { changeColorOpacity } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";

export interface ButtonProps extends PressableProps {
  children?: React.ReactNode;
  variant?: Variant;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function Button({
  children,
  variant = "default",
  viewStyle,
  textStyle,
  ...props
}: ButtonProps) {
  const { foreground, primaryForeground, mutedForeground, accentForeground } =
    useTheme();

  const isJustText = typeof children === "string";

  return (
    <Pressable {...props}>
      {({ pressed, hovered }) => (
        <View
          style={[
            useThemedStyles({
              variant,
              pressed,
              hovered,
              disabled: props.disabled,
            }),
            viewStyle,
          ]}
        >
          {isJustText ? (
            <Text
              style={[
                {
                  fontWeight: "800",
                  color: hovered ? accentForeground : foreground,
                  textTransform: "uppercase",
                },
                variant === "default" && { color: primaryForeground },
                props.disabled && { color: mutedForeground },
                textStyle,
              ]}
            >
              {children}
            </Text>
          ) : (
            children
          )}
        </View>
      )}
    </Pressable>
  );
}

const useThemedStyles = ({
  variant,
  hovered,
  pressed,
  disabled,
}: {
  variant: Variant;
  pressed: boolean;
  hovered: boolean;
  disabled?: boolean | null;
}) => {
  const { background, border, primary, accent, muted, accentForeground } =
    useTheme();

  const styles = StyleSheet.create({
    common: {
      backgroundColor: background,
      alignItems: "center",
      padding: layouts.padding,
      borderRadius: layouts.padding,
      transitionDelay: "100ms",
    },
    default: {
      backgroundColor:
        hovered || pressed ? changeColorOpacity(primary, 0.75) : primary,
    },
    outline: {
      borderWidth: layouts.borderWidth,
      borderColor: border,
      backgroundColor: hovered || pressed ? accent : colors.transparent,
    },
    ghost: {
      backgroundColor:
        pressed || hovered
          ? changeColorOpacity(accentForeground, 0.15)
          : colors.transparent,
    },
  });

  const variantStyles =
    variant === "default"
      ? styles.default
      : variant === "outline"
      ? styles.outline
      : variant === "ghost"
      ? styles.ghost
      : {};

  const themedStyles = {
    ...styles.common,
    ...variantStyles,
    ...(pressed && { transform: "scale(0.98)" }),
    ...(disabled && { backgroundColor: muted }),
  };
  return themedStyles;
};
