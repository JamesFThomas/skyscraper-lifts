import { Box, Button, Grid } from "@mui/material";

import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";

const LiftTwo = () => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      Lift 2
      <TripsDisplay title={"Lift 2 Trips"} trips={[]} />
      <ElevatorDoors phase={"IDLE"} currentFloor={0} />
    </Grid>
  );
};

export default LiftTwo;
