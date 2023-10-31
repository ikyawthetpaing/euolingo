import { router, usePathname } from "expo-router";
import { Pressable } from "react-native";

import { Icon } from "@/components/icons";
import { View } from "@/components/themed";
import { colors } from "@/constants/colors";
import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";
import { NavItem } from "@/types";

interface Props {
  navItems: NavItem[];
}

export function MobileTabsBar({ navItems }: Props) {
  const pathname = usePathname();
  const { border, accent, foreground } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: layouts.padding,
        borderTopWidth: layouts.borderWidth,
        borderTopColor: border,
      }}
    >
      {navItems.map((navItem, index) => {
        const isActive =
          pathname === navItem.href || pathname.startsWith(navItem.href);
        return (
          <Pressable key={index} onPress={() => router.push(navItem.href)}>
            {({ pressed, hovered }) => (
              <View
                style={{
                  padding: layouts.padding * 0.5,
                  borderWidth: layouts.borderWidth,
                  borderRadius: layouts.padding,
                  borderColor: isActive ? border : colors.transparent,
                  backgroundColor:
                    pressed || hovered ? accent : colors.transparent,
                }}
              >
                <Icon
                  name={navItem.icon}
                  color={isActive ? foreground : undefined}
                />
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
