import { Box, Button, Grid } from "@mui/material";

import TripsDisplay from "../liftParts/TripsDisplay";

const LiftTwo = () => {
  return (
    <Grid item xs={4} textAlign={"center"}>
      Lift 2
      <TripsDisplay />
    </Grid>
  );
};

export default LiftTwo;
