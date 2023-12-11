import React from "react";
import { useSelector } from "react-redux";

import { Box, Stack, Typography } from "@mui/material";
import { Forward, ForwardOutlined } from "@mui/icons-material";

const stackStyles = () => {
  return {
    border: "2px solid grey",
  };
};

const iconBoxStyles = () => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
};

const upIconStyles = () => {
  return {
    transform: "rotate(270deg)",
    fontSize: 30,
  };
};
const downIconStyles = () => {
  return {
    transform: "rotate(90deg)",
    fontSize: 30,
  };
};

const DisplayPanel = () => {
  const dUp = useSelector((state) => state.display.dUp);
  const dDown = useSelector((state) => state.display.dDown);
  const currentFloor = useSelector((state) => state.display.currentFloor);

  return (
    <Stack padding={2} spacing={2} sx={stackStyles}>
      <Box sx={iconBoxStyles}>
        {dUp ? (
          <Forward sx={upIconStyles} />
        ) : (
          <ForwardOutlined sx={upIconStyles} />
        )}
      </Box>
      <Typography
        sx={{
          border: "2px solid grey",
          fontSize: 32,
          padding: "16px",
        }}
      >
        {currentFloor}
      </Typography>
      <Box sx={iconBoxStyles}>
        {dDown ? (
          <Forward sx={downIconStyles} />
        ) : (
          <ForwardOutlined sx={downIconStyles} />
        )}
      </Box>
    </Stack>
  );
};

export default DisplayPanel;
