import { Image } from "expo-image";
import Head from "expo-router/head";
import { Pressable } from "react-native";

import { Text, View } from "@/components/themed";
import { appConfig } from "@/config/app";
import { languages } from "@/config/language";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useLanguage } from "@/context/language";
import { useTheme } from "@/context/theme";
import { commonTranslations } from "@/translations/common";

export default function Register() {
  const { border, accent, background } = useTheme();
  const breakpoint = useBreakpoint();
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Register - {appConfig.name}</title>
        <meta name="description" content="Register now!" />
      </Head>
      <View style={{ flex: 1 }}>
        <View
          style={{
            maxWidth: 1024,
            marginHorizontal: "auto",
            width: "100%",
            padding:
              breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
            flex: 1,
          }}
        >
          <View
            style={{ gap: layouts.padding * 2, marginTop: layouts.padding * 2 }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "800", textAlign: "center" }}
            >
              {commonTranslations.iWantToLearn[language].content}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: layouts.padding,
                flexWrap: "wrap",
              }}
            >
              {languages.map((language, index) => (
                <Pressable
                  key={index}
                  style={{
                    width: breakpoint == "sm" ? "48%" : "24%",
                  }}
                >
                  {({ pressed, hovered }) => (
                    <View
                      style={{
                        padding: layouts.padding,
                        borderWidth: layouts.borderWidth,
                        borderColor: border,
                        alignItems: "center",
                        borderRadius: layouts.padding,
                        gap: layouts.padding,
                        backgroundColor:
                          hovered || pressed ? accent : background,
                      }}
                    >
                      <View
                        style={{
                          width: 100,
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
                      <Text style={{ fontSize: 18 }}>{language.name}</Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
