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
        <Row style={{ marginBottom: '5px' }}>
          <Col>
            <h1>{'About This Application'}</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col>
            <h4 style={{ display: 'flex', alignItems: 'center' }}>
              {'Application Objective'}
            </h4>
          </Col>
          <Col>
            <p>
              {`
                  To design an elevator system for a building containing 100 floors.
                  This system should minimize the amount of time spent between
                  calling an elevator and arriving at the destination floor`}
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <h4>{'Application Modes'}</h4>
          </Col>
          <Col>
            <ModalComponent data={auto} /> <ModalComponent data={single} />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <h4>{'Application Constraints'}</h4>
          </Col>
          <Col>
            <Row>
              <p>
                {`
                    Implement one or more functions that take as input
                    a time series of elevator calls and destinations
                    and outputs a time series of elevator actions.`}
              </p>
              <ModalComponent data={con1} />
            </Row>
            <Row>
              <p>
                {`
                Implement a simulator that generates the time
                series of elevator calls to feed the function
                in part A.`}
              </p>
              <ModalComponent data={con2} />
            </Row>
            <Row>
              <p>
                {`After the simulator runs, it should produce summary statistics.`}
              </p>
              <ModalComponent data={con3} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
