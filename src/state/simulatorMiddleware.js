import { createListenerMiddleware } from "@reduxjs/toolkit";

import { runSimulator, createRides, randomCall } from "./simulatorSlice";

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
