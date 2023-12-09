import React from "react";
import { useSelector } from "react-redux";
import "../../styles/displayPanel.css";

const DisplayPanel = () => {
  const dUp = useSelector((state) => state.display.dUp);
  const dDown = useSelector((state) => state.display.dDown);
  const currentFloor = useSelector((state) => state.display.currentFloor);

  return (
    <div
      className="disPanel"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "max-content",
        width: "fit-content",
      }}
    >
      <div
        className="disArrow"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <span
          className={dUp ? "arrow bi bi-caret-up-fill" : "arrow bi bi-caret-up"}
        />
      </div>
      <div
        className="floorDisplay "
        style={{
          margin: "10px",
        }}
      >
        <div className="displayText">{currentFloor}</div>
      </div>
      <div
        className="disArrow"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <span
          className={
            dDown ? "arrow bi bi-caret-down-fill" : "arrow bi bi-caret-down"
          }
        />
      </div>
    </div>
  );
};

export default DisplayPanel;
