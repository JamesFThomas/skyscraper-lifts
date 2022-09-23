import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/callPanel.css';

const CallPanel = () => {
  const [upClick, setUpClick] = useState(false);
  const [downClick, setDownClick] = useState(false);

  const handelUp = (e) => {
    e.preventDefault();
    setUpClick(!upClick);
  };
  const handelDown = (e) => {
    e.preventDefault();
    setDownClick(!downClick);
  };

  return (
    <Container className='panel'>
      {upClick ? (
        <span class='arrow bi bi-caret-up' onClick={(e) => handelUp(e)} />
      ) : (
        <span class='arrow bi bi-caret-up-fill' onClick={(e) => handelUp(e)} />
      )}
      <div className='panelText'>CALL</div>
      {downClick ? (
        <span
          class='arrow bi bi-caret-down-fill'
          onClick={(e) => handelDown(e)}
        />
      ) : (
        <span class='arrow bi bi-caret-down' onClick={(e) => handelDown(e)} />
      )}
    </Container>
  );
};

export default CallPanel;
