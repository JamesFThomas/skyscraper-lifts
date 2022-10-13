import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveLift } from '../redux/displaySlice';
import '../../styles/displayPanel.css';

const DisplayPanel = () => {
  const dUp = useSelector((state) => state.display.dUp);
  const dDown = useSelector((state) => state.display.dDown);
  const currentFloor = useSelector((state) => state.display.currentFloor);
  const dispatch = useDispatch();

  return (
    <div className='disPanel'>
      <div className='disArrow'>
        <span
          className={dUp ? 'arrow bi bi-caret-up-fill' : 'arrow bi bi-caret-up'}
        />
      </div>
      <div className='floorDisplay '>
        <div className='displayText'>{currentFloor}</div>
      </div>
      <div className='disArrow'>
        <span
          className={
            dDown ? 'arrow bi bi-caret-down-fill' : 'arrow bi bi-caret-down'
          }
        />
      </div>
      <button onClick={() => dispatch(moveLift(60))}>Run</button>
    </div>
  );
};

export default DisplayPanel;
