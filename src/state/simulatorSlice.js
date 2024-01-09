import { createSlice } from "@reduxjs/toolkit";

/**
  A Slice requires a string name to identify the slice, an initial state
  value, and one or more reducer functions to define how the state
  can be updated. Once a slice is created, we can export the
  generated Redux action creators and the reducer function for the
  whole slice.
 */
export const simulatorSlice = createSlice({
  name: "simulator", // name of slice
  initialState: {
    duration: 0,
    isRunning: false,
    rides: [],
  },
  reducers: {
    incrementDuration: (state, action) => {
      state.duration += action.payload;
    },
    resetDuration: (state) => {
      state.duration = 0;
    },
    runSimulator: (state, action) => {
      state.isRunning = action.payload;
    },
    addRide: (state, action) => {
      state.rides.push(action.payload);
    },
  },
});

// action creators that correspond to each reducer in Slice
export const { incrementDuration, runSimulator, resetDuration, addRide } =
  simulatorSlice.actions;

// increase duration number 1 each second will simulator is running
export const simulatorTimer = (isRunning) => (dispatch) => {
  const timer = setInterval(() => {
    if (!isRunning) {
      clearInterval(timer);
    }
    dispatch(incrementDuration(1));
  }, 1000);
};

// create new ride information
export const createRides = (rides) => (dispatch) => {};

export default simulatorSlice.reducer;
