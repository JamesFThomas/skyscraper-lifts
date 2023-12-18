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

  const calcTripTime = (current, end) => {
    const movingTime = end < current ? current - end : end - current;
    const doorTime = current === 0 ? 5 : 3;
    const totalTime = movingTime + doorTime;
    return totalTime > 60
      ? `${Math.floor(totalTime / 60)}:${
          totalTime - Math.floor(totalTime / 60) * 60
        } min`
      : `${totalTime} secs`;
  };

  const handleClick = (e) => {
    const endFloor = e.target.value;
    const tripTime = calcTripTime(currentFloor, endFloor);
    const newTrip = { currentFloor, endFloor, tripTime };

    setMovingDirection(endFloor, currentFloor);
    dispatch(trackTrip(newTrip));
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
