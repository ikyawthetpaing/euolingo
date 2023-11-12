import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, useWindowDimensions } from "react-native";

import { Container } from "@/components/container";
import { MAIN_HEADER_HEIGHT } from "@/components/layouts/main-header";
import { Metadata } from "@/components/metadata";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { getCommonTranslation } from "@/content/translations";
import { useBreakpoint } from "@/context/breakpoints";
import { useLanguageCode } from "@/context/language";

export default function Home() {
  const breakpoint = useBreakpoint();
  const { languageCode: language } = useLanguageCode();
  const screen = useWindowDimensions();

  return (
    <>
      <Metadata />
      <View style={{ flex: 1 }}>
        <Container>
          <ScrollView
            contentContainerStyle={{
              minHeight: screen.height - MAIN_HEADER_HEIGHT,
              padding:
                breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
            }}
            showsVerticalScrollIndicator={false}
          >
            {breakpoint === "sm" ? (
              <View style={{ flex: 1, gap: layouts.padding * 2 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Image
                      source="https://www.svgrepo.com/show/493363/conversation-person.svg"
                      alt="Learning language"
                      contentFit="contain"
                      style={{ width: "100%", aspectRatio: 1 }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: "800",
                      textAlign: "center",
                    }}
                  >
                    {getCommonTranslation("landingPageContent", language)}
                  </Text>
                </View>
                <View
                  style={{
                    gap: layouts.padding,
                  }}
                >
                  <Button onPress={() => router.push("/register")}>
                    {getCommonTranslation("getStarted", language)}
                  </Button>
                  <Button variant="outline">
                    {getCommonTranslation("iAlreadyHaveAnAccount", language)}
                  </Button>
                </View>
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  gap: layouts.padding * 2,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Image
                      source="https://www.svgrepo.com/show/493363/conversation-person.svg"
                      alt="Learning language"
                      contentFit="contain"
                      style={{ width: "100%", aspectRatio: 1 }}
                    />
                  </View>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <View style={{ gap: layouts.padding * 2 }}>
                    <Text
                      style={{
                        fontSize: 32,
                        fontWeight: "800",
                        textAlign: "center",
                      }}
                    >
                      {getCommonTranslation("landingPageContent", language)}
                    </Text>
                    <View
                      style={{
                        gap: layouts.padding,
                        width: breakpoint === "md" ? "100%" : 300,
                        marginHorizontal: "auto",
                      }}
                    >
                      <Button onPress={() => router.push("/register")}>
                        {getCommonTranslation("getStarted", language)}
                      </Button>
                      <Button variant="outline">
                        {getCommonTranslation(
                          "iAlreadyHaveAnAccount",
                          language
                        )}
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </Container>
      </View>
    </>
  );
}
