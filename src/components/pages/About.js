import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import ModalComponent from '../layout/ModalComponent';

const About = ({ aboutData }) => {
  //destructure data objects for modals
  const { auto, single, cons } = aboutData;

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
            <h3>{'Application Modes'}</h3>
            <ModalComponent data={auto} /> <ModalComponent data={single} />
            <h3>{'Application Constraints'}</h3>
            <ModalComponent data={cons} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
