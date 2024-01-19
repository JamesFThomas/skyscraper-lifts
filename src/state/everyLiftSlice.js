import { createSlice } from "@reduxjs/toolkit";

export const everyLiftSlice = createSlice({
  name: "lifts",
  initialState: {
    lift1: {
      currentFloor: 5,
      phase: "IDLE",
      direction: "UP",
      trips: [
        { start: 19, end: 49, duration: 99 },
        { start: 46, end: 56, duration: 66 },
        { start: 68, end: 78, duration: 88 },
      ],
    },
    lift2: { currentFloor: 0, phase: "IDLE", direction: "", trips: [] },
    lift3: { currentFloor: 0, phase: "IDLE", direction: "", trips: [] },
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

  Reducer Action:
    action.type => 
      - 'lift1'|| 'lift2'|| 'lift3'
    action. payload =>
      - currentFloor: number || phase: string || direction: string || tripLog: array 


Working examples of reducer calls:

dispatch(
setDirection({ lift: "lift3", direction: "switch case 3 tests working" })
);

dispatch(setPhase({ lift: "lift1", phase: "ENROUTE" }));

dispatch(setCurrentFloor({ lift: "lift1", value: 3 }));

dispatch(
trackTrip({ lift: "lift3", trip: { start: 75, end: 66, duration: 38 } })
);

      */
