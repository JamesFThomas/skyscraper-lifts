import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";
import DirectionPanel from "../liftParts/DirectionPanel";

const LiftOne = () => {
  const L1CurrentFloor = useSelector(
    (state) => state.everyLift.lift1.currentFloor
  );
  const L1Phase = useSelector((state) => state.everyLift.lift1.phase);
  const L1Direction = useSelector((state) => state.everyLift.lift1.direction);
  const L1TripsArray = useSelector((state) => state.everyLift.lift1.trips);

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
      <TripsDisplay title={"Lift 1 Trips"} trips={L1TripsArray} />
      <Stack direction={"column"} alignItems={"center"}>
        <DirectionPanel direction={L1Direction} currentFloor={L1CurrentFloor} />
        <ElevatorDoors phase={L1Phase} currentFloor={L1CurrentFloor} />
      </Stack>
    </Grid>
  );
};

export default LiftOne;
