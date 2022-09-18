import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import ModalComponent from '../layout/ModalComponent';

const About = ({ aboutData }) => {
  //destructure data objects for modals
  const { auto, single, con1, con2, con3 } = aboutData;

  return (
    <div className='page'>
      <Container>
        <div>
          <h1>{'About This Application'}</h1>
          <div>
            <h2>{'Application Objective'}</h2>
            <p>
              {`
                To design an elevator system for a building containing 100 floors.
                This system should minimize the amount of time spent between
                calling an elevator and arriving at the destination floor`}
            </p>
          </div>
          <div>
            <div>
              <h3>{'Application Modes'}</h3>
              <ModalComponent data={auto} /> <ModalComponent data={single} />
            </div>
            <div>
              <h3>{'Application Constraints'}</h3>
              <div>
                <h6 style={{ display: 'inline-block' }}>
                  {`
                    Implement one or more functions that take as input
                    a time series of elevator calls and destinations
                    and outputs a time series of elevator actions.`}
                </h6>
                <ModalComponent data={con1} />
              </div>
              <div>
                <h6 style={{ display: 'inline-block' }}>
                  {`
                Implement a simulator that generates the time
                series of elevator calls to feed the function
                in part A.`}
                </h6>
                <ModalComponent data={con2} />
              </div>
              <div>
                <h6
                  style={{ display: 'inline-block' }}
                >{`After the simulator runs, it should produce summary statistics.`}</h6>
                <ModalComponent data={con3} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
