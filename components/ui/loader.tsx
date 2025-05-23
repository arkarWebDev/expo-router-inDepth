import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
