import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../styles/controlButtons.css';

const ControlButtons = () => {
  return (
    <div className='buttonPanel'>
      <Button
        className='startBtn'
        variant='outline-secondary'
        size='lg'
        style={{}}
      >
        Start
      </Button>
      <Button className='stopBtn' variant='outline-secondary' size='lg'>
        Stop
      </Button>
      <Button className='summaryBtn' variant='outline-secondary' size='lg'>
        Summary
      </Button>
    </div>
  );
};

export default ControlButtons;
