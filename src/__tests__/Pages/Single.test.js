import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/TestingWrapper';
import Single from '../../components/pages/Single';

const mockMovingState = {
  singleMode: {
    currentFloor: 88,
    IDLE: false,
    SELECT: false,
    MOVING: true,
    durations: [30],
    trips: [{ currentFloor: 22, endFloor: 33, tripTime: '125 secs' }],
  },
};

const mockSelectState = {
  singleMode: {
    currentFloor: 77,
    IDLE: false,
    SELECT: true,
    MOVING: false,
    durations: [30],
    trips: [{ currentFloor: 22, endFloor: 33, tripTime: '125 secs' }],
  },
};

describe('Single page testing suite', () => {
  it('Component successfully renders in container', async () => {
    renderWithProviders(<Single />);
    const container = screen.getByTestId('singlePage-container');
    expect(container).toBeInTheDocument();
  });

  it('Component renders door time and music messages', async () => {
    renderWithProviders(<Single />);
    const doorMessage = screen.getByText(
      /Door takes 30 seconds in the Lobby, 5 seconds other floors./i,
    );
    const musicMessage = screen.getByText(
      /Music plays on rides longer than 30 seconds./i,
    );
    expect(doorMessage).toBeInTheDocument();
    expect(musicMessage).toBeInTheDocument();
  });

  it('Component renders with trip log display', async () => {
    renderWithProviders(<Single />);
    const tripLogContainer = screen.getByTestId('tripLogContainer');
    expect(tripLogContainer).toBeInTheDocument();
  });

  it('Component renders loading doors and call button when idle', async () => {
    renderWithProviders(<Single />);
    const loadingDoors = screen.getByTestId('loadingDoorsContainer');
    const callPanel = screen.getByTestId('call-panel');
    expect(loadingDoors).toBeInTheDocument();

    expect(callPanel).toBeInTheDocument();
  });
  it('Component renders displayPanel & Closed doors when moving', async () => {
    renderWithProviders(<Single />, { preloadedState: mockMovingState });
    const displayPanel = screen.getByTestId('displayPanelContainer');
    const closedDoors = screen.getByTestId('closed-doors');
    expect(displayPanel).toBeInTheDocument();
    expect(closedDoors).toBeInTheDocument();
  });
  it('Component renders FloorPanel when SELECT state is true', async () => {
    renderWithProviders(<Single />, { preloadedState: mockSelectState });
    const floorsPanel = screen.getByTestId('floorPanelContainer');
    expect(floorsPanel).toBeInTheDocument();
  });
});
