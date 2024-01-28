import { Box, Grid } from "@mui/material";

import SimulatorDuration from "../simulator/SimulatorDuration";

import LiftOne from "../simulator/lifts/LiftOne.js";

import LiftTwo from "../simulator/lifts/LiftTwo.js";
import LiftThree from "../simulator/lifts/LiftThree.js";

/*
TODO 

Remaining Tasks:
-> waiting pool 
  --> waiting pool is for when ride stats can have more riders than 10 at a floor for now riders will be <= 5
    ** once functions for waiting behavior implemented, add waiting pool stats to simulator summary **
    ** for wait time => trips should track if they were TAXING or ENROUTE , and number of passengers **

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
