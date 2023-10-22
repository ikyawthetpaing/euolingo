import { Image } from "expo-image";
import { Link } from "expo-router";
import Head from "expo-router/head";

import { Icons } from "@/components/icons";
import { STATUSBAR_HEIGHT } from "@/components/status-bar";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";
import { isWeb } from "@/lib/utils";

export default function Home() {
  const { border, mutedForeground } = useTheme();
  const breakpoint = useBreakpoint();
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.description} />
      </Head>
      <View style={{ flex: 1 }}>
        {/* header */}
        <View
          style={{
            borderBottomWidth: layouts.borderWidth,
            borderBottomColor: border,
          }}
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
              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    color: mutedForeground,
                  }}
                >
                  {breakpoint == "sm" ? "ENGLISH" : "SITE LANGUAGE: ENGLISH"}
                </Text>
                <Icons.chevronDown color={mutedForeground} />
              </View>
            </View>
          </View>
        </View>
        {/* content */}
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
                A fun and effective language learning experience that's free!
              </Text>
              <View
                style={{
                  gap: layouts.padding,
                  width: breakpoint === "sm" ? "100%" : 300,
                  marginHorizontal: "auto",
                }}
              >
                <Button>Get Started</Button>
                <Button variant="outline">I Already Have An Account</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
