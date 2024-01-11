import { configureStore } from "@reduxjs/toolkit";

// import different Slices into the store
import simulatorReducer from "./simulatorSlice";
import singleModeSlice from "./singleModeSlice";

export default configureStore({
  reducer: {
    //add slices to the root reducer fro app access
    simulator: simulatorReducer,
    singleMode: singleModeSlice,
  },
});
