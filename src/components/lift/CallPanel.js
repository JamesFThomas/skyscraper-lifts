import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/callPanel.css';

const CallPanel = () => {
  return (
    <Container className='panel'>
      <span
        class='arrow bi bi-caret-up'
        onClick={() => console.log('UP arrow clicked')}
      />
      {/* <span class='arrow bi bi-caret-up-fill' /> */}
      <div className='panelText'>CALL</div>
      {/* <span class='arrow bi bi-caret-down-fill' /> */}
      <span
        class='arrow bi bi-caret-down'
        onClick={() => console.log('Down arrow clicked')}
      />
    </Container>
  );
};

export default CallPanel;
