import { renderWithProviders } from '../../utils/TestingWrapper';
import FloorPanel from '../../components/singleMode/liftParts/FloorPanel';
import { screen } from '@testing-library/react';

const mockState = {
  singleMode: {
    currentFloor: 24,
  },
};

describe('FloorPanel testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<FloorPanel />);
    const panel = screen.getByTestId(/floorPanelContainer/i);
    expect(panel).toBeInTheDocument();
  });
  it('Component renders floor buttons', () => {
    renderWithProviders(<FloorPanel />, { preloadedState: mockState });

    const floorButtons = screen.getAllByRole('button');

    // check length of floors array - 100 floors - 1 for current floor
    expect(floorButtons).toHaveLength(99);
    expect(floorButtons[0]).toHaveTextContent('L');
    expect(floorButtons[0]).toHaveAttribute(
      'data-test-id',
      'floorPanel-Button-0',
    );
    expect(floorButtons[1]).toHaveTextContent('1');
    expect(floorButtons[1]).toHaveAttribute(
      'data-test-id',
      'floorPanel-Button-1',
    );
  });
});
