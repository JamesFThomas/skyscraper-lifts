import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'displayPanel',
  initialState: {
    currentFloor: 77,
    startFloor: 0,
    endFloor: 0,
    dUp: false,
    dDown: false,
  },
  reducers: {
    //function to set goingUp bool
    goingUp: (state) => {
      if (state.dUp) {
        state.dUp = false;
      }
      state.dUp = true;
    },
    //function to set goingDown bool
    goingDown: (state) => {
      if (state.dDown) {
        state.dDown = false;
      }
      state.dDown = true;
    },
    // function to update current floor
    setFloor: (state, action) => {
      state.currentFloor += action.payload;
    },
  },
});

// create actions for this slice
export const { goingUp, goingDown, setFloor } = displaySlice.actions;

//create async function that using setTimeout to update currentFloor
export const moveLiftAsync = (end) => (dispatch) => {
  //check if end === currentFloor
  //throw error
  //check if end < currentFloor
  //setTimeout decrease current floor until === end
  //check if end > currentFloor
  //setTimeout increase current floor until === end
};

// export reducer for this slice to store
export default displaySlice.reducer;
