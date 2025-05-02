import { Tabs } from "expo-router";
import React from "react";

function ProfileLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="likes" />
      <Tabs.Screen name="[id]" options={{ tabBarLabel: "Random Profile" }} />
    </Tabs>
  );
}

export default ProfileLayout;
