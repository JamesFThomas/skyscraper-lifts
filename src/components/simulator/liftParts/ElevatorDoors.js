import { Stack, Box, Typography } from "@mui/material";

const centeredTextStyles = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
};

const frameStyle = () => {
  return {
    margin: "1em",
    display: "flex",
    flexDirection: "row",
    height: "20em",
    width: "20em",
    justifyContent: "center",
    border: "solid 2px grey",
  };
};

const closedDoorStyles = () => {
  return {
    width: "0%",
    borderLeft: "solid 1px grey",
    borderRight: "solid 1px grey",
  };
};

const ElevatorDoors = (props) => {
  const { phase, currentFloor } = props;

  const phases = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    UNLOADING: "UNLOADING",
    ENROUTE: "ENROUTE",
    TAXING: "TAXING",
  };

  const movingDoorStyles = () => {
    return {
      "@keyframes expandContract": {
        from: {
          width: "0%",
        },
        "15%": {
          width: "100%",
        },
        "85%": {
          width: "100%",
        },
        to: {
          width: "0%",
        },
      },
      backgroundColor: "black",
      borderLeft: "solid 1px grey",
      borderRight: "solid 1px grey",
      animation: `expandContract ${currentFloor === 0 ? 30 : 5}s linear`,
    };
  };

  const showStaticDoors =
    phase === phases.IDLE ||
    phase === phases.ENROUTE ||
    phase === phases.TAXING;

  const showMovingDoors =
    phase === phases.LOADING || phase === phases.UNLOADING;

  const showEnrouteStats = phase.ENROUTE;

  const greeting = () => {
    return (
      <Typography sx={centeredTextStyles}>
        {phase === phases.LOADING ? "Welcome" : "Goodbye"}
      </Typography>
    );
  };

  const enrouteStats = () => {
    return (
      <Stack>
        <Typography>
          //TODO pass enrpute stats from parent as props This lift is headed to
          floor %% the wait wil be ##:## min
        </Typography>
      </Stack>
    );
  };

  const movingDoors = () => {
    return (
      <Stack justifyContent={"center"} direction={"column"}>
        <Box direction={"row"} sx={frameStyle}>
          <Box sx={movingDoorStyles} />
        </Box>
        {greeting()}
      </Stack>
    );
  };

  const staticDoors = () => {
    return (
      <Box direction={"row"} sx={frameStyle}>
        <Box sx={closedDoorStyles} />
        {showEnrouteStats && enrouteStats()}
      </Box>
    );
  };

  return (
    <Box>
      {showStaticDoors && staticDoors()}
      {showMovingDoors && movingDoors()}
    </Box>
  );
};

export default ElevatorDoors;
