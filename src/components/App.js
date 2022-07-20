import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/App.css';
import NavBar from './Navbar';

const App = () => {
  return (
    <Container
      className="App"
      fluid
    >
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
