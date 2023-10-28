import { useState } from "react";
import { Stack } from "expo-router";

import { MainHeader } from "@/components/layouts/main-header";
import { View } from "@/components/themed";

export default function MainLayout() {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <MainHeader
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
      />
      <View style={{ flex: 1, paddingTop: headerHeight }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}
