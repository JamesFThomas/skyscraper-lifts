import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <Nav className="footer" >
            <Container fluid>
                <div className="footer__title">
                    {`Copyright @ 2022`}
                </div>
            </Container>
        </Nav >

    );
}

export default Footer;