import { useSelector } from 'react-redux';
import { Grid, Stack } from '@mui/material';
import TripsDisplay from '../liftParts/TripsDisplay.js';
import ElevatorDoors from '../liftParts/ElevatorDoors.js';
import DirectionPanel from '../liftParts/DirectionPanel.js';

const LiftOne = () => {
  const {
    liftTitle: L1Title,
    currentFloor: L1CurrentFloor,
    phase: L1Phase,
    direction: L1Direction,
    trips: L1TripsArray,
  } = useSelector((state) => state.everyLift.lift1);

  const currentTrip = L1TripsArray[L1TripsArray.length - 1];

  return (
    <Grid
      data-testid="liftOneContainer"
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
      <TripsDisplay title={`${L1Title} Trips`} trips={L1TripsArray} />
      <Stack direction={'column'} alignItems={'center'}>
        <DirectionPanel direction={L1Direction} currentFloor={L1CurrentFloor} />
        <ElevatorDoors
          phase={L1Phase}
          currentFloor={L1CurrentFloor}
          liftTitle={L1Title}
          currentTrip={currentTrip}
        />
      </Stack>
    </Grid>
  );
};

export default LiftOne;
