import { Stack, Box, Typography } from "@mui/material";

/*
  TODO get doors to show different displays based on phase value
*/

const ElevatorDoors = (props) => {
  const { phase } = props;
  const phases = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    UNLOADING: "UNLOADING",
    ENROUTE: "ENROUTE",
    TAXING: "TAXING",
  };

  const movingDoors = () => {
    // set up moving door animation
    return <Box>moving doors</Box>;
  };
  const staticDoors = () => {
    //set up static door display
    <Box>closed doors</Box>;
  };

  return (
    <Box>
      {(phase === phases.IDLE) |
        (phase === phases.ENROUTE) |
        (phase === phases.TAXING) && <>static</>}
      {(phase === phases.LOADING) | (phase === phases.UNLOADING) && <>moving</>}
    </Box>
  );
};

export default ElevatorDoors;
