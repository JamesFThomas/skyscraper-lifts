import { renderWithProviders } from '../../utils/TestingWrapper';
import { screen } from '@testing-library/react';
import TripLog from '../../components/singleMode/TripLog';

const mockTripsState = {
  singleMode: {
    trips: [
      { currentFloor: 24, endFloor: 0, tripTime: 37 },
      { currentFloor: 0, endFloor: 24, tripTime: 48 },
    ],
  },
};

describe('TripLog testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<TripLog />);
    const tripLog = screen.getByTestId('tripLogContainer');
    expect(tripLog).toBeInTheDocument();
  });
  it('Component renders with  title test', () => {
    renderWithProviders(<TripLog />);
    const titleText = screen.getByText('Trip Log');
    expect(titleText).toBeInTheDocument();
  });

  it('Component renders trip information', () => {
    renderWithProviders(<TripLog />, { preloadedState: mockTripsState });
    const trips = screen.getAllByTestId(/trip-/i);
    expect(trips).toHaveLength(2);
    expect(trips[0]).toHaveTextContent('T#1, S:24, E:L Time:37');
    expect(trips[1]).toHaveTextContent('T#2, S:L, E:24 Time:48');
  });
});
