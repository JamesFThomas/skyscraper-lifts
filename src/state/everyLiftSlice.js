import { createSlice } from "@reduxjs/toolkit";

export const everyLiftSlice = createSlice({
  name: "lifts",
  initialState: {
    lift1: {
      currentFloor: 10,
      phase: "IDLE",
      direction: "",
      trips: [{ start: 19, end: 49, duration: 99, passengers: 5 }],
    },
    lift2: {
      currentFloor: 55,
      phase: "IDLE",
      direction: "",
      trips: [{ start: 33, end: 43, duration: 28, passengers: 3 }],
    },
    lift3: {
      currentFloor: 99,
      phase: "IDLE",
      direction: "",
      trips: [{ start: 99, end: 49, duration: 77, passengers: 2 }],
    },
  },
  reducers: {
    setDirection: (state, action) => {
      const { lift, direction: newDirection } = action.payload;
      switch (lift) {
        case "lift1": {
          return {
            ...state,
            lift1: { ...state.lift1, direction: newDirection },
          };
        }
        case "lift2": {
          return {
            ...state,
            lift2: { ...state.lift2, direction: newDirection },
          };
        }
        default: {
          return {
            ...state,
            lift3: { ...state.lift3, direction: newDirection },
          };
        }
      }
    },
    setPhase: (state, action) => {
      const { lift, phase: newPhase } = action.payload;
      switch (lift) {
        case "lift1": {
          return {
            ...state,
            lift1: { ...state.lift1, phase: newPhase },
          };
        }
        case "lift2": {
          return {
            ...state,
            lift2: { ...state.lift2, phase: newPhase },
          };
        }
        default: {
          return {
            ...state,
            lift3: { ...state.lift3, phase: newPhase },
          };
        }
      }
    },
    setCurrentFloor: (state, action) => {
      const { lift, value } = action.payload;
      let { currentFloor } = state[lift];
      switch (lift) {
        case "lift1": {
          return {
            ...state,
            lift1: { ...state.lift1, currentFloor: (currentFloor += value) },
          };
        }
        case "lift2": {
          return {
            ...state,
            lift2: { ...state.lift2, currentFloor: (currentFloor += value) },
          };
        }
        default: {
          return {
            ...state,
            lift3: { ...state.lift3, currentFloor: (currentFloor += value) },
          };
        }
      }
    },
    trackTrip: (state, action) => {
      const { lift, trip } = action.payload;
      let { trips } = state[lift];
      switch (lift) {
        case "lift1": {
          return {
            ...state,
            lift1: { ...state.lift1, trips: [...trips, trip] },
          };
        }
        case "lift2": {
          return {
            ...state,
            lift2: { ...state.lift2, trips: [...trips, trip] },
          };
        }
        default: {
          return {
            ...state,
            lift3: { ...state.lift3, trips: [...trips, trip] },
          };
        }
      }
    },
  },
});

export const { setDirection, setPhase, trackTrip, setCurrentFloor } =
  everyLiftSlice.actions;

// Thunks
const calculateRideDuration = (start, end, phase) => {
  const floors = start > end ? start - end : end - start;
  const doorTime = start === 0 ? 30 : 5;
  return phase === "ENROUTE" ? floors : floors + doorTime;
};

export const trackRideData =
  (lift, start, end, passengers, phase) => (dispatch) => {
    //TODO create function to calculate duration based on ride phase
    const duration = calculateRideDuration(start, end, phase);
    dispatch(
      trackTrip({
        lift,
        trip: { start, end, duration, passengers },
      })
    );
  };

export const startTaxiRide =
  (lift, current, end, passengers, phase = "LOADING") =>
  (dispatch) => {
    dispatch(setPhase({ lift, phase }));
    dispatch(trackRideData(lift, current, end, passengers, (phase = "TAXING")));
    if (current === 0) {
      setTimeout(() => {
        dispatch(setPhase({ lift, phase: "TAXING" }));
        dispatch(moveLiftTaxi(lift, current, end));
      }, 30000);
    } else {
      setTimeout(() => {
        dispatch(setPhase({ lift, phase: "TAXING" }));
        dispatch(moveLiftTaxi(lift, current, end));
      }, 5000);
    }
  };

