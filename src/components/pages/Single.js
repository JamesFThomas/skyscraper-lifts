import Container from 'react-bootstrap/Container';

import CallPanel from '../lift/CallPanel';

const Single = () => {
  return (
    <div className='page'>
      <Container>
        <div>{'Single'}</div>
        <CallPanel />
      </Container>
    </div>
  );
};

export default Single;
