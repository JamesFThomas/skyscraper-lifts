import { createListenerMiddleware } from "@reduxjs/toolkit";

import {
  runSimulator,
  createRides,
  randomCall,
  showSummary,
  resetDuration,
  removeRide,
} from "./simulatorSlice.js";

export const simulatorListener = createListenerMiddleware();

// #1 listener - uses actionCreator
simulatorListener.startListening({
  actionCreator: runSimulator,
  effect: async (action, listenerAPI) => {
    // control logic goes here

    // show simulator start/end message
    action.payload
      ? console.log("simulator started")
      : console.log("simulator stopped");

    let { isRunning } = listenerAPI.getState().simulator;

    if (isRunning) {
      // loads Rides array in simulator slice
      listenerAPI.dispatch(createRides());
    }
  },
});

// #2 listener - uses predicate
simulatorListener.startListening({
  // triggering action must be listed in arguments of predicate to work correctly
  predicate: (runSimulator, currentState, previousState) => {
    return (
      currentState.simulator.isRunning !== previousState.simulator.isRunning
    );
  },
  effect: async (action, listenerAPI) => {
    //starts simulated levator calls
    listenerAPI.dispatch(randomCall());
    // console.log("predicate hit", action.payload);
  },
});

//#3 listener to stop simulator when rides array.length === 0
// simulatorListener.startListening({
//   // triggering action must be listed in arguments of predicate to work correctly
//   actionCreator: removeRide,
//   effect: async (action, listenerAPI) => {
//     //showSummary because simulator has used all random calls
//     const { rides } = listenerAPI.getState().simulator;
//     // const { lift1, lift2, lift3 } = listenerAPI.getState().lifts;
//     // const { phase: phase1 } = lift1;
//     // const { phase: phase2 } = lift2;
//     // const { phase: phase3 } = lift3;

//     if (!rides.length) {
//       // loads Rides array in simulator slice
//       listenerAPI.dispatch(resetDuration());
//       listenerAPI.dispatch(runSimulator(false));
//       listenerAPI.dispatch(showSummary(true));
//     }
//     // console.log("3rd listener working");
//   },
// });
