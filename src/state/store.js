import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

// import different Slices into the store
// import different actions from slices for listeners to run off of.
import simulatorReducer, { runSimulator, createRides } from "./simulatorSlice";
import singleModeSlice from "./singleModeSlice";
import everyLiftSlice from "./everyLiftSlice";

/* 
  TODO complete control middleware functions 
- control functions
-- ClosestLift: determines which lift to call for newly generated ride

-- CallLift: sets lift with newly generated ride stats
---> triggered when lift is idle  

-- SimulatorSummary: calculates simulator stats from recently ended run 
---> 'The average time spent waiting for an elevator.',
---> 'The average time spent inside an elevator.',
---> 'The average total time spent per trip.',
*/

//********************************************* Middleware  ********************************* */

const simulatorListener = createListenerMiddleware();

simulatorListener.startListening({
  actionCreator: runSimulator,
  effect: async (action, listenerAPI) => {
    // control logic goes here

    // show simulator start/end message
    action.payload
      ? console.log("simulator started ")
      : console.log("simulator stopped ");

    let { isRunning } = listenerAPI.getState().simulator;

    if (isRunning) {
      // loads Rides array in simulator slice
      listenerAPI.dispatch(createRides());
    }
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
    getDefaultMiddleware().prepend(simulatorListener.middleware),
});
