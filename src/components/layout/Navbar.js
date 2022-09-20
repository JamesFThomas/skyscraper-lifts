import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg='secondary' variant='dark'>
      <Container fluid>
        <Navbar.Brand href='/'>Skyscraper Lifts</Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Item>
            <Nav.Link href='/about'> About </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/single'> Single </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/auto'> Auto </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
