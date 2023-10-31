import { Link } from "expo-router";

import { SelectLanguage } from "@/components/select-language";
import { Text, View, ViewProps } from "@/components/themed";
import { appConfig } from "@/config/app";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";

interface Props extends ViewProps {}

export function MainHeader({ style, ...props }: Props) {
  const { border } = useTheme();
  const breakpoint = useBreakpoint();
  return (
    <View
      style={[
        {
          borderBottomWidth: layouts.borderWidth,
          borderBottomColor: border,
        },
        style,
      ]}
      {...props}
    >
      <View
        style={{
          maxWidth: 1024,
          marginHorizontal: "auto",
          width: "100%",
        }}
      >
        <View
          style={{
            padding:
              breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {appConfig.name.toLowerCase()}
            </Text>
          </Link>
          <SelectLanguage />
        </View>
      </View>
    </View>
  );
}
