import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

// import different Slices into the store
import simulatorReducer, { runSimulator } from "./simulatorSlice";
import singleModeSlice from "./singleModeSlice";
import everyLiftSlice from "./everyLiftSlice";

// import different actions from slices fro listeners to run off of.

//********************************************* Middleware  ********************************* */

const testListener = createListenerMiddleware();

testListener.startListening({
  actionCreator: runSimulator,
  effect: async (action, listenerAPI) => {
    // write out logic here
    console.log("simulator started what's in the payload", action.payload);
  },
});

//* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

export default configureStore({
  reducer: {
    //add slices to the root reducer fro app access
    simulator: simulatorReducer,
    singleMode: singleModeSlice,
    everyLift: everyLiftSlice,
  },
  // add middleware below
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(testListener.middleware),
});
