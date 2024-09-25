import { renderWithProviders } from '../../utils/TestingWrapper';
import LoadingDoors from '../../components/singleMode/liftParts/LoadingDoors';
import { screen } from '@testing-library/react';

// mock state for LOADING, EXITING, and currentFloor tests
const mockLoadingState = {
  singleMode: {
    LOADING: true,
    EXITING: false,
    currentFloor: 24,
  },
};

const mockExitingState = {
  singleMode: {
    LOADING: false,
    EXITING: true,
    currentFloor: 24,
  },
};
const mockIdleStateLobby = {
  singleMode: {
    LOADING: false,
    EXITING: false,
    currentFloor: 0,
  },
};

const mockIdleStateFloor = {
  singleMode: {
    LOADING: false,
    EXITING: false,
    currentFloor: 24,
  },
};

describe('LoadingDoors testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<LoadingDoors />);
    const doors = screen.getByTestId('loadingDoorsContainer');
    expect(doors).toBeInTheDocument();
  });

  it('Component renders current floor number', () => {
    renderWithProviders(<LoadingDoors />, {
      preloadedState: mockIdleStateFloor,
    });
    const currentFloor = screen.getByText('24');
    expect(currentFloor).toBeInTheDocument();
  });

  it('Component renders current floor as Lobby', () => {
    renderWithProviders(<LoadingDoors />, {
      preloadedState: mockIdleStateLobby,
    });
    const currentFloor = screen.getByText('L');
    expect(currentFloor).toBeInTheDocument();
  });

  it('Component renders loading message', () => {
    renderWithProviders(<LoadingDoors />, {
      preloadedState: mockLoadingState,
    });
    const loadingMessage = screen.getByText('Welcome!');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('Component renders exiting message', () => {
    renderWithProviders(<LoadingDoors />, {
      preloadedState: mockExitingState,
    });
    const exitingMessage = screen.getByText('Goodbye!');
    expect(exitingMessage).toBeInTheDocument();
  });
});
