import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementDuration,
  runSimulator,
  resetDuration,
} from "../../state/simulatorSlice";
import { Button, Stack, Typography } from "@mui/material";

const SimulatorDuration = () => {
  const duration = useSelector((state) => state.simulator.duration);
  const isRunning = useSelector((state) => state.simulator.isRunning);
  const dispatch = useDispatch();

  console.log("isRunning", isRunning);

  const handleStart = (e) => {
    e.preventDefault();
    dispatch(runSimulator(true));
  };
  const handleEnd = (e) => {
    e.preventDefault();
    dispatch(runSimulator(false));
  };
  const handleRest = (e) => {
    e.preventDefault();
    dispatch(resetDuration());
  };

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        dispatch(incrementDuration(1));
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [dispatch, isRunning]);

  return (
    <Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => {
            handleStart(e);
          }}
        >
          {"Start"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={(e) => {
            handleEnd(e);
          }}
        >
          {"Stop"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={(e) => {
            handleRest(e);
          }}
        >
          {"Reset"}
        </Button>
      </Stack>
      <Typography>{duration}</Typography>
    </Stack>
  );
};

export default SimulatorDuration;
