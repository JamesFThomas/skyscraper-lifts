import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";
import DirectionPanel from "../liftParts/DirectionPanel";

const LiftTwo = () => {
  const L2CurrentFloor = useSelector(
    (state) => state.everyLift.lift2.currentFloor
  );
  const L2Phase = useSelector((state) => state.everyLift.lift2.phase);
  const L2Direction = useSelector((state) => state.everyLift.lift2.direction);
  const L2TripsArray = useSelector((state) => state.everyLift.lift2.trips);
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
      <TripsDisplay title={"Lift 2 Trips"} trips={L2TripsArray} />
      <Stack direction={"column"} alignItems={"center"}>
        <DirectionPanel direction={L2Direction} currentFloor={L2CurrentFloor} />
        <ElevatorDoors phase={L2Phase} currentFloor={L2CurrentFloor} />
      </Stack>
    </Grid>
  );
};

export default LiftTwo;
