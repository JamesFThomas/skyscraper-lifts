import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import '../../styles/floorPanel.css';

const FloorPanel = () => {
  const [floors] = useState([...Array(100).keys()]);
  return (
    <div className='floorGrid'>
      {floors.map((floor, i) => (
        <Button
          className='gridButton'
          key={i}
          value={floor}
          variant='outline-secondary'
          size='sm'
        >
          {floor}
        </Button>
      ))}
    </div>
  );
};

export default FloorPanel;
