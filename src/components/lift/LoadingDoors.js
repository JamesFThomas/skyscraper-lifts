import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";

const frameStyle = () => {
  return {
    margin: "1em",
    display: "flex",
    flexDirection: "row",
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

const centeredTextStyles = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
};

const LoadingDoors = () => {
  const LOADING = useSelector((state) => state.display.LOADING);
  const EXITING = useSelector((state) => state.display.EXITING);
  const currentFloor = useSelector((state) => state.display.currentFloor);

  const movingDoorStyles = () => {
    return {
      "@keyframes expandContract": {
        from: {
          width: "0%",
        },
        "15%": {
          width: "100%",
        },
        "85%": {
          width: "100%",
        },
        to: {
          width: "0%",
        },
      },
      backgroundColor: "black",
      borderLeft: "solid 1px grey",
      borderRight: "solid 1px grey",
      animation: `expandContract ${currentFloor === 0 ? 30 : 5}s linear`,
    };
  };

  return (
    <Stack>
      {!EXITING && !LOADING && (
        <Box sx={centeredTextStyles}>
          <Typography
            sx={{
              border: "solid 1px grey",
              width: "fit-content",
              padding: "10px",
              ...centeredTextStyles(),
            }}
          >
            {currentFloor > 0 ? currentFloor : "L"}
          </Typography>
        </Box>
      )}
      <Box Box direction={"row"} sx={frameStyle}>
        <Box
          sx={LOADING || EXITING ? movingDoorStyles : closedDoorStyles}
        ></Box>
      </Box>
      {LOADING && <Typography sx={centeredTextStyles}> Welcome! </Typography>}
      {EXITING && <Typography sx={centeredTextStyles}> Goodbye! </Typography>}
    </Stack>
  );
};

export default LoadingDoors;
