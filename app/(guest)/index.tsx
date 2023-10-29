import { Image } from "expo-image";
import { router } from "expo-router";
import Head from "expo-router/head";
import { ScrollView } from "react-native";

import { Container } from "@/components/container";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";
import { layouts } from "@/constants/layouts";
import { getCommonTranslation } from "@/content/translations";
import { useBreakpoint } from "@/context/breakpoints";
import { useLanguageCode } from "@/context/language";
import { isWeb } from "@/lib/utils";

export default function Home() {
  const breakpoint = useBreakpoint();
  const { languageCode: language } = useLanguageCode();

  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.description} />
      </Head>
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            flex: 1,
            padding: layouts.padding,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: breakpoint === "sm" ? "column" : "row",
              gap: layouts.padding * 2,
            }}
          >
            <View
              style={[
                { justifyContent: "center" },
                isWeb() ? { flex: 1, flexShrink: 0 } : {},
              ]}
            >
              <Image
                source="https://www.svgrepo.com/show/493363/conversation-person.svg"
                alt="Learning language"
                contentFit="contain"
                style={{ width: "100%", aspectRatio: 1 }}
              />
            </View>
            <View
              style={[
                {
                  gap: layouts.padding * 3,
                  justifyContent: "center",
                },
                isWeb() && { flex: 1 },
              ]}
            >
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
                  width: breakpoint === "sm" ? "100%" : 300,
                  marginHorizontal: "auto",
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
          </View>
        </ScrollView>
      </Container>
    </>
  );
}
