import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";

const stackStyles = () => {
  return {
    border: "solid 2px grey",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  };
};

const TripsDisplay = () => {
  const tripArray = useSelector((state) => state.everyLift);
  //   const CheckState = useSelector((state) => state[mode]);
  //   console.log("component state", CheckState);
  return (
    <Stack sx={stackStyles} padding={3} spacing={1} alignItems={"center"}>
      <Typography variant="h4">Trip Log</Typography>
      {/* {tripArray.map(({ currentFloor, endFloor, tripTime }, index) => (
        <Typography key={index}>{`T#${(index += 1)}, S:${
          currentFloor === 0 ? "L" : currentFloor
        }, E:${
          endFloor !== "0" ? endFloor : "L"
        } Time:${tripTime}`}</Typography>
      ))} */}
    </Stack>
  );
};

export default TripsDisplay;
