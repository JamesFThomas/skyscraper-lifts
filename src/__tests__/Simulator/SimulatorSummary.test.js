import { renderWithProviders } from '../../utils/TestingWrapper';
import SimulatorSummary from '../../components/simulator/SimulatorSummary';
import { screen } from '@testing-library/react';

//mock trips array for all lifts
const lift1 = {
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
const lift2 = {
  trips: [
    {
      start: 44,
      end: 55,
      duration: 11,
      passengers: 2,
    },
    {
      start: 0,
      end: 77,
      duration: 100,
      passengers: 8,
    },
    {
      start: 22,
      end: 0,
      duration: 39,
      passengers: 3,
    },
  ],
};
const lift3 = {
  trips: [
    {
      start: 12,
      end: 45,
      duration: 86,
      passengers: 5,
    },
    {
      start: 0,
      end: 99,
      duration: 200,
      passengers: 6,
    },
    {
      start: 12,
      end: 0,
      duration: 29,
      passengers: 1,
    },
  ],
};

//mock every lift state
const mockEveryLiftState = {
  everyLift: {
    lift1,
    lift2,
    lift3,
  },
};

describe('SimulatorSummary testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<SimulatorSummary />);
    const summaryDisplay = screen.getByTestId('summaryDisplayContainer');
    expect(summaryDisplay).toBeInTheDocument();
  });

  it('Component renders with Clear button', () => {
    renderWithProviders(<SimulatorSummary />);
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(1);
    expect(button[0]).toHaveTextContent('Clear Stats');
  });
  it('Component renders summary stats when passed', () => {
    renderWithProviders(<SimulatorSummary />, {
      preloadedState: mockEveryLiftState,
    });

    const averageWait = screen.getByText(/Average Wait Time/i);
    const averageInLift = screen.getByText(/Average Time in Lift/i);
    const averageAllRides = screen.getByText(/Average duration of all rides/i);

    expect(averageWait).toBeInTheDocument();
    expect(averageInLift).toBeInTheDocument();
    expect(averageAllRides).toBeInTheDocument();
  });
});
