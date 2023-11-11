import { Link } from "expo-router";

import { SelectLanguage } from "@/components/select-language";
import { Text, View, ViewProps } from "@/components/themed";
import { appConfig } from "@/config/app";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";

import { Container } from "@/components/container";

export const MAIN_HEADER_HEIGHT = 60;

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
          height: MAIN_HEADER_HEIGHT,
        },
        style,
      ]}
      {...props}
    >
      <Container>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: breakpoint === "sm" ? layouts.padding : layouts.padding * 2
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
      </Container>
    </View>
  );
}
