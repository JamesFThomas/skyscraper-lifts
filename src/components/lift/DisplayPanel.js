import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goingUp, goingDown } from '../redux/displaySlice';
import '../../styles/displayPanel.css';

const DisplayPanel = () => {
  const [goingUp, setGoingUp] = useState(false);
  const [goingDown, setGoingDown] = useState(false);
  const currentFloor = useSelector((state) => state.display.currentFloor);

  const showUp = () => {
    goingUp ? setGoingUp('-fill') : setGoingUp('');
  };
  const showDown = () => {
    goingDown ? setGoingDown('-fill') : setGoingDown('');
  };

  return (
    <div className='disPanel'>
      <div className='disArrow'>
        <span className={`arrow bi bi-caret-up ${goingUp}`} />
      </div>
      <div className='floorDisplay '>
        <div className='displayText'>{currentFloor}</div>
      </div>
      <div className='disArrow'>
        <span className={`arrow bi bi-caret-down ${goingDown}`} />
      </div>
    </div>
  );
};

export default DisplayPanel;
