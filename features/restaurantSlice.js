import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {},
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
