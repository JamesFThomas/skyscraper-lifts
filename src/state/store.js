import { combineReducers, configureStore } from "@reduxjs/toolkit";

// imported Slices
import simulatorSlice from "./simulatorSlice.js";
import singleModeSlice from "./singleModeSlice.js";
import everyLiftSlice from "./everyLiftSlice.js";

// imported Middleware listener
import { simulatorListener } from "./simulatorMiddleware.js";

export default configureStore({
  reducer: {
    simulator: simulatorSlice,
    singleMode: singleModeSlice,
    everyLift: everyLiftSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(simulatorListener.middleware),
});

// component testing reducers and store for component wrapper
const testReducer = combineReducers({
  simulator: simulatorSlice,
  singleMode: singleModeSlice,
  everyLift: everyLiftSlice,
});

export const setupTestStore = (preloadedState) => {
  return configureStore({
    reducer: testReducer,
    preloadedState,
  });
};
