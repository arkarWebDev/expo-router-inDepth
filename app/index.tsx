import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function index() {
  const router = useRouter();

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
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Link href={"/settings"}>Go to settings</Link>
      <Link href={"./profile"}>Go to profile</Link>
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
        <Text>Go to random profile</Text>
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
  },
});
