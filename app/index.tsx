import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

function index() {
  const router = useRouter();
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  const randomProfileImage = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `https://avatars.githubusercontent.com/u/${randomNumber}`;
  };

  const goToRandomProfile = () => {
    router.push({
      pathname: "./profile/[id]",
      params: {
        id: randomProfileImage(),
      },
    });
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[{ fontSize: 16 }, isDarkMode && { color: "#BB86FC" }]}>
        Hello World!!
      </Text>
      <Link
        href={"/settings"}
        style={[styles.button, isDarkMode && styles.darkButton]}
      >
        Go to settings
      </Link>
      <Link
        href={"./profile"}
        style={[styles.button, isDarkMode && styles.darkButton]}
      >
        Go to profile
      </Link>
      {/* <Link
        href={{
          pathname: "./profile/[id]",
          params: {
            id: randomProfileImage(),
          },
        }}
      >
        Go to randomProfile
      </Link> */}
      <Pressable onPress={goToRandomProfile}>
        <Text style={[styles.button, isDarkMode && styles.darkButton]}>
          Go to random profile
        </Text>
      </Pressable>
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    flexDirection: "column",
  },
  button: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  darkButton: {
    color: "#BB86FC",
    backgroundColor: "#1E1E1E",
  },
});
