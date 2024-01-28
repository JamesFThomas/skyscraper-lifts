import { configureStore } from "@reduxjs/toolkit";

// imported Slices
import simulatorSlice from "./simulatorSlice";
import singleModeSlice from "./singleModeSlice";
import everyLiftSlice from "./everyLiftSlice";

// imported Middleware listener
import { simulatorListener } from "./simulatorMiddleware";

export default configureStore({
  reducer: {
    simulator: simulatorSlice,
    singleMode: singleModeSlice,
    everyLift: everyLiftSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(simulatorListener.middleware),
});
