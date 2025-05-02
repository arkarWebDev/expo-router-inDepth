import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

function RandomUserProfile() {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <View>
      <Text>RandomUserProfile</Text>
      <Image source={{ uri: id as string }} width={200} height={200} />
    </View>
  );
}

export default RandomUserProfile;
