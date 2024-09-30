import { Grid, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import TripsDisplay from '../liftParts/TripsDisplay.js';
import ElevatorDoors from '../liftParts/ElevatorDoors.js';
import DirectionPanel from '../liftParts/DirectionPanel.js';

const LiftThree = () => {
  const {
    liftTitle: L3LiftTitle,
    currentFloor: L3CurrentFloor,
    phase: L3Phase,
    direction: L3Direction,
    trips: L3TripsArray,
  } = useSelector((state) => state.everyLift.lift3);

  const currentTrip = L3TripsArray[L3TripsArray.length - 1];
  return (
    <Grid
      data-testid="liftThreeContainer"
      item
      xs={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <TripsDisplay title={`${L3LiftTitle} Trips`} trips={L3TripsArray} />
      <Stack direction={'column'} alignItems={'center'}>
        <DirectionPanel direction={L3Direction} currentFloor={L3CurrentFloor} />
        <ElevatorDoors
          phase={L3Phase}
          currentFloor={L3CurrentFloor}
          liftTitle={L3LiftTitle}
          currentTrip={currentTrip}
        />
      </Stack>
    </Grid>
  );
};

export default LiftThree;
