import React from 'react';
import { Stack, Typography } from '@mui/material';

const stackStyles = () => {
  return {
    border: 'solid 2px grey',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
  };
};
const titleStyles = () => {
  return {
    textDecoration: 'underline',
  };
};

const TripsDisplay = (props) => {
  const { trips, title } = props;

  return (
    <Stack
      data-testid="tripDisplayContainer"
      sx={stackStyles}
      padding={3}
      spacing={1}
      alignItems={'center'}
    >
      <Typography data-testid="tripDisplayTitle" variant="h4" sx={titleStyles}>
        {title}
      </Typography>
      {trips &&
        trips.map(({ start, end, duration }, index) => (
          <Stack
            data-testid={`tripDisplay-${index}`}
            key={index}
            direction={'row'}
          >
            <Typography>{`T#${(index += 1)}, S:${
              start === 0 ? 'L' : start
            },`}</Typography>
            <Typography>{` E:${end !== 0 ? end : 'L'},`}</Typography>
            <Typography>{` L:${duration}`}</Typography>
          </Stack>
        ))}
    </Stack>
  );
};

export default TripsDisplay;
