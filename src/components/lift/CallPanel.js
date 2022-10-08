import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/callPanel.css';

const CallPanel = () => {
  const [upClick, setUpClick] = useState('');
  const [downClick, setDownClick] = useState('');

  const handelUp = (e) => {
    e.preventDefault();
    upClick === '' ? setUpClick('-fill') : setUpClick('');
  };
  const handelDown = (e) => {
    e.preventDefault();
    downClick === '' ? setDownClick('-fill') : setDownClick('');
  };

  return (
    <div className='panelContainer'>
      <span
        className={`arrow bi bi-caret-up${upClick}`}
        onClick={(e) => handelUp(e)}
      />
      <span
        className={`arrow bi bi-caret-down${downClick}`}
        onClick={(e) => handelDown(e)}
      />
    </div>
  );
};

export default CallPanel;
