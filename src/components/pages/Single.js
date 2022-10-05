import Container from 'react-bootstrap/Container';

import CallPanel from '../lift/CallPanel';
import DisplayPanel from '../lift/DisplayPanel';
import LiftDoors from '../lift/LiftDoors';
import ControlButtons from '../lift/ControlButtons';

const Single = () => {
  return (
    <div className='page'>
      <Container>
        <ControlButtons />
        <CallPanel />
        <DisplayPanel />
        <LiftDoors />
      </Container>
    </div>
  );
};

export default Single;
