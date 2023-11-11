import { useWindowDimensions } from "react-native";

import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { View, ViewProps } from "@/components/themed";

interface Props extends ViewProps {
  children: React.ReactNode;
}

export function Shell({ children, style, ...props }: Props) {
  const screen = useWindowDimensions();
  return (
    <View
      style={[
        {
          minHeight: screen.height,
          marginTop: STATUSBAR_HEIGHT,
          position: "relative",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
