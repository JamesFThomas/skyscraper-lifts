import { renderWithProviders } from '../../utils/TestingWrapper';
import { screen } from '@testing-library/react';
import TripsDisplay from '../../components/simulator/liftParts/TripsDisplay';

const mockProps = {
  title: 'Test title',
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

describe('TripsDisplay testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<TripsDisplay {...mockProps} />);
    const display = screen.getByTestId('tripDisplayContainer');
    expect(display).toBeInTheDocument();
  });

  it('Component renders with title when passed', () => {
    renderWithProviders(<TripsDisplay {...mockProps} />);
    const titleText = screen.getByText(mockProps.title);
    expect(titleText).toBeInTheDocument();
  });
  it('Component renders trip data when passed', () => {
    renderWithProviders(<TripsDisplay {...mockProps} />);
    const trips = screen.getAllByTestId(/tripDisplay-/i);
    expect(trips.length).toBe(mockProps.trips.length);
    expect(trips[0]).toHaveTextContent('T#1, S:22, E:55, L:66');
    expect(trips[1]).toHaveTextContent('T#2, S:L, E:89, L:112');
    expect(trips[2]).toHaveTextContent('T#3, S:12, E:L, L:29');
  });
});
