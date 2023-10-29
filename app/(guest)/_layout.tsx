import { useState } from "react";
import { Stack } from "expo-router";

import { Container } from "@/components/container";
import { MainHeader } from "@/components/layouts/main-header";
import { Shell } from "@/components/shell";

export default function MainLayout() {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <Shell>
      <MainHeader
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
      />
      <Container style={{ paddingTop: headerHeight }}>
        <Stack screenOptions={{ headerShown: false }} />
      </Container>
    </Shell>
  );
}
