import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";
import DirectionPanel from "../liftParts/DirectionPanel";

const LiftThree = () => {
  const L3CurrentFloor = useSelector(
    (state) => state.everyLift.lift3.currentFloor
  );
  const L3Phase = useSelector((state) => state.everyLift.lift3.phase);
  const L3Direction = useSelector((state) => state.everyLift.lift3.direction);
  const L3TripsArray = useSelector((state) => state.everyLift.lift3.trips);
  return (
    <Grid
      item
      xs={4}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <TripsDisplay title={"Lift 3 Trips"} trips={L3TripsArray} />
      <Stack direction={"column"} alignItems={"center"}>
        <DirectionPanel direction={L3Direction} currentFloor={L3CurrentFloor} />
        <ElevatorDoors phase={L3Phase} currentFloor={L3CurrentFloor} />
      </Stack>
    </Grid>
  );
};

export default LiftThree;
