import Container from 'react-bootstrap/Container';

import CallPanel from '../lift/CallPanel';
import DisplayPanel from '../lift/DisplayPanel';
import LiftDoors from '../lift/LiftDoors';

const Single = () => {
  return (
    <div className='page'>
      <Container>
        <div>{'Single'}</div>
        <CallPanel />
        <DisplayPanel />
        <LiftDoors />
      </Container>
    </div>
  );
};

export default Single;
