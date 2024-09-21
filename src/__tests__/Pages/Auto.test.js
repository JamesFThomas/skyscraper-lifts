import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/TestingWrapper';
import Auto from '../../components/pages/Auto';

const mockState = {
  simulator: {
    duration: 34,
    isRunning: false,
    showSummary: true,
    rides: [],
  },
};

const TestWrapper = (testState) => {
  return renderWithProviders(<Auto />, { preloadedState: testState });
};
describe('Auto page testing suite', () => {
  it('Component renders with start button', () => {
    TestWrapper();
    expect(screen.getByRole('button', { name: /Start/i })).toBeInTheDocument();
  });

  it('Component renders with 3 lifts', () => {
    TestWrapper();

    const lifts = screen.getAllByTestId(/lift/gi);
    expect(lifts).toHaveLength(3);
    expect(lifts[0]).toHaveTextContent(/Lift 1 Trips/i);
    expect(lifts[1]).toHaveTextContent(/Lift 2 Trips/i);
    expect(lifts[2]).toHaveTextContent(/Lift 3 Trips/i);
  });

  it('Component shows summary when simulator complete', async () => {
    TestWrapper(mockState);

    await waitFor(() => {
      screen.getByTestId('summaryDisplayContainer');
    });

    const summary = screen.getByTestId('summaryDisplayContainer');
    expect(summary).toBeInTheDocument();
  });
});
