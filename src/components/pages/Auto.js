import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Box, Button, Grid } from "@mui/material";

import SimulatorDuration from "../simulator/SimulatorDuration";

import LiftOne from "../simulator/lifts/LiftOne.js";

import LiftTwo from "../simulator/lifts/LiftTwo.js";
import LiftThree from "../simulator/lifts/LiftThree.js";

/*
TODO 

create Auto mode structures
Implement a simulator that generates the time series of elevator calls to feed the function in part A.`
system specs 
'A maximum of 10 people can fit into the elevator car at any one time.',
'Except for the lobby, all other floors have a uniform distribution of number and frequency of calls.',
'The number of passengers per call is random according to a log-normal distribution, rounded to the nearest integer in the range (0, 5).',
'The random functions should be seeded so that the results of any run can be reproduced if the same seed is used.',

Remaining Tasks:
- create new redux state value for Simulator   
    -- waiting pool 
    ---> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5

    ** once functions for waiting behavior implemented, add waiting pool stats to simulator summary **

*/
const Auto = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent={"center"} gap={5}>
        <Grid item xs={12}>
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
