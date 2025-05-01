import React from "react";
import { StyleSheet, Text, View } from "react-native";

function index() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
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
