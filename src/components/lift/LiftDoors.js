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
      "0%": {
        width: "0%",
      },
      "10%": {
        width: "20%",
      },
      "15%": {
        width: "40%",
      },
      "25%": {
        width: "60%",
      },
      "35%": {
        width: "80%",
      },
      "45%": {
        width: "100%",
      },
      "55%": {
        width: "80%",
      },
      "65%": {
        width: "60%",
      },
      "75%": {
        width: "40%",
      },
      "85%": {
        width: "20%",
      },
      "100%": {
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
