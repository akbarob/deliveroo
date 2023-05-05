import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restu: {},
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      state.restu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
