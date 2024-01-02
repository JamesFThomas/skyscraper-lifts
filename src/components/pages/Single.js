import React from "react";
import { useSelector } from "react-redux";

import CallPanel from "../lift/CallPanel";
import FloorPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";
import LoadingDoors from "../lift/LoadingDoors";
import TripLog from "../layout/TripLog";

import { Grid, Box, Stack } from "@mui/material";
import ClosedDoors from "../lift/ClosedDoors";

const centeredItemRowStyles = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
};
const centeredItemColStyles = () => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
        ...centeredItemRowStyles(),
      }}
    >
      <Grid container maxWidth={"md"} spacing={2}>
        <Grid item xs={4}>
          <TripLog />
        </Grid>
        <Grid item xs={8}>
          {MOVING && (
            <Stack sx={centeredItemColStyles}>
              <DisplayPanel />
              <ClosedDoors />
            </Stack>
          )}
          {IDLE && (
            <Box sx={spacedItemStyles}>
              <Box sx={centeredItemRowStyles}>
                <LoadingDoors />
              </Box>
              <Box sx={centeredItemRowStyles}>
                <CallPanel />
              </Box>
            </Box>
          )}
          {SELECT && (
            <Box sx={centeredItemRowStyles}>
              <FloorPanel />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Single;
