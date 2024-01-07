import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { runSimulator } from "../../state/simulatorSlice";
import { Box, Button, Stack, Typography } from "@mui/material";

const SimulatorDuration = () => {
  const duration = useSelector((state) => state.simulator.duration);
  const isRunning = useSelector((state) => state.simulator.isRunning);
  const dispatch = useDispatch();

  console.log("isRunning", isRunning);

  const handStartClick = (e) => {
    e.preventDefault();
    dispatch(runSimulator(true));
  };

  const handEndClick = (e) => {
    e.preventDefault();
    dispatch(runSimulator(false));
  };

  return (
    <Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => {
            handStartClick(e);
          }}
        >
          {"Start"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={(e) => {
            handEndClick(e);
          }}
        >
          {"Stop"}
        </Button>
      </Stack>
      <Typography>{duration}</Typography>
    </Stack>
  );
};

export default SimulatorDuration;
