import { Box, Grid } from "@mui/material";

import SimulatorDuration from "../simulator/SimulatorDuration";

import LiftOne from "../simulator/lifts/LiftOne.js";

import LiftTwo from "../simulator/lifts/LiftTwo.js";
import LiftThree from "../simulator/lifts/LiftThree.js";

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
