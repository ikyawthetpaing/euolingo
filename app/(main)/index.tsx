import { Image } from "expo-image";
import { router } from "expo-router";
import Head from "expo-router/head";

import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useLanguage } from "@/context/language";
import { isWeb } from "@/lib/utils";
import { commonTranslations } from "@/translations/common";

export default function Home() {
  const breakpoint = useBreakpoint();
  const { language } = useLanguage();

  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.description} />
      </Head>
      <View style={{ flex: 1 }}>
        <View
          style={{
            maxWidth: 1024,
            marginHorizontal: "auto",
            width: "100%",
            padding: layouts.padding * 2,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: breakpoint === "sm" ? "column" : "row",
              gap: layouts.padding,
            }}
          >
            <View style={[isWeb() ? { flex: 1 } : {}]}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/language-learning-camp-abstract-concept-vector-illustration-summer-educational-language-program-native-english-speaker-improve-conversational-skills-training-entertainment-abstract-metaphor_335657-5914.jpg?size=626&ext=jpg&ga=GA1.1.908425002.1696943356&semt=ais",
                }}
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
                style={{ fontSize: 32, fontWeight: "800", textAlign: "center" }}
              >
                {commonTranslations.landingPageContent[language].content}
              </Text>
              <View
                style={{
                  gap: layouts.padding,
                  width: breakpoint === "sm" ? "100%" : 300,
                  marginHorizontal: "auto",
                }}
              >
                <Button onPress={() => router.push("/(main)/register")}>
                  {commonTranslations.getStarted[language].content}
                </Button>
                <Button variant="outline">
                  {commonTranslations.iAlreadyHaveAnAccount[language].content}
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
