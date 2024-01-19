import { Box, Button, Grid, Stack } from "@mui/material";

import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";
import DirectionPanel from "../liftParts/DirectionPanel";

const LiftTwo = () => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        gap: 1,
      }}
    >
      <TripsDisplay title={"Lift 2 Trips"} trips={[]} />
      <Stack direction={"column"} alignItems={"center"}>
        <DirectionPanel direction={"UP"} currentFloor={4} />
        <ElevatorDoors phase={"IDLE"} currentFloor={0} />
      </Stack>
    </Grid>
  );
};

export default LiftTwo;
