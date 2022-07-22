import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import '../styles/App.css';
import "../styles/pages.css"
import NavBar from './Navbar';
import Home from './Home';
import Auto from './Auto';
import Single from './Single';
import About from './About';

const App = () => {
  return (
    <Router>
      <Container className="App" fluid >
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row >
          <Routes>
            <Route path='/auto' element={<Auto />} />
            <Route path='/single' element={<Single />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
