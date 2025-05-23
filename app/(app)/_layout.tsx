import Loader from "@/components/ui/loader";
import { useAuth } from "@/hooks/auth";
import { Redirect, Stack } from "expo-router";
import React from "react";

function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard" />
    </Stack>
  );
}

export default AppLayout;
