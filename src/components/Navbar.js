import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/home">Skyscraper Lifts</Navbar.Brand>
                <Nav className="ms-auto" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="/about"> About Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/singleLift">Single Lift</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/autoMode">Auto</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default NavBar;