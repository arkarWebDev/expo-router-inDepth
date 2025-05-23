import { Role, useAuth } from "@/hooks/auth";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function index() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome form the app.</Text>
      <View>
        <Text>name - {user?.name}</Text>
        <Text>email - {user?.email}</Text>
        <Text>role - {user?.role}</Text>
      </View>
      {/* {user?.role === Role.Admin && ( */}
      <Link href={"/(app)/dashboard"}>Go to dashboard</Link>
      {/* )} */}
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
