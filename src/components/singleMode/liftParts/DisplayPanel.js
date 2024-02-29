import { useSelector } from "react-redux";

import { Box, Stack, Typography } from "@mui/material";
import { Forward, ForwardOutlined } from "@mui/icons-material";

const stackStyles = () => {
  return {
    border: "2px solid grey",
    width: "fit-content",
  };
};

const textStyles = () => {
  return {
    border: "2px solid grey",
    fontSize: 32,
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
  const dUp = useSelector((state) => state.singleMode.dUp);
  const dDown = useSelector((state) => state.singleMode.dDown);
  const currentFloor = useSelector((state) => state.singleMode.currentFloor);

  return (
    <Stack
      data-testid="displayPanelContainer"
      padding={2}
      spacing={2}
      sx={stackStyles}
    >
      <Box sx={iconBoxStyles}>
        {dUp ? (
          <Forward sx={upIconStyles} />
        ) : (
          <ForwardOutlined sx={upIconStyles} />
        )}
      </Box>
      <Typography sx={textStyles}>{currentFloor}</Typography>
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
