import { Stack } from "expo-router";

import { MainHeader } from "@/components/layouts/main-header";
import { Shell } from "@/components/shell";
import { View } from "@/components/themed";

export default function MainLayout() {
  return (
    <Shell>
      <MainHeader />
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </Shell>
  );
}
