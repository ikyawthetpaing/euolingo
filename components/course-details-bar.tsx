import { Image } from "expo-image";

import { Icon } from "@/components/icons";
import { Text, View, ViewProps } from "@/components/themed";
import { layouts } from "@/constants/layouts";
import { getCourseById } from "@/content/courses";
import { SupportedLanguageCode } from "@/types";

interface Props extends ViewProps {
  courseId: SupportedLanguageCode;
}
export function CourseDetailsBar({ courseId, style, ...props }: Props) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          gap: layouts.padding * 2,
        },
        style,
      ]}
      {...props}
    >
      <View
        style={{
          width: 32,
          aspectRatio: 1,
          overflow: "hidden",
        }}
      >
        <Image
          source={getCourseById(courseId)?.image}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: layouts.padding * 0.5,
        }}
      >
        <Icon name="fire" />
        <Text style={{ fontWeight: "800" }}>356</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: layouts.padding * 0.5,
        }}
      >
        <Icon name="donut" />
        <Text style={{ fontWeight: "800" }}>500</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: layouts.padding * 0.5,
        }}
      >
        <Icon name="heart" />
        <Text style={{ fontWeight: "800" }}>5</Text>
      </View>
    </View>
  );
}
