import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";

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
const doorStyle = () => {
  return {
    width: "50%",
    height: "100%",
    display: "inline",
    border: "solid 2px grey",
  };
};

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
    zIndex: 25,
    backgroundColor: "black",
    borderLeft: "solid 1px grey",
    borderRight: "solid 1px grey",
    animation: "expandContract 5s linear infinite",
  };
};

const LiftDoors = () => {
  return (
    <>
      <Stack direction={"row"} sx={frameStyle}>
        {/* <Box sx={doorStyle}></Box> */}
        <Box sx={movingDoorStyles}></Box>
        {/* <Box sx={doorStyle}></Box> */}
      </Stack>
    </>
  );
};

export default LiftDoors;
