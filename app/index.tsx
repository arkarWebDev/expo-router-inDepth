import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function index() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Link href={"/settings"}>Go to settings</Link>
      <Link href={"./profile"}>Go to profile</Link>
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
