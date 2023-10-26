import { CourseDetailsBar } from "@/components/course-details-bar";
import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { Button } from "@/components/ui/button";
import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";
import { SupportedLanguageCode } from "@/types";

interface Props {
  courseId: SupportedLanguageCode;
}

export function CourseRightBar({ courseId }: Props) {
  const { border, muted, mutedForeground } = useTheme();
  return (
    <View
      style={{
        padding: layouts.padding * 2,
        borderLeftWidth: layouts.borderWidth,
        borderLeftColor: border,
        flexShrink: 0,
        gap: layouts.padding * 2,
      }}
    >
      <CourseDetailsBar courseId={courseId} />
      <View
        style={{
          borderRadius: layouts.padding,
          borderWidth: layouts.borderWidth,
          borderColor: border,
          padding: layouts.padding * 2,
          gap: layouts.padding * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Daily Quests</Text>
          <Text
            style={{
              color: "#1cb0f6",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            View all
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="bolt" size={64} />
          <View style={{ flex: 1 }}>
            <Text>Earn 10 XP</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View
                  style={{
                    height: 16,
                    backgroundColor: muted,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 16,
                    borderBottomLeftRadius: 16,
                  }}
                >
                  <Text style={{ fontSize: 12, color: mutedForeground }}>
                    0 / 10
                  </Text>
                </View>
              </View>
              <Icon name="box" />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderRadius: layouts.padding,
          borderWidth: layouts.borderWidth,
          borderColor: border,
          padding: layouts.padding * 2,
          gap: layouts.padding * 2,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            maxWidth: 256,
          }}
        >
          Create a profile to save your progress!
        </Text>
        <View style={{ gap: layouts.padding }}>
          <Button>Create a profile</Button>
          <Button variant="outline">Sign in</Button>
        </View>
      </View>
    </View>
  );
}
