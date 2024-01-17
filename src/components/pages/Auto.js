import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Box, Button, Grid } from "@mui/material";

import SimulatorDuration from "../simulator/SimulatorDuration";

import LiftOne from "../simulator/lifts/LiftOne.js";

import LiftTwo from "../simulator/lifts/LiftTwo.js";
import LiftThree from "../simulator/lifts/LiftThree.js";

import { createRides } from "../../state/simulatorSlice";

/*
TODO 

all state information can be fetched at page level and passed down to lifts 1 2 and 3 

create Auto mode structures
Implement a simulator that generates the time series of elevator calls to feed the function in part A.`
system specs 
'A maximum of 10 people can fit into the elevator car at any one time.',
'Except for the lobby, all other floors have a uniform distribution of number and frequency of calls.',
'The number of passengers per call is random according to a log-normal distribution, rounded to the nearest integer in the range (0, 5).',
'The random functions should be seeded so that the results of any run can be reproduced if the same seed is used.',



Tasks:

- create new redux slice just for the Simulator   
    -- waiting pool 

- control functions
    -- ClosestLift: determines which lift to call for newly generated ride

    -- CallLift: sets lift with newly generated ride stats
        ---> triggered when lift is idle  
    
    -- SimulatorSummary: calculates simulator stats from recently ended run 
        ---> 'The average time spent waiting for an elevator.',
        ---> 'The average time spent inside an elevator.',
        ---> 'The average total time spent per trip.',

    ** later functions for waiting pool behavior, add waiting pool stats to simulator summary **
        ---> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5

*/
const Auto = () => {
  const ridesArr = useSelector((state) => state.simulator.rides);
  const dispatch = useDispatch();

  // create load rides for simulator
  useEffect(() => {
    if (!ridesArr.length) {
      dispatch(createRides());
    }
  }, [ridesArr]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <div>{"Auto"}</div>
          <SimulatorDuration />
        </Grid>
        <Grid item xs={12} container direction={"row"} spacing={3}>
          <LiftOne />
          <LiftTwo />
          <LiftThree />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Auto;
