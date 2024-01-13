import { Box, Button, Grid, Typography } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";

const LiftOne = () => {
  return (
    <Grid item xs={4} textAlign={"center"}>
      <Typography>Lift 1</Typography>
      <TripsDisplay />
    </Grid>
  );
};

export default LiftOne;
