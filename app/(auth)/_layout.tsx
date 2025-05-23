import Loader from "@/components/ui/loader";
import { useAuth } from "@/hooks/auth";
import { Redirect, Stack } from "expo-router";
import React from "react";

function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return <Redirect href={"/(app)"} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default AuthLayout;
