import { Link, router, usePathname } from "expo-router";
import { Pressable } from "react-native";

import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";
import { NavItem } from "@/types";

interface Props {
  navItems: NavItem[];
  appName: string;
}

export function CourseLeftBar({ navItems, appName }: Props) {
  const { border, accent, foreground } = useTheme();
  const breakpoint = useBreakpoint();
  const pathname = usePathname();

  return (
    <View
      style={{
        padding: layouts.padding * 2,
        borderRightWidth: layouts.borderWidth,
        borderRightColor: border,
        gap: layouts.padding,
      }}
    >
      <Link
        href="/learn"
        style={{
          paddingVertical: layouts.padding,
          paddingLeft: layouts.padding * 2,
        }}
      >
        {breakpoint == "xl" || breakpoint == "2xl" ? (
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#1cb0f6",
            }}
          >
            {appName}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#1cb0f6",
            }}
          >
            {appName.charAt(0).toLowerCase()}
          </Text>
        )}
      </Link>
      {navItems.map((navItem, index) => {
        const isActive =
          pathname === navItem.href || pathname.startsWith(navItem.href);
        return (
          <Pressable key={index} onPress={() => router.push(navItem.href)}>
            {({ pressed, hovered }) => (
              <View
                style={{
                  flexDirection: "row",
                  gap: layouts.padding,
                  alignItems: "center",
                  paddingHorizontal:
                    breakpoint == "xl" || breakpoint == "2xl"
                      ? layouts.padding * 1.5
                      : layouts.padding,
                  paddingVertical: layouts.padding,
                  borderWidth: layouts.borderWidth,
                  borderRadius: layouts.padding,
                  borderColor: isActive ? border : layouts.transparentColor,
                  backgroundColor:
                    pressed || hovered ? accent : layouts.transparentColor,
                }}
              >
                <Icon
                  name={navItem.icon}
                  color={isActive ? foreground : undefined}
                />
                {(breakpoint == "xl" || breakpoint == "2xl") && (
                  <Text
                    style={{
                      fontWeight: "800",
                      textTransform: "uppercase",
                    }}
                  >
                    {navItem.label}
                  </Text>
                )}
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
