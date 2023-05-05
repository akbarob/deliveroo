import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};

export default _layout;
