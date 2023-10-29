import { STATUSBAR_HEIGHT } from "./status-bar";
import { View, ViewProps } from "./themed";

interface Props extends ViewProps {
  children: React.ReactNode;
}

export function Shell({ children, style, ...props }: Props) {
  return (
    <View
      style={[
        { flex: 1, paddingTop: STATUSBAR_HEIGHT, position: "relative" },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
