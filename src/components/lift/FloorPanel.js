import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { trackTrip, moveLift, showUp, showDown } from "../redux/displaySlice";
import Button from "react-bootstrap/Button";

import "../../styles/floorPanel.css";

const FloorPanel = () => {
  const currentFloor = useSelector((state) => state.display.currentFloor);
  const dispatch = useDispatch();
  const floors = [...Array(100).keys()].filter((floor) => {
    return floor !== currentFloor;
  });

  const setMovingDircection = (end) => {
    end < currentFloor ? dispatch(showDown(true)) : dispatch(showUp(true));
  };

  const handleClick = (e) => {
    const endFloor = e.target.value;
    const newTrip = [currentFloor, endFloor];

    // track the trip
    console.log(newTrip);
    dispatch(trackTrip(newTrip));
    setMovingDircection(endFloor);

    // move the lift
    dispatch(moveLift(currentFloor, endFloor));
  };

  return (
    <div className="floorGrid">
      {floors.map((floor, i) => (
        <Button
          className="gridButton"
          key={i}
          value={floor}
          variant="outline-secondary"
          size="sm"
          onClick={(e) => handleClick(e)}
        >
          {floor}
        </Button>
      ))}
    </div>
  );
};

export default FloorPanel;
