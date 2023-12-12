import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Circle, CircleOutlined } from "@mui/icons-material";

const circleStyles = () => {
  return {
    "@keyframes blink": {
      "0%": {
        color: "grey",
      },
      "75%": {
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

const boxStyles = () => {
  return {
    border: "2px solid grey",
    padding: "40px 20px",
    width: "fit-content",
    height: "fit-content",
  };
};

const CallPanel = () => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setWasClicked(!wasClicked);
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
