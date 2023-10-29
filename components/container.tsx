import { View, ViewProps } from "@/components/themed";

interface Props extends ViewProps {
  children: React.ReactNode;
  layout?: "sm" | "lg";
}
export function Container({ children, layout = "sm", style, ...props }: Props) {
  return (
    <View
      style={[
        {
          flex: 1,
          maxWidth: layout === "sm" ? 1024 : 1400,
          width: "100%",
          marginHorizontal: "auto",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
