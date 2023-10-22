import { Feather } from "@expo/vector-icons";

type IconProps = {
  size?: number;
  color?: string;
};

export const Icons = {
  chevronDown: ({ size = 24, color = "#000" }: IconProps) => (
    <Feather name="chevron-down" size={size} color={color} />
  ),
};
