import { Grid, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import TripsDisplay from '../liftParts/TripsDisplay.js';
import ElevatorDoors from '../liftParts/ElevatorDoors.js';
import DirectionPanel from '../liftParts/DirectionPanel.js';

const LiftTwo = () => {
  const {
    liftTitle: L2LiftTitle,
    currentFloor: L2CurrentFloor,
    phase: L2Phase,
    direction: L2Direction,
    trips: L2TripsArray,
  } = useSelector((state) => state.everyLift.lift2);

  const currentTrip = L2TripsArray[L2TripsArray.length - 1];
  return (
    <Grid
      data-testid="liftTwoContainer"
      item
      xs={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 1,
      }}
    >
      <TripsDisplay title={`${L2LiftTitle} Trips`} trips={L2TripsArray} />
      <Stack direction={'column'} alignItems={'center'}>
        <DirectionPanel direction={L2Direction} currentFloor={L2CurrentFloor} />
        <ElevatorDoors
          phase={L2Phase}
          currentFloor={L2CurrentFloor}
          liftTitle={L2LiftTitle}
          currentTrip={currentTrip}
        />
      </Stack>
    </Grid>
  );
};

export default LiftTwo;
