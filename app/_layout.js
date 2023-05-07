import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack>
        {/* <Stack.Screen
          name="home"
          options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="modal/basketModal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="preparingOrder/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="delivery/index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default _layout;
