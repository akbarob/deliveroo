import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Link, useNavigation } from "expo-router";
import { Stack } from "expo-router";

const Basket = () => {
  const navigation = useNavigation();
  const isPresented = navigation.canGoBack();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
      {!isPresented && <Link href="../">Dismiss</Link>}

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Basket;
