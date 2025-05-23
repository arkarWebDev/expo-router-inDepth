import { Role, useAuth } from "@/hooks/auth";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function index() {
  const { setUser } = useAuth();

  const signInHandler = () => {
    setUser({ name: "code hub", email: "codehub@gmail.com", role: Role.User });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={signInHandler}>
        Sign In
      </Text>
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
