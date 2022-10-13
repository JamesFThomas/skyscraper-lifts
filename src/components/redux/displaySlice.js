import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'displayPanel',
  initialState: {
    currentFloor: 50,
    startFloor: undefined,
    endFloor: undefined,
    dUp: false,
    dDown: false,
    trips: [],
  },
  reducers: {
    //function to set dUp bool
    showUp: (state, action) => {
      state.dUp = action.payload;
    },
    //function to set dDown bool
    showDown: (state, action) => {
      state.dUp = action.payload;
    },
    // function to update current floor
    setCurFloor: (state, action) => {
      state.currentFloor += action.payload;
    },
    // function to update ending floor
    setEndFloor: (state, action) => {
      state.endFloor += action.payload;
    },
    // function to update ending floor
    setStartFloor: (state, action) => {
      state.startFloor += action.payload;
    },
    trackTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    //dispatch
    moveLift: (state, action) => {
      //set ending floor from action payload
      let end = action.payload;
      setEndFloor(end);
      // track starting floor
      setStartFloor(state.currentFloor);
      //move lift down if action.payload < currentFloor
      if (state.endFloor < state.currentFloor) {
        showUp(true);
        while (state.currentFloor <= state.endFloor) {
          setTimeout(() => {
            setCurFloor(1);
          }, 1000);
        }
        if (state.currentFloor === state.endFloor) {
          showUp(false);
          let trip = {
            start: state.startFloor,
            end: state.endFloor,
          };
          trackTrip(trip);
          setEndFloor(undefined);
          setStartFloor(undefined);
        }
      }
      //move lift up if action.payload > currentFloor
      if (state.endFloor > state.currentFloor) {
        showDown(true);
        while (state.currentFloor >= state.endFloor) {
          setTimeout(() => {
            setCurFloor(-1);
          }, 1000);
        }
        if (state.currentFloor === state.endFloor) {
          showDown(false);
          let trip = {
            start: state.startFloor,
            end: state.endFloor,
          };
          trackTrip(trip);
          setEndFloor(undefined);
          setStartFloor(undefined);
        }
      }
    },
  },
});

// create actions for this slice
export const {
  showUp,
  showDown,
  setCurFloor,
  setEndFloor,
  setStartFloor,
  trackTrip,
  moveLift,
} = displaySlice.actions;

// export reducer for this slice to store
export default displaySlice.reducer;
