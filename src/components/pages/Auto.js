import { Box, Grid } from "@mui/material";
import {
  useSelector,
  // useDispatch
} from "react-redux";

import SimulatorDuration from "../simulator/SimulatorDuration";
import LiftOne from "../simulator/lifts/LiftOne.js";
import LiftTwo from "../simulator/lifts/LiftTwo.js";
import LiftThree from "../simulator/lifts/LiftThree.js";
import SimulatorSummary from "../simulator/SimulatorSummary.js";
// import { useEffect } from "react";
// import {
//   runSimulator,
//   resetDuration,
//   showSummary,
// } from "../../state/simulatorSlice.js";

const Auto = () => {
  const showSessionSummary = useSelector(
    (state) => state.simulator.showSummary
  );

  //TODO create function to showSummary when simulator finished but left running
  // const ridesArray = useSelector((state) => state.simulator.rides);
  // const isRunning = useSelector((state) => state.simulator.isRunning);
  // const L1 = useSelector((state) => state.everyLift.lift1.phase);
  // const L2 = useSelector((state) => state.everyLift.lift2.phase);
  // const L3 = useSelector((state) => state.everyLift.lift3.phase);
  // const dispatch = useDispatch();

  // const allIdle = L1 === "IDLE" && L2 === "IDLE" && L3 === "IDLE";
  // const allThere = L1 && L2 && L3;

  // const resetSimAndShowStats = () => {
  // if (allThere && isRunning) {
  //   if (!ridesArray.length && allIdle) {
  //   }
  // }
  // dispatch(resetDuration());
  // dispatch(runSimulator(false));
  // dispatch(showSummary(true));
  // };
  // resetSimAndShowStats();

  // useEffect(() => {
  //   if (allThere && isRunning) {
  //     if (!ridesArray.length && allIdle) {
  //       resetSimAndShowStats();
  //     }
  //   }
  // }, [allIdle, allThere, isRunning, resetSimAndShowStats, ridesArray.length]);

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
      </Grid>
    </Box>
  );
};

export default Auto;
