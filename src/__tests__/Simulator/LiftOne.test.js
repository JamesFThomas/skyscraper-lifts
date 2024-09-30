import { renderWithProviders } from '../../utils/TestingWrapper';
import LiftOne from '../../components/simulator/lifts/LiftOne';
import { screen } from '@testing-library/react';

const mockLift1State = {
  liftTitle: 'Lift 1 Test',
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

describe('LiftOne testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<LiftOne />);
    const lift1 = screen.getByTestId('liftOneContainer');
    expect(lift1).toBeInTheDocument();
  });
  it('Component renders title', () => {
    renderWithProviders(<LiftOne />, {
      preloadedState: { everyLift: { lift1: mockLift1State } },
    });
    const title = screen.getByText(/Lift 1 Test/i);
    expect(title).toBeInTheDocument();
  });

  it('Component renders with all expected content', () => {
    renderWithProviders(<LiftOne />, {
      preloadedState: { everyLift: { lift1: mockLift1State } },
    });

    const doors = screen.getByTestId('elevatorDoors-container');
    const directionPanel = screen.getByTestId('DirectionalPanel-container');
    const tripsDisplay = screen.getByTestId('tripDisplayContainer');

    expect(doors).toBeInTheDocument();
    expect(directionPanel).toBeInTheDocument();
    expect(tripsDisplay).toBeInTheDocument();
  });
});
