import { renderWithProviders } from '../../utils/TestingWrapper';
import { screen, waitFor, render } from '@testing-library/react';
import ElevatorDoors from '../../components/simulator/liftParts/ElevatorDoors';

const mockIdleProps = {
  phase: 'IDLE',
  currentFloor: 0,
  liftTitle: 'Test Lift',
  currentTrip: 1,
};

const mockLoadingProps = {
  phase: 'LOADING',
  currentFloor: 0,
  liftTitle: 'Test Lift',
  currentTrip: 1,
};

const mockUnloadingProps = {
  phase: 'UNLOADING',
  currentFloor: 0,
  liftTitle: 'Test Lift',
  currentTrip: 1,
};

const mockEnrouteProps = {
  phase: 'ENROUTE',
  currentFloor: 0,
  liftTitle: 'Test Lift',
  currentTrip: 1,
};

const mockTaxingProps = {
  phase: 'TAXING',
  currentFloor: 0,
  liftTitle: 'Test Lift',
  currentTrip: 1,
};

describe('ElevatorDoors testing suite', () => {
  xit('Component successfully renders', () => {
    renderWithProviders(<ElevatorDoors props={mockIdleProps} />);
    const doors = screen.getByTestId('elevatorDoors-container');
    expect(doors).toBeInTheDocument();
  });

  // test for static doors
  // it('Component renders static doors in IDLE phase', async () => {
  // render(<ElevatorDoors props={mockIdleProps} />);

  // const staticDoors = screen.getByTestId('staticDoors-container');

  // await waitFor(() => {
  //   screen.queryByTestId('staticDoors-container');
  // });

  // eslint-disable-next-line testing-library/no-debugging-utils
  // screen.debug();

  // expect(staticDoors).toBeInTheDocument();
  // });
});
