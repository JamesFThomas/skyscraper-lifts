import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ModalComponent from '../layout/ModalComponent';

const About = ({ aboutData }) => {
  //destructure data objects for modals
  const { auto, single, con1, con2, con3 } = aboutData;

  return (
    <div className='page'>
      <Container>
        <Row style={{ margin: '10px' }}>
          <Col>
            <h1>{'About This Application'}</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <h4>{'Application Objective'}</h4>
          </Col>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p>
              {`
                  Design an elevator system for a 100 story building
                  minimizing a the time between calling an elevator and
                  arrival at desired floor.`}
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <h4>{'Application Modes'}</h4>
          </Col>
          <Col>
            <Row
              style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ModalComponent data={auto} />
            </Row>
            <Row
              style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ModalComponent data={single} />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>{'Application Constraints'}</h4>
          </Col>
          <Col>
            <Row
              style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ModalComponent data={con1} />
            </Row>
            <Row
              style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ModalComponent data={con2} />
            </Row>
            <Row
              style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ModalComponent data={con3} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
