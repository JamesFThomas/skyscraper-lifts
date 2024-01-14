import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import TripsDisplay from "../liftParts/TripsDisplay";
/*
  Fetch Data at page level so page components can be reusable 

*/

const LiftOne = () => {
  const L1TripsArray = useSelector((state) => state.everyLift.lift1.trips);

  console.log("L1TripsArray", L1TripsArray);
  return (
    <Grid item xs={4} textAlign={"center"}>
      <Typography>Lift 1</Typography>
      <TripsDisplay title={"Lift 1 Trips"} trips={L1TripsArray} />
    </Grid>
  );
};

export default LiftOne;
