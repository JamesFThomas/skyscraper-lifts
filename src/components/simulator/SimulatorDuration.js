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

  // timer control functions
  const handleStart = (e) => {
    e.preventDefault();
    dispatch(runSimulator(true));
  };
  const handleStop = (e) => {
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
  }, [dispatch, isRunning, duration]);

  // duration time transmutations - not working ?????
  const hours = Math.floor(duration / 360000);
  const minutes = Math.floor((duration % 360000) / 6000);
  const seconds = Math.floor((duration % 6000) / 100);
  console.log(hours, minutes, seconds);

  return (
    <Stack direction="row" width={"100%"} justifyContent={"space-between"}>
      <Stack direction="row" spacing={2}>
        {isRunning ? (
          <Button
            variant="outlined"
            color="secondary"
            onClick={(e) => {
              handleStop(e);
            }}
          >
            {"Stop"}
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => {
              handleStart(e);
            }}
          >
            {"Start"}
          </Button>
        )}

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
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {duration}
      </Typography>
    </Stack>
  );
};

export default SimulatorDuration;
