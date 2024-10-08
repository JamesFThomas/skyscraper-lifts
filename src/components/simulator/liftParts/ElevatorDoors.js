import { Stack, Box, Typography } from '@mui/material';

const centeredTextStyles = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };
};

const frameStyle = () => {
  return {
    margin: '1em',
    display: 'flex',
    flexDirection: 'row',
    height: '20em',
    width: '20em',
    justifyContent: 'center',
    border: 'solid 2px grey',
  };
};

const closedDoorStyles = () => {
  return {
    width: '0%',
    borderLeft: 'solid 1px grey',
    borderRight: 'solid 1px grey',
  };
};

const ElevatorDoors = ({ phase, currentFloor, liftTitle, currentTrip }) => {
  const phases = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    UNLOADING: 'UNLOADING',
    ENROUTE: 'ENROUTE',
    TAXING: 'TAXING',
  };

  const movingDoorStyles = () => {
    return {
      '@keyframes expandContract': {
        from: {
          width: '0%',
        },
        '15%': {
          width: '100%',
        },
        '85%': {
          width: '100%',
        },
        to: {
          width: '0%',
        },
      },
      backgroundColor: 'black',
      borderLeft: 'solid 1px grey',
      borderRight: 'solid 1px grey',
      animation: `expandContract ${currentFloor === 0 ? 30 : 5}s linear`,
    };
  };

  const showStaticDoors =
    phase === phases.IDLE ||
    phase === phases.ENROUTE ||
    phase === phases.TAXING;

  const showMovingDoors =
    phase === phases.LOADING || phase === phases.UNLOADING;

  const showEnrouteStats = phase === phases.ENROUTE;
  const showTaxingStats = phase === phases.TAXING;

  const greeting = () => {
    return (
      <Typography data-testid="elevatorDoors-greeting" sx={centeredTextStyles}>
        {phase === phases.LOADING
          ? `Welcome to ${liftTitle}`
          : `Goodbye from ${liftTitle}`}
      </Typography>
    );
  };

  //TODO create function to calculate time from duration integer
  const enrouteStats = () => {
    return currentTrip ? (
      <Stack data-testid="enrouteStats-container">
        <Typography>{`ENROUTE`}</Typography>
        <Typography>{`To floor: ${currentTrip.end}`}</Typography>
        <Typography>{`Wait time: ${currentTrip.duration} seconds `}</Typography>
      </Stack>
    ) : (
      <></>
    );
  };

  //TODO figure out way to update current trip information between phases
  const taxingStats = () => {
    return currentTrip ? (
      <Stack data-testid="taxingStats-container">
        <Typography>{`TAXING`}</Typography>
        <Typography>{`To floor: ${currentTrip.end}`}</Typography>
        <Typography>{`Number of passengers: ${currentTrip.passengers}`}</Typography>
      </Stack>
    ) : (
      <></>
    );
  };

  const movingDoors = () => {
    return (
      <Stack
        data-testid="movingDoors-container"
        justifyContent={'center'}
        direction={'column'}
      >
        <Box direction={'row'} sx={frameStyle}>
          <Box sx={movingDoorStyles} />
        </Box>
        {greeting()}
      </Stack>
    );
  };

  const staticDoors = () => {
    return (
      <>
        <Box
          data-testid="staticDoors-container"
          direction={'row'}
          sx={frameStyle}
        >
          <Box sx={closedDoorStyles} />
        </Box>
        {showEnrouteStats && enrouteStats()}
        {showTaxingStats && taxingStats()}
      </>
    );
  };

  return (
    <Box data-testid="elevatorDoors-container">
      {showStaticDoors && staticDoors()}
      {showMovingDoors && movingDoors()}
    </Box>
  );
};

export default ElevatorDoors;
