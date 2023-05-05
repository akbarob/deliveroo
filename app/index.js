import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <Stack.Screen />
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;
