import { createSlice } from '@reduxjs/toolkit';

/**
  A Slice requires a string name to identify the slice, an initial state
  value, and one or more reducer functions to define how the state
  can be updated. Once a slice is created, we can export the
  generated Redux action creators and the reducer function for the
  whole slice.
 */
export const counterSlice = createSlice({
  name: 'counter', // name of slice
  initialState: {
    count: 0, // name && value of initial state variable for this Slice
  },
  reducers: {
    // define methods found on this slice object like a class method
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// action creators that correspond to each reducer in Slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
