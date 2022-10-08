import Container from 'react-bootstrap/Container';
import Counter from '../lift/Counter';

const Home = () => {
  return (
    <div className='page'>
      <Container>
        <div>{'Home'}</div>
        <Counter />
      </Container>
    </div>
  );
};

export default Home;
