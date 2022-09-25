import Container from 'react-bootstrap/Container';

import CallPanel from '../lift/CallPanel';
import DisplayPanel from '../lift/DisplayPanel';

const Single = () => {
  return (
    <div className='page'>
      <Container>
        <div>{'Single'}</div>
        {/* <CallPanel /> */}
        <DisplayPanel />
      </Container>
    </div>
  );
};

export default Single;
