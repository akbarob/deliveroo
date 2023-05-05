import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./features/restaurantSlice";
import basketReducer from "./features/basketSlice";

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    basket: basketReducer,
  },
});
