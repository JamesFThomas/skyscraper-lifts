import { Box, Button, Grid } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";

const LiftThree = () => {
  return (
    <Grid item xs={4} textAlign={"center"}>
      Lift 3
      <TripsDisplay />
    </Grid>
  );
};

export default LiftThree;