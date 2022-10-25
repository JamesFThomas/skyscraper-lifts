import Container from 'react-bootstrap/Container';
import FloorPanel from '../lift/FloorPanel';

const Home = () => {
  return (
    <div className='page'>
      <Container>
        <div>{'Home'}</div>
        <FloorPanel />
      </Container>
    </div>
  );
};

export default Home;
