import { createSlice } from "@reduxjs/toolkit";

/**
  A Slice requires a string name to identify the slice, an initial state
  value, and one or more reducer functions to define how the state
  can be updated. 
  
  Once a slice is created, we can export the
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
      let { duration } = state;
      let { payload } = action;
      return {
        ...state,
        duration: (duration += payload),
      };
    },
    resetDuration: (state) => {
      return {
        ...state,
        duration: 0,
      };
    },
    runSimulator: (state, action) => {
      let { payload } = action;
      return {
        ...state,
        isRunning: payload,
      };
    },
    addRide: (state, action) => {
      let { payload } = action;
      let { rides } = state;
      return {
        ...state,
        rides: [...rides, payload],
      };
    },
    callMade: (action) => {
      let { payload } = action;
      return console.log("Call made", payload);
    },
  },
});

// action creators that correspond to each reducer in Slice
export const {
  incrementDuration,
  runSimulator,
  resetDuration,
  addRide,
  callMade,
} = simulatorSlice.actions;

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
export const createRides = () => (dispatch) => {
  // random numbers
  for (let i = 0; i < 50; i++) {
    let start = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    let end = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    let passengers = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let newRide = {
      start: start,
      end: end,
      passengers: passengers,
    };
    dispatch(addRide(newRide));
  }
};

// creates random ride calls
export const randomCall = (run) => (dispatch) => {
  // const min = 6;
  // const max = 129;
  // let random = Math.floor(Math.random() * (max - min + 1)) + min;
  if (run > 0) {
    setInterval(() => {
      console.log("inside randomCall thunk", run);
      dispatch(callMade(run));
      dispatch(randomCall((run += 1)));
    }, 1000);
  }
};

/* 
  TODO complete control middleware functions 
- control functions
-- ClosestLift: determines which lift to call for newly generated ride

-- CallLift: sets lift with newly generated ride stats
---> triggered at random interval  

-- SimulatorSummary: calculates simulator stats from recently ended run 
---> 'The average time spent waiting for an elevator.',
---> 'The average time spent inside an elevator.',
---> 'The average total time spent per trip.',
*/

export default simulatorSlice.reducer;
