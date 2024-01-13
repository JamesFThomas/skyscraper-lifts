import { createSlice } from "@reduxjs/toolkit";

export const everyLiftSlice = createSlice({
  name: "lifts",
  initialState: {
    lift1: { currentFloor: 0, phase: "IDLE", direction: "", trips: [] },
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
      state[lift].phase = newPhase;
    },
    setCurrentFloor: (state, action) => {
      const { lift, value } = action.payload;
      state[lift].currentFloor += value;
    },
    trackTrip: (state, action) => {
      const { lift, trip } = action.payload;
      state[lift].trips.push(trip);
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
*/
