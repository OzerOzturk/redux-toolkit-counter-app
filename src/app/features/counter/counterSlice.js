import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 2,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    add10: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, add10 } = counterSlice.actions;

export default counterSlice.reducer;
