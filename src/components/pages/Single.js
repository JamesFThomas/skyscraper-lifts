import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CallPanel from "../lift/CallPanel";
import FloorPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";
import LiftDoors from "../lift/LiftDoors";
import TripLog from "../layout/TripLog";

import { Grid, Box, Typography } from "@mui/material";

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
  //import useSelector and track state for rendering
  const IDLE = useSelector((state) => state.display.IDLE);
  const SELECT = useSelector((state) => state.display.SELECT);
  const MOVING = useSelector((state) => state.display.MOVING);

  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
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
              <LiftDoors />
              <CallPanel />
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
