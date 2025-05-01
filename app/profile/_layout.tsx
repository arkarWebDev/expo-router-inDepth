import { Tabs } from "expo-router";
import React from "react";

function ProfileLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, tabBarLabel: "profile" }}
      />
      <Tabs.Screen name="likes" options={{ headerShown: false }} />
    </Tabs>
  );
}

export default ProfileLayout;
