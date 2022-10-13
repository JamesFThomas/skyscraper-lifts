import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CallPanel from '../lift/CallPanel';
import DisplayPanel from '../lift/DisplayPanel';
import LiftDoors from '../lift/LiftDoors';
import ControlButtons from '../layout/ControlButtons';
import TripLog from '../layout/TripLog';

const Single = () => {
  return (
    <div className='page'>
      <Container>
        <Row>
          <ControlButtons />
        </Row>
        <Row>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TripLog />
          </Col>
          <Col>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col md={{ span: 8, offset: 1 }} >
                <DisplayPanel />
              </Col>
            </Row>
            <Row>
              <Col>
                <LiftDoors />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CallPanel />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Single;