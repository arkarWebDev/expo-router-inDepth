import { AuthContextProvider } from "@/hooks/auth";
import { Slot } from "expo-router";

function RootLayout() {
  return (
    <AuthContextProvider>
      <Slot />
    </AuthContextProvider>
  );
}

export default RootLayout;
