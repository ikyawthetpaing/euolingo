import { useState } from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { LayoutRectangle, Pressable } from "react-native";

import { Icon } from "@/components/icons";
import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { Text, View, ViewProps } from "@/components/themed";
import { appConfig } from "@/config/app";
import { getLanguage, languages } from "@/config/language";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useLanguage } from "@/context/language";
import { useTheme } from "@/context/theme";
import { commonTranslations } from "@/translations/common";

interface Props extends ViewProps {}

export function MainHeader({ ...props }: Props) {
  const { border, mutedForeground, background, accent } = useTheme();
  const breakpoint = useBreakpoint();
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <View
      style={{
        borderBottomWidth: layouts.borderWidth,
        borderBottomColor: border,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
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
          <Pressable
            style={{
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
            }}
            onLayout={(e) => {
              setLayout(e.nativeEvent.layout);
            }}
            onPress={() => setOpen(!open)}
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
                ? getLanguage(language)?.name
                : `${
                    commonTranslations.siteLanguage[language].content
                  }: ${getLanguage(language)?.name}`}
            </Text>
            {open ? (
              <Icon name="chevronUp" size={24} />
            ) : (
              <Icon name="chevronDown" size={24} />
            )}
          </Pressable>
          {/* select language */}
          <View
            style={[
              {
                position: "absolute",
                borderWidth: layouts.borderWidth,
                borderRadius: layouts.padding,
                borderColor: border,
                top: layout ? layout.height + layout.y : 0,
                overflow: "hidden",
                display: open ? "flex" : "none",
                minWidth: 150,
              },
              breakpoint === "sm"
                ? { right: layouts.padding * 2 }
                : {
                    left: layout ? layout.x : 0,
                    width: layout ? layout.width : 0,
                  },
            ]}
          >
            {languages.map((language, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setOpen(!open);
                  setLanguage(language.key);
                }}
              >
                {({ hovered, pressed }) => (
                  <View
                    style={{
                      padding: layouts.padding,
                      flexDirection: "row",
                      gap: layouts.padding,
                      alignItems: "center",
                      backgroundColor: hovered || pressed ? accent : background,
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
        </View>
      </View>
    </View>
  );
}
