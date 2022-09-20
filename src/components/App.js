// import dependencies
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import css styles
import '../styles/App.css';
import '../styles/pages.css';
import '../styles/footer.css';

// import components
import NavBar from './layout/Navbar';
import Home from './pages/Home';
import Auto from './pages/Auto';
import Single from './pages/Single';
import About from './pages/About';
import Footer from './layout/Footer';

import { aboutData } from '../data/aboutData';

const App = () => {
  return (
    <Router>
      <Container className='App' fluid>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auto' element={<Auto />} />
            <Route path='/single' element={<Single />} />
            <Route path='/about' element={<About aboutData={aboutData} />} />
          </Routes>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
