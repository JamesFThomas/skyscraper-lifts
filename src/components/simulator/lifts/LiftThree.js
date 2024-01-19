import { Box, Button, Grid } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";

const LiftThree = () => {
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
      Lift 3
      <TripsDisplay title={"Lift 3 Trips"} trips={[]} />
      <ElevatorDoors phase={"IDLE"} currentFloor={0} />
    </Grid>
  );
};

export default LiftThree;
