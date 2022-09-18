import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const About = () => {
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
            <Button>{'Single'}</Button> <Button>{'Auto'}</Button>
            <h3>{'Application Constraints'}</h3>
            <Button>{'Challenges'}</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
