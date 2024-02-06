import { Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { showSummary } from "../../state/simulatorSlice";
import { resetTrips } from "../../state/everyLiftSlice";

const SimulatorSummary = () => {
  const L1ridesArr = useSelector((state) => state.everyLift.lift1.trips);
  const L2ridesArr = useSelector((state) => state.everyLift.lift2.trips);
  const L3ridesArr = useSelector((state) => state.everyLift.lift3.trips);

  //TODO turn into state variables
  const totalTimes = {
    enroute: 0,
    taxing: 0,
    total: 0,
  };
  let eRides = 0;
  let tRides = 0;
  const allRides = [...L1ridesArr, ...L2ridesArr, ...L3ridesArr];
  const TotalAvgWait = totalTimes.enroute / eRides;
  const TotalAvgInLift = totalTimes.taxing / tRides;
  const TotalAvgDuration = totalTimes.total / allRides.length;
  const dispatch = useDispatch();

  // TODO place in useEffect
  allRides.forEach((ride) => {
    if (ride.passengers === 0) {
      totalTimes.enroute += ride.duration;
      eRides += 1;
    }
    if (ride.passengers > 0) {
      totalTimes.taxing += ride.duration;
      tRides += 1;
    } else {
      totalTimes.total += ride.duration;
    }
  });

  const handleClick = () => {
    dispatch(showSummary(false));
    dispatch(resetTrips());
  };

  return (
    <Stack spacing={3}>
      <Typography>{`Average Wait Time: ${TotalAvgWait.toFixed(
        2
      )} seconds`}</Typography>
      <Typography>{`Average Time in Lift: ${TotalAvgInLift.toFixed(
        2
      )} seconds`}</Typography>
      <Typography>
        {`Average duration of all rides: ${TotalAvgDuration.toFixed(
          2
        )} seconds`}
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        {" "}
        Clear Stats
      </Button>
    </Stack>
  );
};

export default SimulatorSummary;
