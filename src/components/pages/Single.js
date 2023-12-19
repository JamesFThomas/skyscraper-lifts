import React from "react";
import { useSelector } from "react-redux";

import CallPanel from "../lift/CallPanel";
import FloorPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";
import LiftDoors from "../lift/LiftDoors";
import TripLog from "../layout/TripLog";

import { Grid, Box } from "@mui/material";

const centeredItemStyles = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
};

const spacedItemStyles = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };
};

const Single = () => {
  const IDLE = useSelector((state) => state.display.IDLE);
  const SELECT = useSelector((state) => state.display.SELECT);
  const MOVING = useSelector((state) => state.display.MOVING);

  return (
    <Box
      sx={{
        paddingTop: "30px",
        alignItems: "center",
        ...centeredItemStyles(),
      }}
    >
      <Grid container maxWidth={"md"} spacing={2}>
        <Grid item xs={4}>
          <TripLog />
        </Grid>
        <Grid item xs={8}>
          {MOVING && (
            <Box sx={centeredItemStyles}>
              <DisplayPanel />
            </Box>
          )}
          {IDLE && (
            <Box sx={spacedItemStyles}>
              <Box sx={centeredItemStyles}>
                <LiftDoors />
              </Box>
              <Box sx={centeredItemStyles}>
                <CallPanel />
              </Box>
            </Box>
          )}
          {SELECT && (
            <Box sx={centeredItemStyles}>
              <FloorPanel />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Single;
