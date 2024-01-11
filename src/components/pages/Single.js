import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CallPanel from "../lift/CallPanel";
import FloorPanel from "../lift/FloorPanel";
import DisplayPanel from "../lift/DisplayPanel";
import LoadingDoors from "../lift/LoadingDoors";
import TripLog from "../layout/TripLog";

import KennyG from "../../assets/KennyG.mp3";
import { Grid, Box, Stack, Typography } from "@mui/material";
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
  const IDLE = useSelector((state) => state.singleMode.IDLE);
  const SELECT = useSelector((state) => state.singleMode.SELECT);
  const MOVING = useSelector((state) => state.singleMode.MOVING);
  const durations = useSelector((state) => state.singleMode.durations);
  const currentTripLength = durations[durations.length - 1];
  const [song, setSong] = useState(new Audio(KennyG));

  const playSong = () => {
    song.play();
  };

  const stopSong = () => {
    song.pause();
    song.currentTime = 0;
  };

  useEffect(() => {
    if (MOVING && currentTripLength > 30) {
      playSong();
    } else {
      stopSong();
    }
  }, [MOVING, currentTripLength, playSong, stopSong]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        alignItems: "center",
      }}
    >
      <Grid container maxWidth={"md"} spacing={2}>
        <Grid item xs={4}>
          <TripLog />
        </Grid>
        <Grid item xs={8} sx={{ height: "100%" }}>
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
      <Box sx={{ mt: "30px" }}>
        <Typography>
          Door takes 30 seconds in the Lobby, 5 seconds other floors.
        </Typography>
        <Typography>Music plays on rides longer than 30 seconds.</Typography>
      </Box>
    </Box>
  );
};

export default Single;
