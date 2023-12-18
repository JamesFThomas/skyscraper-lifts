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
    LOADING: false,
    EXITING: false,
    trips: [],
  },
  reducers: {
    showUp: (state, action) => {
      state.dUp = action.payload;
    },
    showDown: (state, action) => {
      state.dDown = action.payload;
    },
    setCurFloor: (state, action) => {
      state.currentFloor += action.payload;
    },
    setIdle: (state, action) => {
      state.IDLE = action.payload;
    },
    setLoading: (state, action) => {
      state.LOADING = action.payload;
    },
    setExiting: (state, action) => {
      state.EXITING = action.payload;
    },
    setSelect: (state, action) => {
      state.SELECT = action.payload;
    },
    setMoving: (state, action) => {
      state.MOVING = action.payload;
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
  setLoading,
  setExiting,
  trackTrip,
} = displaySlice.actions;

// make thunk function to move moveLift
export const moveLift = (current, end) => (dispatch) => {
  dispatch(setSelect(false));
  dispatch(setMoving(true));
  if (current < end) {
    setTimeout(() => {
      dispatch(setCurFloor(1));
      dispatch(moveLift((current += 1), end));
    }, 1000);
  } else if (current > end) {
    setTimeout(() => {
      dispatch(setCurFloor(-1));
      dispatch(moveLift((current -= 1), end));
    }, 1000);
  } else {
    setTimeout(() => {
      dispatch(exitLift(current));
    }, 1000);
  }
};

export const enterLift = (current) => (dispatch) => {
  dispatch(setLoading(true));
  //if floor is lobby
  if (current === 0) {
    setTimeout(() => {
      dispatch(setIdle(false));
      dispatch(setLoading(false));
      dispatch(setSelect(true));
    }, 5000);
  }
  // if any other floor in building
  else {
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setIdle(false));
      dispatch(setSelect(true));
    }, 3000);
  }
};

export const exitLift = (current) => (dispatch) => {
  dispatch(setExiting(true));
  dispatch(setIdle(true));
  dispatch(setMoving(false));
  if (current === 0) {
    setTimeout(() => {
      dispatch(setExiting(false));
      dispatch(showUp(false));
      dispatch(showDown(false));
    }, 5000);
  } else {
    setTimeout(() => {
      dispatch(setExiting(false));
      dispatch(showUp(false));
      dispatch(showDown(false));
    }, 3000);
  }
};

// export reducer for this slice to store
export default displaySlice.reducer;
