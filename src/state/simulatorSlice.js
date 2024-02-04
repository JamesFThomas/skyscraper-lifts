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

  //TODO get current floor of randomLift chosen
  let cf = lifts[randomLift].currentFloor;

  // console.log("currentFloor of random lift", cf);

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
              passengers: nextRide.passengers,
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
    } else {
      console.log("app stopped so I stopped");
      return; // stop the cycle
    }
  };

/* 
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


Remaining Tasks:
-> waiting pool 
  --> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5
    ** once functions for waiting behavior implemented, add waiting pool stats to simulator summary **
    ** for wait time => trips should track if they were TAXING or ENROUTE , and number of passengers **
*/

export default simulatorSlice.reducer;
