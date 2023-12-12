import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/callPanel.css";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Circle, CircleOutlined } from "@mui/icons-material";

const circleStyles = () => {
  return {
    fontSize: "40px",
    color: "grey",
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
