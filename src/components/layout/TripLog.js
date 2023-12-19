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
  console.log("tripArr", tripArr);
  return (
    <Stack sx={stackStyles} padding={3} spacing={1} alignItems={"center"}>
      <Typography variant="h4">Trip Log</Typography>
      {tripArr.map(({ currentFloor, endFloor, tripTime }, index) => (
        <Typography key={index}>{`T#${(index += 1)}, S:${
          currentFloor === 0 ? "L" : currentFloor
        }, E:${
          endFloor !== "0" ? endFloor : "L"
        } Time:${tripTime}`}</Typography>
      ))}
    </Stack>
  );
};

export default TripLog;
