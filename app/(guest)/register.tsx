import { useState } from "react";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, ScrollView } from "react-native";

import { Container } from "@/components/container";
import { Metadata } from "@/components/metadata";
import { Text, View } from "@/components/themed";
import { languages } from "@/config/language";
import { colors } from "@/constants/colors";
import { layouts } from "@/constants/layouts";
import { getCommonTranslation } from "@/content/translations";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useLanguageCode } from "@/context/language";
import { useTheme } from "@/context/theme";
import { SupportedLanguageCode } from "@/types";

export default function Register() {
  const { border, accent, background, mutedForeground } = useTheme();
  const breakpoint = useBreakpoint();
  const { languageCode } = useLanguageCode();
  const { setCourseId } = useCourse();
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <Metadata title="Register" />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Container
            style={{
              padding:
                breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
              paddingTop: layouts.padding * 2,
            }}
          >
            <View style={{ gap: layouts.padding * 2 }}>
              <Text
                style={{ fontSize: 32, fontWeight: "800", textAlign: "center" }}
              >
                {getCommonTranslation("iWantToLearn", languageCode)}
              </Text>
              <View
                onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
                style={{
                  flexDirection: "row",
                  gap: layouts.padding,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingBottom:
                    breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
                }}
              >
                {Object.keys(languages).map((key, index) => {
                  const code = key as SupportedLanguageCode;
                  if (languageCode === code) return null;
                  const language = languages[code];

                  const cols = breakpoint === "sm" ? 2 : 4;
                  const size =
                    (containerWidth - layouts.padding * (cols - 1)) / cols;

                  return (
                    <Pressable
                      key={index}
                      style={{
                        width: size,
                      }}
                      onPress={() => {
                        setCourseId(code);
                        router.push("/learn");
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
                              backgroundColor: colors.transparent,
                            }}
                          >
                            <Image
                              source={language.flag}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: "bold",
                              color: mutedForeground,
                            }}
                          >
                            {language.name}
                          </Text>
                        </View>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </Container>
        </ScrollView>
      </View>
    </>
  );
}
