import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { View, ViewProps } from "@/components/themed";

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
