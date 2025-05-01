import { Stack } from "expo-router";
import React from "react";

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ presentation: "modal" }} />
      <Stack.Screen name="profile" />
    </Stack>
  );
}

export default RootLayout;
