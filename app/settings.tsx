import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function settings() {
  return (
    <>
      {/* <Stack.Screen options={{ headerTitle: "Settings Screen" }} /> */}
      <View>
        <Text>Settings Screen</Text>
        <Link dismissTo href={"/"}>
          Go to home
        </Link>
      </View>
    </>
  );
}

export default settings;
