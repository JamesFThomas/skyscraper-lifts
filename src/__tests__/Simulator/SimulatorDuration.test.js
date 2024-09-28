import { renderWithProviders } from '../../utils/TestingWrapper';
import { screen } from '@testing-library/react';
import SimulatorDuration from '../../components/simulator/SimulatorDuration';

const mockRunningState = {
  simulator: {
    duration: 88,
    isRunning: true,
    showSummary: false,
  },
};

const mockIdleState = {
  simulator: {
    duration: 129,
    isRunning: false,
    showSummary: false,
  },
};

describe('SimulatorDuration testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<SimulatorDuration />, {
      preloadedState: mockRunningState,
    });
    const simulator = screen.getByTestId('durationDisplayContainer');
    expect(simulator).toBeInTheDocument();
  });
  it('Component renders start button when the simulator is NOT running', () => {
    renderWithProviders(<SimulatorDuration />, {
      preloadedState: mockIdleState,
    });
    const startButton = screen.getByText('Start');
    expect(startButton).toBeInTheDocument();
  });
  it('Component renders stop button when the simulator IS running', () => {
    renderWithProviders(<SimulatorDuration />, {
      preloadedState: mockRunningState,
    });
    const stopButton = screen.getByText('Stop');
    expect(stopButton).toBeInTheDocument();
  });
  it('Component renders correct duration value when passed', () => {
    renderWithProviders(<SimulatorDuration />, {
      preloadedState: mockRunningState,
    });
    const durationText = screen.getByText('88');
    expect(durationText).toBeInTheDocument();
  });
});
