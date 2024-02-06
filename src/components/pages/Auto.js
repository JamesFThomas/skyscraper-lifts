import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import SimulatorDuration from "../simulator/SimulatorDuration";
import LiftOne from "../simulator/lifts/LiftOne.js";
import LiftTwo from "../simulator/lifts/LiftTwo.js";
import LiftThree from "../simulator/lifts/LiftThree.js";
import SimulatorSummary from "../simulator/SimulatorSummary.js";

const Auto = () => {
  const showSessionSummary = useSelector(
    (state) => state.simulator.showSummary
  );

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
        {!showSessionSummary && (
          <>
            <Grid item xs={12}>
              <SimulatorDuration />
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction={"row"}
              justifyContent={"space-evenly"}
            >
              <LiftOne />
              <LiftTwo />
              <LiftThree />
            </Grid>
          </>
        )}
        {showSessionSummary && <SimulatorSummary />}
        {/* <SimulatorSummary /> */}
      </Grid>
    </Box>
  );
};

export default Auto;
