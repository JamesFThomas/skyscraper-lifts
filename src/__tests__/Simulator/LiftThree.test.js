import { renderWithProviders } from '../../utils/TestingWrapper';
import LiftThree from '../../components/simulator/lifts/LiftThree';
import { screen } from '@testing-library/react';

const L3MockState = {
  liftTitle: 'Lift 3 Test',
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
  ],
};

describe('LiftThree testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<LiftThree />, {
      preloadedState: { everyLift: { lift3: L3MockState } },
    });
    const L3 = screen.getByTestId('liftThreeContainer');
    expect(L3).toBeInTheDocument();
  });
  it('Component renders title', () => {
    renderWithProviders(<LiftThree />, {
      preloadedState: { everyLift: { lift3: L3MockState } },
    });
    const title = screen.getByText(/Lift 3 Test/i);
    expect(title).toBeInTheDocument();
  });

  it('Component renders with all expected content', () => {
    renderWithProviders(<LiftThree />, {
      preloadedState: { everyLift: { lift3: L3MockState } },
    });

    const doors = screen.getByTestId('elevatorDoors-container');
    const directionPanel = screen.getByTestId('DirectionalPanel-container');
    const tripsDisplay = screen.getByTestId('tripDisplayContainer');

    expect(doors).toBeInTheDocument();
    expect(directionPanel).toBeInTheDocument();
    expect(tripsDisplay).toBeInTheDocument();
  });
});