export const startEnrouteRide =
  (
    lift,
    current,
    end,
    { nextStart, nextEnd, nextPass },
    passengers = 0,
    phase = "ENROUTE"
  ) =>
  (dispatch) => {
    dispatch(setPhase({ lift, phase }));
    dispatch(trackRideData(lift, current, end, passengers, phase));
    dispatch(
      moveLiftEnroute(lift, current, end, {
        nextStart,
        nextEnd,
        nextPass,
      })
    );
  };

export const unloadingDoors = (lift, current) => (dispatch) => {
  dispatch(setPhase({ lift, phase: "UNLOADING" }));
  if (current === 0) {
    setTimeout(() => {
      dispatch(setPhase({ lift, phase: "IDLE" }));
      dispatch(setDirection({ lift, direction: "" }));
    }, 30000);
  } else {
    setTimeout(() => {
      dispatch(setPhase({ lift, phase: "IDLE" }));
      dispatch(setDirection({ lift, direction: "" }));
    }, 5000);
  }
};

export const moveLiftTaxi = (lift, current, end) => (dispatch) => {
  dispatch(setDirection({ lift, direction: end > current ? "UP" : "DOWN" }));
  if (current < end) {
    setTimeout(() => {
      dispatch(setCurrentFloor({ lift, value: 1 }));
      dispatch(moveLiftTaxi(lift, (current += 1), end));
    }, 1000);
  } else if (current > end) {
    setTimeout(() => {
      dispatch(setCurrentFloor({ lift, value: -1 }));
      dispatch(moveLiftTaxi(lift, (current -= 1), end));
    }, 1000);
  } else {
    setTimeout(() => {
      dispatch(setDirection({ lift, direction: "" }));
      dispatch(unloadingDoors(lift, current));
    }, 1000);
  }
};

export const moveLiftEnroute =
  (lift, current, end, { nextStart, nextEnd, nextPass }) =>
  (dispatch) => {
    dispatch(setDirection({ lift, direction: end > current ? "UP" : "DOWN" }));
    if (current < end) {
      setTimeout(() => {
        dispatch(setCurrentFloor({ lift, value: 1 }));
        dispatch(
          moveLiftEnroute(lift, (current += 1), end, {
            nextStart,
            nextEnd,
            nextPass,
          })
        );
      }, 1000);
    } else if (current > end) {
      setTimeout(() => {
        dispatch(setCurrentFloor({ lift, value: -1 }));
        dispatch(
          moveLiftEnroute(lift, (current -= 1), end, {
            nextStart,
            nextEnd,
            nextPass,
          })
        );
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(setDirection({ lift, direction: "" }));
        dispatch(startTaxiRide(lift, nextStart, nextEnd, nextPass));
      }, 1000);
    }
  };

export default everyLiftSlice.reducer;

/*
  Phases:
  IDLE
  LOADING
  UNLOADING
  ENROUTE to pick up
  TAXING with passengers

  Directions:
  UP
  DOWN
  ''

  Trip Object:
  { startFloor, endFloor, tripDuration }

  Reducer Actions:
    action.payload.lift - switch case => 
      - 'lift1'|| 'lift2'|| 'lift3'
    action.payload =>
      - currentFloor: number || phase: string || direction: string || tripLog: array 


Working examples of reducer calls:

dispatch(
setDirection({ lift: "lift3", direction: "UP" })
);

dispatch(setPhase({ lift: "lift1", phase: "ENROUTE" }));

dispatch(setCurrentFloor({ lift: "lift1", value: 3 }));

dispatch(
trackTrip({ lift: "lift3", trip: { start: 75, end: 66, duration: 38, passengers: 5 } })
);

      */
