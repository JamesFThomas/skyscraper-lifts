import Container from "react-bootstrap/Container";

import { useSelector, useDispatch } from "react-redux";

import SimulatorDuration from "../simulator/SimulatorDuration";

import {
  setDirection,
  setPhase,
  trackTrip,
  setCurrentFloor,
} from "../../state/everyLiftSlice.js";
import { Button } from "@mui/material";
/*
TODO 

create Auto mode structures
Implement a simulator that generates the time series of elevator calls to feed the function in part A.`
system specs 
'A maximum of 10 people can fit into the elevator car at any one time.',
'Except for the lobby, all other floors have a uniform distribution of number and frequency of calls.',
'The number of passengers per call is random according to a log-normal distribution, rounded to the nearest integer in the range (0, 5).',
'The random functions should be seeded so that the results of any run can be reproduced if the same seed is used.',


After the simulator runs, it should produce summary statistics.`,
    'Create statistical summary of the system session that includes:',
    'The average time spent waiting for an elevator.',
    'The average time spent inside an elevator.',
    'The average total time spent per trip.',


Tasks:
- create the Simulator page layout 
    -- 3 elevator cars like in single mode 

- create new redux slice just for the Simulator 
    -- lift states: IDLE, MOVING, LOADING, EXITING,  
    -- waiting pool 

- create a Simulator duration display or countdown component 

- create Simulator summary component 

- control functions
        
    -- StartSimulator: starts the auto mode simulator 

    -- StopSimulator: after set duration stops the auto mode simulator 

    -- newRideStats: creates random ride numbers
        ---> start floor, end floor ,number of riders
    
    -- ClosestLift: determines which lift to call for newly generated ride

    -- CallLift: sets lift with newly generated ride stats
        ---> triggered when lift is idle  
    
    -- SimulatorDuration: tracks how long auto mode has been working 

    -- SimulatorSummary: calculates simulator stats from recently ended run 
        ---> 'The average time spent waiting for an elevator.',
        ---> 'The average time spent inside an elevator.',
        ---> 'The average total time spent per trip.',

    ** later functions for waiting pool behavior, add waiting pool stats to simulator summary **
        ---> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5

*/
const Auto = () => {
  const dispatch = useDispatch();

  const currentState = useSelector((state) => state.everyLift);

  console.log("currentState", currentState);

  const test = () => {
    dispatch(setDirection({ lift: "lift3", direction: "second test working" }));
  };
  const test1 = () => {
    dispatch(setPhase({ lift: "lift1", direction: "ENROUTE" }));
  };
  const test2 = () => {
    dispatch(setCurrentFloor({ lift: "lift2", direction: -1 }));
  };
  const test3 = () => {
    dispatch(
      trackTrip({ lift: "lift3", trip: { start: 23, end: 66, duration: 44 } })
    );
  };

  const testAll = () => {
    test();
    test1();
    test2();
    test3();
  };

  return (
    <div className="page">
      <Container>
        <div>{"Auto"}</div>
        <SimulatorDuration />
        <Button onClick={testAll}>Click</Button>
      </Container>
    </div>
  );
};

export default Auto;
