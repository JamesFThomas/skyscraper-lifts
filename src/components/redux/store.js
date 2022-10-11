import { configureStore } from '@reduxjs/toolkit';

// import different Slices into the store
import counterReducer from './counterSlice';
import displayReducer from './displaySlice';

export default configureStore({
  reducer: {
    //add slices to the root reducer fro app access
    counter: counterReducer,
    display: displayReducer,
  },
});
