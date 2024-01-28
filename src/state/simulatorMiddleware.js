import { createListenerMiddleware } from "@reduxjs/toolkit";

import { runSimulator, createRides } from "./simulatorSlice";

export const simulatorListener = createListenerMiddleware();

// #1 listener
simulatorListener.startListening({
  actionCreator: runSimulator,
  effect: async (action, listenerAPI) => {
    // control logic goes here

    // show simulator start/end message
    action.payload
      ? console.log("simulator started #2")
      : console.log("simulator stopped #2");

    let { isRunning } = listenerAPI.getState().simulator;

    if (isRunning) {
      // loads Rides array in simulator slice
      listenerAPI.dispatch(createRides());
    }
  },
});

// #2 listener -
