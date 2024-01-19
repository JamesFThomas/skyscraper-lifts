import { Box, Button, Grid, Stack } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";
import ElevatorDoors from "../liftParts/ElevatorDoors";
import DirectionPanel from "../liftParts/DirectionPanel";
<DirectionPanel direction={""} currentFloor={99} />;
const LiftThree = () => {
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
      <TripsDisplay title={"Lift 3 Trips"} trips={[]} />
      <Stack direction={"column"} alignItems={"center"}>
        <DirectionPanel direction={""} currentFloor={99} />
        <ElevatorDoors phase={"IDLE"} currentFloor={0} />
      </Stack>
    </Grid>
  );
};

export default LiftThree;
