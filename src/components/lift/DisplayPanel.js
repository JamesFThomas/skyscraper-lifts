import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/displayPanel.css';

const DisplayPanel = () => {
  const [goingUp, setGoingUp] = useState(false);
  const [goingDown, setGoingDown] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(33);

  const showUp = () => {
    goingUp ? setGoingUp('-fill') : setGoingUp('');
  };
  const showDown = () => {
    goingDown === '' ? setGoingDown('-fill') : setGoingDown('');
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
        <span className={`arrow bi bi-caret-down ${goingUp}`} />
      </div>
    </div>
  );
};

export default DisplayPanel;
