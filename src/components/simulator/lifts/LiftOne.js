import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";

const LiftOne = () => {
  const L1CurrentFloor = useSelector(
    (state) => state.everyLift.lift1.currentFloor
  );
  const L1Phase = useSelector((state) => state.everyLift.lift1.phase);
  const L1Direction = useSelector((state) => state.everyLift.lift1.direction);
  const L1TripsArray = useSelector((state) => state.everyLift.lift1.trips);

  // console.log("L1CurrentFloor", L1CurrentFloor);
  // console.log("L1Phase", L1Phase);
  // console.log("L1Direction", L1Direction);
  // console.log("L1TripsArray", L1TripsArray);
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
      <Typography>Lift 1</Typography>
      <TripsDisplay title={"Lift 1 Trips"} trips={L1TripsArray} />
      <ElevatorDoors phase={L1Phase} currentFloor={L1CurrentFloor} />
    </Grid>
  );
};

export default LiftOne;
