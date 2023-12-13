import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Stack, Typography } from "@mui/material";

const stackStyles = () => {
  return {
    border: "solid 2px grey",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  };
};

const TripLog = () => {
  const tripArr = useSelector((state) => state.display.trips);
  return (
    <Stack sx={stackStyles} padding={3} spacing={1} alignItems={"center"}>
      <Typography variant="h4">Trip Log</Typography>
      {tripArr.map((trip, index) => (
        <Typography key={index}>{`Trip #${(index += 1)} Start-${
          trip.currentFloor
        }, End-${trip.endFloor} Time-`}</Typography>
      ))}
    </Stack>
  );
};

export default TripLog;
