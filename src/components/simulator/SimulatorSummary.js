import { useState, useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { showSummary } from "../../state/simulatorSlice";
import { resetTrips } from "../../state/everyLiftSlice";

const SimulatorSummary = () => {
  const L1ridesArr = useSelector((state) => state.everyLift.lift1.trips);
  const L2ridesArr = useSelector((state) => state.everyLift.lift2.trips);
  const L3ridesArr = useSelector((state) => state.everyLift.lift3.trips);

  const dispatch = useDispatch();

  //TODO turn into state variables
  const [allElevatorRides] = useState([
    ...L1ridesArr,
    ...L2ridesArr,
    ...L3ridesArr,
  ]);

  const [rideTimes, setRideTimes] = useState({
    enroute: 0,
    taxing: 0,
    total: 0,
  });

  const [enrouteRides, setEnrouteRides] = useState(0);
  const [taxingRides, setTaxingRides] = useState(0);
  const [totalAvgWait, setTotalAvgWait] = useState();
  const [totalAvgInLift, setTotalAvgInLift] = useState();
  const [totalAvgDuration, setTotalAvgDuration] = useState();

  const totalTimes = {
    enroute: 0,
    taxing: 0,
    total: 0,
  };

  useEffect(() => {
    if (allElevatorRides.length > 0)
      allElevatorRides.forEach((ride) => {
        if (ride.passengers === 0) {
          setRideTimes((state) => {
            return { ...state, enroute: (state.enroute += ride.duration) };
          });
          setEnrouteRides((prev) => (prev += 1));
        }
        if (ride.passengers > 0) {
          setRideTimes((state) => {
            return { ...state, taxing: (state.taxing += ride.duration) };
          });
          setTaxingRides((prev) => (prev += 1));
        } else {
          totalTimes.total += ride.duration;
          setRideTimes((state) => {
            return { ...state, total: (state.total += ride.duration) };
          });
        }
      });
    setTotalAvgWait(Math.round((rideTimes.enroute / enrouteRides) * 100) / 100);
    setTotalAvgInLift(Math.round((rideTimes.taxing / taxingRides) * 100) / 100);
    setTotalAvgDuration(
      Math.round((rideTimes.total / (enrouteRides + taxingRides)) * 100) / 100
    );
  });

  const handleClick = () => {
    dispatch(showSummary(false));
    dispatch(resetTrips());
  };

  return (
    <Stack data-testid="summaryDisplayContainer" spacing={3}>
      <Typography>{`Average Wait Time: ${totalAvgWait} seconds`}</Typography>
      <Typography>{`Average Time in Lift: ${totalAvgInLift} seconds`}</Typography>
      <Typography>
        {`Average duration of all rides: ${totalAvgDuration} seconds`}
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        {" "}
        Clear Stats
      </Button>
    </Stack>
  );
};

export default SimulatorSummary;
