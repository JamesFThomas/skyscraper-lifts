import { useSelector } from "react-redux";
import { Grid, Stack } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay.js";
import ElevatorDoors from "../liftParts/ElevatorDoors.js";
import DirectionPanel from "../liftParts/DirectionPanel.js";

const LiftOne = () => {
  const L1CurrentFloor = useSelector(
    (state) => state.everyLift.lift1.currentFloor,
  );
  const L1Phase = useSelector((state) => state.everyLift.lift1.phase);
  const L1Direction = useSelector((state) => state.everyLift.lift1.direction);
  const L1TripsArray = useSelector((state) => state.everyLift.lift1.trips);
  const liftTitle = "Lift 1";
  const currentTrip = L1TripsArray[L1TripsArray.length - 1];

  return (
    <Grid
      data-testid="liftOneContainer"
      item
      xs={3}
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
        <ElevatorDoors
          phase={L1Phase}
          currentFloor={L1CurrentFloor}
          liftTitle={liftTitle}
          currentTrip={currentTrip}
        />
      </Stack>
    </Grid>
  );
};

export default LiftOne;
