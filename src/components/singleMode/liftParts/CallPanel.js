import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Circle, CircleOutlined } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { enterLift } from '../../../state/singleModeSlice.js';

// This blinking will be used again to show waiting lifting in auto mode
const circleStyles = () => {
  return {
    '@keyframes blink': {
      from: {
        color: 'grey',
      },
      to: {
        color: 'black',
      },
    },
    animation: 'blink 1s ease infinite',
    fontSize: '40px',
  };
};

const circleOutlineStyles = () => {
  return {
    fontSize: '40px',
    color: 'grey',
  };
};

const CallPanel = () => {
  const [wasClicked, setWasClicked] = useState(false);
  const dispatch = useDispatch();
  const currentFloor = useSelector((state) => state.singleMode.currentFloor);
  const LOADING = useSelector((state) => state.singleMode.LOADING);
  const EXITING = useSelector((state) => state.singleMode.EXITING);

  //declared inside component to access LOADING state
  const boxStyles = () => {
    return {
      border: '2px solid grey',
      padding: '30px 20px',
      width: 'fit-content',
      height: 'fit-content',
      display: `${LOADING || EXITING ? 'none' : ''}`,
    };
  };

  const handleClick = (e) => {
    e.preventDefault();
    setWasClicked(!wasClicked);
    dispatch(enterLift(currentFloor));
  };

  return (
    <Stack data-testid="call-panel" sx={boxStyles}>
      <Typography
        data-testid="callPanel-title"
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
      >
        Press
      </Typography>
      {!wasClicked ? (
        <Button data-testid="call-button" onClick={(e) => handleClick(e)}>
          <CircleOutlined sx={circleOutlineStyles} />
        </Button>
      ) : (
        <Button
          data-testid="wait-button"
          hidden
          disabled
          onClick={(e) => handleClick(e)}
        >
          <Circle sx={circleStyles} />
        </Button>
      )}
    </Stack>
  );
};

export default CallPanel;
