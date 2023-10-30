import { Icon } from "@/components/icons";
import { Text, View, ViewProps } from "@/components/themed";
import { layouts } from "@/constants/layouts";
import { useLanguageCode } from "@/context/language";
import { SupportedLanguageCode } from "@/types";

import { SelectCourse } from "./select-course";

interface Props extends ViewProps {
  courseId: SupportedLanguageCode;
}
export function CourseDetailsBar({ courseId, style, ...props }: Props) {
  const { languageCode } = useLanguageCode();
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
      <SelectCourse excludes={[languageCode]} />
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
