import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "displayPanel",
  initialState: {
    currentFloor: 10,
    dUp: false,
    dDown: false,
    IDLE: true,
    SELECT: false,
    MOVING: false,
    trips: [],
  },
  reducers: {
    showUp: (state, action) => {
      state.dUp = action.payload;
    },
    showDown: (state, action) => {
      state.dUp = action.payload;
    },
    setCurFloor: (state, action) => {
      state.currentFloor += action.payload;
    },
    setIdle: (state, action) => {
      state.endFloor += action.payload;
    },
    setSelect: (state, action) => {
      state.startFloor += action.payload;
    },
    setMoving: (state, action) => {
      state.startFloor += action.payload;
    },
    trackTrip: (state, action) => {
      state.trips.push(action.payload);
    },
  },
});

// create actions for this slice
export const {
  showUp,
  showDown,
  setCurFloor,
  setIdle,
  setSelect,
  setMoving,
  trackTrip,
} = displaySlice.actions;

// make thunk function to move moveLift
export const moveLift = (current, end) => (dispatch) => {
  if (current === end) {
    setTimeout(() => {
      // dispatch(setCurFloor(1));
      console.log("done", current, end);
      // dispatch(showDown(false));
      // dispatch(showUp(false));
      return;
    }, 1000);
  }
  if (current < end) {
    setTimeout(() => {
      console.log(current, end);
      dispatch(setCurFloor(1));
      dispatch(moveLift((current += 1), end));
    }, 1000);
  }
  if (current > end) {
    setTimeout(() => {
      console.log(current, end);
      dispatch(setCurFloor(-1));
      dispatch(moveLift((current -= 1), end));
    }, 1000);
  }
};

// export reducer for this slice to store
export default displaySlice.reducer;
