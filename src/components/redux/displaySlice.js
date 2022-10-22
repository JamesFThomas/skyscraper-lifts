import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'displayPanel',
  initialState: {
    currentFloor: 10,
    startFloor: 'start variable',
    endFloor: 20,
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
} = displaySlice.actions;

// make thunk function to move moveLift
export const moveLift = (current, end) => (dispatch) => {
  if (current === end) {
    setTimeout(() => {
      console.log('done');
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
};

// export reducer for this slice to store
export default displaySlice.reducer;
