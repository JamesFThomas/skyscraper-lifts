import { createSlice } from "@reduxjs/toolkit";

export const singleModeSlice = createSlice({
  name: "singleMode",
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
    durations: [],
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
    trackDuration: (state, action) => {
      state.durations.push(action.payload);
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
  trackDuration,
} = singleModeSlice.actions;

// update lift trip state
export const idleLift = () => (dispatch) => {
  dispatch(showUp(false));
  dispatch(showDown(false));
  dispatch(setSelect(false));
  dispatch(setMoving(false));
  dispatch(setExiting(false));
  dispatch(setLoading(false));
  dispatch(setIdle(true));
};

export const movingLift = () => (dispatch) => {
  dispatch(setSelect(false));
  dispatch(setIdle(false));
  dispatch(setExiting(false));
  dispatch(setLoading(false));
  dispatch(setMoving(true));
};
export const selectingLift = () => (dispatch) => {
  dispatch(setMoving(false));
  dispatch(setExiting(false));
  dispatch(setIdle(false));
  dispatch(setLoading(false));
  dispatch(setSelect(true));
};
export const loadingLift = () => (dispatch) => {
  dispatch(setSelect(false));
  dispatch(setMoving(false));
  dispatch(setExiting(false));
  dispatch(setIdle(false));
  dispatch(setLoading(true));
};
export const exitingLift = () => (dispatch) => {
  dispatch(setSelect(false));
  dispatch(setMoving(false));
  dispatch(setExiting(false));
  dispatch(setLoading(false));
  dispatch(setIdle(true));
};

export const setMovingDirection = (end, current) => (dispatch) => {
  return end < current ? dispatch(showDown(true)) : dispatch(showUp(true));
};

export const calculateTrip = (currentFloor, end) => (dispatch) => {
  const endFloor = end === "L" ? 0 : end;
  const doorTime = currentFloor === "L" ? 30 : 5;
  const movingTime =
    endFloor < currentFloor ? currentFloor - endFloor : endFloor - currentFloor;
  const totalTime = movingTime + doorTime;
  dispatch(trackDuration(totalTime));
  const tripTime =
    totalTime > 60
      ? `${Math.floor(totalTime / 60)}:${
          totalTime - Math.floor(totalTime / 60) * 60
        } min`
      : `${totalTime} secs`;

  const newTrip = { currentFloor, endFloor, tripTime };
  dispatch(trackTrip(newTrip));
};

// thunks to move moveLift
export const moveLift = (current, end) => (dispatch) => {
  dispatch(setMovingDirection(end, current));
  dispatch(movingLift(true));
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
  if (current === 0) {
    setTimeout(() => {
      dispatch(selectingLift());
    }, 30000);
  } else {
    setTimeout(() => {
      dispatch(selectingLift());
    }, 5000);
  }
};

export const exitLift = (current) => (dispatch) => {
  dispatch(setExiting(true));
  dispatch(setIdle(true));
  dispatch(setMoving(false));
  if (current === 0) {
    setTimeout(() => {
      dispatch(idleLift());
    }, 30000);
  } else {
    setTimeout(() => {
      dispatch(idleLift());
    }, 5000);
  }
};

// export reducer for this slice to store
export default singleModeSlice.reducer;
