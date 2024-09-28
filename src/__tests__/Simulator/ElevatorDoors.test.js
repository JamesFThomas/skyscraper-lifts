import { renderWithProviders } from '../../utils/TestingWrapper';
import { screen, waitFor, render } from '@testing-library/react';
import ElevatorDoors from '../../components/simulator/liftParts/ElevatorDoors';

const mockLoadingProps = {
  phase: 'LOADING',
  currentFloor: 0,
  liftTitle: 'Loading Lift',
  currentTrip: 1,
};

const mockUnloadingProps = {
  phase: 'UNLOADING',
  currentFloor: 0,
  liftTitle: 'Unloading Lift',
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

const mockIdleProps = {
  phase: 'IDLE',
  currentFloor: 0,
  liftTitle: 'Test Lift',
  currentTrip: 1,
};

describe('ElevatorDoors testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<ElevatorDoors />);
    const doors = screen.getByTestId('elevatorDoors-container');
    expect(doors).toBeInTheDocument();
  });

  // test for static doors
  it('Component renders static doors in IDLE phase', async () => {
    renderWithProviders(<ElevatorDoors {...mockIdleProps} />);

    const staticDoors = screen.getByTestId('staticDoors-container');

    await waitFor(() => {
      screen.queryByTestId('staticDoors-container');
    });

    expect(staticDoors).toBeInTheDocument();
  });

  // test for static doors and enroute stats
  it('Component renders static doors and stats in ENROUTE phase', async () => {
    renderWithProviders(<ElevatorDoors {...mockEnrouteProps} />);

    const staticDoors = screen.getByTestId('staticDoors-container');
    const enroutstats = screen.getByTestId('enrouteStats-container');

    await waitFor(() => {
      screen.queryByTestId('staticDoors-container');
    });

    expect(staticDoors).toBeInTheDocument();
    expect(enroutstats).toBeInTheDocument();
    expect(screen.getByText(/To Floor/i)).toBeInTheDocument();
  });

  // test for static doors and taxing stats
  it('Component renders static doors and stats in TAXING phase', async () => {
    renderWithProviders(<ElevatorDoors {...mockTaxingProps} />);

    const staticDoors = screen.getByTestId('staticDoors-container');
    const taxingStats = screen.getByTestId('taxingStats-container');

    await waitFor(() => {
      screen.queryByTestId('staticDoors-container');
    });

    expect(staticDoors).toBeInTheDocument();
    expect(taxingStats).toBeInTheDocument();
    expect(screen.getByText(/Number of passengers/i)).toBeInTheDocument();
  });

  // test for moving doors doors and loading message
  it('Component renders moving doors and greeting in LOADING phase', async () => {
    renderWithProviders(<ElevatorDoors {...mockLoadingProps} />);

    const movingDoors = screen.getByTestId('movingDoors-container');
    const greeting = screen.getByTestId('elevatorDoors-greeting');

    await waitFor(() => {
      screen.queryByTestId('movingDoors-container');
    });

    expect(movingDoors).toBeInTheDocument();
    expect(greeting).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Loading Lift/i)).toBeInTheDocument();
  });

  // test for moving doors doors and unloading message
  it('Component renders moving doors and exit greeting in UNLOADING phase', async () => {
    renderWithProviders(<ElevatorDoors {...mockUnloadingProps} />);

    const movingDoors = screen.getByTestId('movingDoors-container');
    const greeting = screen.getByTestId('elevatorDoors-greeting');

    await waitFor(() => {
      screen.queryByTestId('movingDoors-container');
    });

    expect(movingDoors).toBeInTheDocument();
    expect(greeting).toBeInTheDocument();
    expect(
      screen.getByText(/Goodbye from Unloading Lift/i),
    ).toBeInTheDocument();
  });
});
