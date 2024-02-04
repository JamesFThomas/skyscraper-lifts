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
    //TODO recycle action to pop and return one ride from rides array
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
export const randomCall =
  (call = 1) =>
  (dispatch, getState) => {
    // calculate random interval for simulated call
    const min = 6;
    const max = 129;
    let randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;

    //TODO set up this function to start an new ride sequence if isRunning === true && if any lift phases === "idle"
    //TODO grab next ride data from simulator rides array
    // access state for conditional logic
    const { isRunning } = getState().simulator;
    const { phase: phase1 } = getState().everyLift.lift1;
    const { phase: phase2 } = getState().everyLift.lift2;
    const { phase: phase3 } = getState().everyLift.lift3;
    const anyIdle = phase1 === "IDLE" || phase2 === "IDLE" || phase3 === "IDLE";
    if (anyIdle && isRunning) {
      //TODO determine which lifts of the group are idle for ride assignment
      // TODO choose at random elevator from idle list to assign next app
      setTimeout(() => {
        console.log("Simulated Call", call);
        dispatch(randomCall((call += 1)));
      }, 10 * 1000); // reset to (randomInterval * 1000 ms) when function works correctly
    }
    if (!anyIdle && isRunning) {
      console.log(
        "nothing was idle, but app still running so trying again",
        call
      );
      setTimeout(() => {
        dispatch(randomCall((call += 1)));
      }, 10 * 1000);
    } else {
      console.log("app stopped so I stopped");
      return;
    }
  };

/* 
  TODO complete control middleware functions 

  Test calls fro enroute to taxing ride tests
  let call = 1;
setTimeout(() => {
    console.log("Simulated Call", call);
    dispatch(callMade(call));
    dispatch(
      startEnrouteRide("lift1", 10, 1, {
        nextStart: 1,
        nextEnd: 10,
        passengers: 7,
      })
    );
  }, 5000);
  setTimeout(() => {
    console.log("Simulated Call", (call += 1));
    dispatch(callMade((call += 1)));
    dispatch(
      startEnrouteRide("lift2", 55, 45, {
        nextStart: 45,
        nextEnd: 55,
        passengers: 3,
      })
    );
  }, 10000);
  setTimeout(() => {
    console.log("Simulated Call", (call += 2));
    dispatch(callMade((call += 2)));
    dispatch(
      startEnrouteRide("lift3", 99, 89, {
        nextStart: 89,
        nextEnd: 99,
        passengers: 2,
      })
    );
  }, 15000);





- control functions
-- ClosestLift: determines which lift to call for newly generated ride

-- CallLift: sets lift with newly generated ride stats
---> triggered at random interval  

Remaining Tasks:
-> waiting pool 
  --> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5
    ** once functions for waiting behavior implemented, add waiting pool stats to simulator summary **
    ** for wait time => trips should track if they were TAXING or ENROUTE , and number of passengers **
*/

export default simulatorSlice.reducer;
