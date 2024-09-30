import { renderWithProviders } from '../../utils/TestingWrapper';
import LiftTwo from '../../components/simulator/lifts/LiftTwo';
import { screen } from '@testing-library/react';

const mockL2State = {
  liftTitle: 'Lift 2 Test',
  currentFloor: 1,
  phase: 'loading',
  direction: 'UP',
  trips: [
    {
      start: 22,
      end: 55,
      duration: 66,
      passengers: 3,
    },
    {
      start: 0,
      end: 89,
      duration: 112,
      passengers: 2,
    },
    {
      start: 12,
      end: 0,
      duration: 29,
      passengers: 1,
    },
  ],
};

describe('LiftTwo testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<LiftTwo />);
    const L2 = screen.getByTestId('liftTwoContainer');
    expect(L2).toBeInTheDocument();
  });
  it('Component renders title', () => {
    renderWithProviders(<LiftTwo />, {
      preloadedState: { everyLift: { lift2: mockL2State } },
    });
    const title = screen.getByText(/Lift 2 Test/i);
    expect(title).toBeInTheDocument();
  });

  it('Component renders with all expected content', () => {
    renderWithProviders(<LiftTwo />, {
      preloadedState: { everyLift: { lift2: mockL2State } },
    });

    const doors = screen.getByTestId('elevatorDoors-container');
    const directionPanel = screen.getByTestId('DirectionalPanel-container');
    const tripsDisplay = screen.getByTestId('tripDisplayContainer');

    expect(doors).toBeInTheDocument();
    expect(directionPanel).toBeInTheDocument();
    expect(tripsDisplay).toBeInTheDocument();
  });
});
