import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Circle, CircleOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { enterLift } from "../redux/displaySlice";

// This blinking will be used again to show waiting lifting in auto mode
const circleStyles = () => {
  return {
    "@keyframes blink": {
      from: {
        color: "grey",
      },
      to: {
        color: "black",
      },
    },
    animation: "blink 1s ease infinite",
    fontSize: "40px",
  };
};

const circleOutlineStyles = () => {
  return {
    fontSize: "40px",
    color: "grey",
  };
};

const CallPanel = () => {
  const [wasClicked, setWasClicked] = useState(false);
  const dispatch = useDispatch();
  const currentFloor = useSelector((state) => state.display.currentFloor);
  const LOADING = useSelector((state) => state.display.LOADING);
  const EXITING = useSelector((state) => state.display.EXITING);

  //declared inside component to access LOADING state
  const boxStyles = () => {
    return {
      border: "2px solid grey",
      padding: "40px 20px",
      width: "fit-content",
      height: "fit-content",
      display: `${LOADING || EXITING ? "none" : ""}`,
    };
  };

  const handleClick = (e) => {
    e.preventDefault();
    setWasClicked(!wasClicked);
    dispatch(enterLift(currentFloor));
  };

  return (
    <Box sx={boxStyles}>
      {!wasClicked ? (
        <Button onClick={(e) => handleClick(e)}>
          <CircleOutlined sx={circleOutlineStyles} />
        </Button>
      ) : (
        <Button disabled onClick={(e) => handleClick(e)}>
          <Circle sx={circleStyles} />
        </Button>
      )}
    </Box>
  );
};

export default CallPanel;
