import { Role, useAuth } from "@/hooks/auth";
import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Dashboard() {
  const { user } = useAuth();

  if (user?.role !== Role.Admin) {
    return <Redirect href={"/(app)"} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin Dashboard</Text>
    </View>
  );
}

export default Dashboard;

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
