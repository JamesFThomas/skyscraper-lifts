import { createSlice } from "@reduxjs/toolkit";
import { startEnrouteRide } from "./everyLiftSlice";

export const simulatorSlice = createSlice({
  name: "simulator",
  initialState: {
    duration: 0,
    isRunning: false,
    showSummary: false,
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
    showSummary: (state, action) => {
      let { payload } = action;
      return {
        ...state,
        showSummary: payload,
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
    removeRide: (state, action) => {
      // to view the action it must be second parameter to reducer
      // let { payload } = action;
      let { rides } = state;
      return { ...state, rides: rides.slice(1) };
    },
  },
});

// action creators that correspond to each reducer in Slice
export const {
  incrementDuration,
  runSimulator,
  resetDuration,
  addRide,
  removeRide,
  showSummary,
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
  //TODO reset limit when done testing auto reset function
  for (let i = 0; i <= 50; i++) {
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

export const pickRandomLift = (lift1, lift2, lift3) => {
  const phases = {
    lift1: lift1.phase,
    lift2: lift2.phase,
    lift3: lift3.phase,
  };
  const lifts = {
    lift1: lift1,
    lift2: lift2,
    lift3: lift3,
  };

  let idleLifts = [];

  for (let key in phases) {
    if (phases[key] === "IDLE") idleLifts.push(key);
  }

  let randomLift = idleLifts[Math.floor(Math.random() * idleLifts.length)];

  let cf = lifts[randomLift].currentFloor;

  return { title: randomLift, currentFloor: cf };
};

export const pickNextRide = (rides) => {
  const nextRide = rides[0];
  return nextRide;
};

// mimic a randomized call for an elevator ride
export const randomCall =
  (call = 1) =>
  (dispatch, getState) => {
    // calculate random interval for simulated call
    const min = 1; //reset to 6
    const max = 10; // reset to 129
    let randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;

    // access state for conditional logic
    const { isRunning, rides } = getState().simulator;
    const { lift1, lift2, lift3 } = getState().everyLift;
    const anyIdle =
      lift1.phase === "IDLE" ||
      lift2.phase === "IDLE" ||
      lift3.phase === "IDLE";

    if (anyIdle && isRunning) {
      let randomLift = pickRandomLift(lift1, lift2, lift3);
      let nextRide = pickNextRide(rides);
      // console.log("rides", rides);
      // console.log("lift + next ride data", randomLift, nextRide);
      dispatch(removeRide());
      setTimeout(() => {
        console.log("Simulated Call", call);
        dispatch(
          startEnrouteRide(
            randomLift.title,
            randomLift.currentFloor,
            nextRide.start,
            {
              nextStart: nextRide.start,
              nextEnd: nextRide.end,
              nextPass: nextRide.passengers,
            }
          )
        );
        dispatch(randomCall((call += 1)));
      }, randomInterval * 1000);
    }

    if (!anyIdle && isRunning) {
      console.log(
        "nothing was idle, but app still running so trying again",
        call
      );
      setTimeout(() => {
        dispatch(randomCall((call += 1)));
      }, 10 * 1000); // wait 10 second a nd call again
    }
    if (!isRunning) {
      console.log("app stopped so I stopped");
      return; // stop the cycle
    }
  };

export default simulatorSlice.reducer;

/* 
 TODO Tasks If You want to be next level:
-> waiting pool 
  --> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5
    ** once functions for waiting behavior implemented, add waiting pool stats to simulator summary **
    ** for wait time => trips should track if they were TAXING or ENROUTE , and number of passengers **
*/
