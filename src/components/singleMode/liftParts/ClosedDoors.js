import React from 'react';
import { Box } from '@mui/material';

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

const ClosedDoors = () => {
  return (
    <Box data-testid="closed-doors" direction={'row'} sx={frameStyle}>
      <Box sx={closedDoorStyles}></Box>
    </Box>
  );
};

export default ClosedDoors;
