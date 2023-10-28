import { useState } from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import Popover from "react-native-popover-view/dist/Popover";
import { Placement } from "react-native-popover-view/dist/Types";

import { Icon } from "@/components/icons";
import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { Text, View, ViewProps } from "@/components/themed";
import { appConfig } from "@/config/app";
import { getLanguage, languages } from "@/config/language";
import { layouts } from "@/constants/layouts";
import { getCommonTranslation } from "@/content/translations";
import { useBreakpoint } from "@/context/breakpoints";
import { useLanguageCode } from "@/context/language";
import { useTheme } from "@/context/theme";

interface Props extends ViewProps {}

export function MainHeader({ style, ...props }: Props) {
  const { border, mutedForeground, accent, background } = useTheme();
  const breakpoint = useBreakpoint();
  const { languageCode, setLanguageCode } = useLanguageCode();
  const [isVisiable, setIsVisiable] = useState(false);
  return (
    <View
      style={[
        {
          borderBottomWidth: layouts.borderWidth,
          borderBottomColor: border,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
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
          paddingTop: STATUSBAR_HEIGHT,
        }}
      >
        <View
          style={{
            paddingHorizontal: layouts.padding * 2,
            paddingVertical:
              breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
          <Popover
            placement={Placement.BOTTOM}
            isVisible={isVisiable}
            onRequestClose={() => setIsVisiable(false)}
            popoverStyle={{
              borderRadius: layouts.padding,
              backgroundColor: border,
            }}
            backgroundStyle={{
              backgroundColor: background,
              opacity: 0.5,
            }}
            from={
              <Pressable
                style={{
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
                onPress={() => setIsVisiable(!isVisiable)}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    color: mutedForeground,
                    textTransform: "uppercase",
                  }}
                >
                  {breakpoint == "sm"
                    ? getLanguage(languageCode)?.name
                    : `${getCommonTranslation(
                        "siteLanguage",
                        languageCode
                      )}: ${getLanguage(languageCode)?.name}`}
                </Text>
                <Icon name="chevronDown" size={24} />
              </Pressable>
            }
          >
            <View
              style={{
                borderWidth: layouts.borderWidth,
                borderRadius: layouts.padding,
                borderColor: border,
                overflow: "hidden",
                minWidth: 300,
              }}
            >
              {languages.map((language) => (
                <Pressable
                  key={language.key}
                  onPress={() => {
                    setIsVisiable(false);
                    setLanguageCode(language.key);
                  }}
                >
                  {({ hovered, pressed }) => (
                    <View
                      style={{
                        padding: layouts.padding,
                        flexDirection: "row",
                        gap: layouts.padding,
                        alignItems: "center",
                        backgroundColor:
                          hovered || pressed ? accent : background,
                      }}
                    >
                      <View
                        style={{
                          width: 32,
                          aspectRatio: 4 / 3,
                          overflow: "hidden",
                          borderRadius: 6,
                        }}
                      >
                        <Image
                          source={language.flag}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </View>
                      <Text>{language.name}</Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          </Popover>
        </View>
      </View>
    </View>
  );
}
