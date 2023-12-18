import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";

const frameStyle = () => {
  return {
    margin: "1em",
    display: "flex",
    height: "20em",
    width: "20em",
    justifyContent: "center",
    border: "solid 2px grey",
  };
};
const closedDoorStyles = () => {
  return {
    width: "0%",
    borderLeft: "solid 1px grey",
    borderRight: "solid 1px grey",
  };
};

const LiftDoors = () => {
  const LOADING = useSelector((state) => state.display.LOADING);
  const currentFloor = useSelector((state) => state.display.currentFloor);

  const movingDoorStyles = () => {
    return {
      "@keyframes expandContract": {
        from: {
          width: "0%",
        },
        "50%": {
          width: "100%",
        },
        to: {
          width: "0%",
        },
      },
      backgroundColor: "black",
      borderLeft: "solid 1px grey",
      borderRight: "solid 1px grey",
      animation: `expandContract ${currentFloor === 0 ? 5 : 3}s linear`,
    };
  };

  return (
    <>
      <Stack direction={"row"} sx={frameStyle}>
        <Box sx={LOADING ? movingDoorStyles : closedDoorStyles}></Box>
      </Stack>
    </>
  );
};

export default LiftDoors;
