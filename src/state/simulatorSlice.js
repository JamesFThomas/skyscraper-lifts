import { createSlice } from "@reduxjs/toolkit";
import { startTaxiRide, startEnrouteRide } from "./everyLiftSlice";

export const simulatorSlice = createSlice({
  name: "simulator",
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
    callMade: (state, action) => {
      // to view the action it must be second parameter to reducer
      let { payload } = action;
      return console.log(" Random Call made", payload);
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

// increase duration by 1 each second
export const simulatorTimer = (isRunning) => (dispatch) => {
  const timer = setInterval(() => {
    if (!isRunning) {
      clearInterval(timer);
    }
    dispatch(incrementDuration(1));
  }, 1000);
};

// create randomized ride information
export const createRides = () => (dispatch) => {
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

// mimic a randomized call for an elevator ride
export const randomCall = (run, randomInt) => (dispatch) => {
  // const min = 6;
  // const max = 129;
  // let newRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  // let runIncremented = (run += 1);
  // if (run > 0) {
  // }
  //TODO set up call for startEnrouteRide with next ride data
  // eventually next call will have to come from rides array
  setTimeout(() => {
    console.log("inside randomCall thunk", run);
    dispatch(callMade(run));

    dispatch(
      startEnrouteRide("lift1", 10, 1, {
        nextStart: 1,
        nextEnd: 10,
        passengers: 7,
      })
    );
    dispatch(
      startEnrouteRide("lift2", 55, 45, {
        nextStart: 45,
        nextEnd: 55,
        passengers: 3,
      })
    );
    dispatch(
      startEnrouteRide("lift3", 99, 89, {
        nextStart: 89,
        nextEnd: 99,
        passengers: 2,
      })
    );
    // dispatch(randomCall(runIncremented, newRandom));
    // dispatch(startTaxiRide("lift2", 1, 10, 2));
    // dispatch(startTaxiRide("lift3", 99, 89, 1));
  }, 5000);
};

/* 
  TODO complete control middleware functions 
- control functions
-- ClosestLift: determines which lift to call for newly generated ride

-- CallLift: sets lift with newly generated ride stats
---> triggered at random interval  

*/

export default simulatorSlice.reducer;
