import { configureStore } from '@reduxjs/toolkit';

// import different Slices into the store
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    //add slices to the root reducer fro app access
    counter: counterReducer,
  },
});
