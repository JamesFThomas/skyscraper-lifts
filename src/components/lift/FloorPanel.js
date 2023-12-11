import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { trackTrip, moveLift, showUp, showDown } from "../redux/displaySlice";

import { Box, Button } from "@mui/material";

const panelStyles = () => {
  return {
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "50%",
    outline: "solid 1px grey",
  };
};
const buttonStyles = () => {
  return {
    flex: "1 1 20%",
    margin: "0.25em",
    maxWidth: "2.5em",
  };
};

const FloorsPanel = () => {
  const dispatch = useDispatch();
  const currentFloor = useSelector((state) => state.display.currentFloor);
  const floors = [...Array(100).keys()].filter((floor) => {
    return floor !== currentFloor;
  });

  const setMovingDirection = (end, current) => {
    return end < current ? dispatch(showDown(true)) : dispatch(showUp(true));
  };

  const handleClick = (e) => {
    const endFloor = e.target.value;
    const newTrip = [currentFloor, endFloor];

    // track the trip
    console.log(newTrip);
    dispatch(trackTrip(newTrip));
    setMovingDirection(endFloor, currentFloor);

    // move the lift
    dispatch(moveLift(currentFloor, endFloor));
  };

  return (
    <Box sx={panelStyles}>
      {floors.map((floor, i) => (
        <Button
          key={`${floor}-${i}`}
          value={floor}
          variant="outlined"
          size="small"
          sx={buttonStyles}
          onClick={(e) => handleClick(e)}
        >
          {floor}
        </Button>
      ))}
    </Box>
  );
};

export default FloorsPanel;
