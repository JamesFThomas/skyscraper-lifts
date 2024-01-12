import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTrip, moveLift } from "../../../state/singleModeSlice";

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
  const currentFloor = useSelector((state) => state.singleMode.currentFloor);
  const aFloors = ["L", ...Array(100).keys()];
  const index = aFloors.indexOf(0);
  aFloors.splice(index, 1);
  const floorChoices = aFloors.filter((floor) => {
    return floor.toString() !== currentFloor.toString();
  });

  const handleClick = (e) => {
    const endFloor = e.target.value;
    dispatch(calculateTrip(currentFloor, endFloor));
    dispatch(moveLift(currentFloor, endFloor));
  };

  return (
    <Box sx={panelStyles}>
      {floorChoices.map((floor, i) => (
        <Button
          key={`${floor}-${i}`}
          value={floor === "L" ? 0 : floor}
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
