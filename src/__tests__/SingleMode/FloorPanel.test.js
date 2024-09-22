import { renderWithProviders } from '../../utils/TestingWrapper';
import FloorsPanel from '../../components/singleMode/liftParts/FloorPanel';
import { screen } from '@testing-library/react';

//TODO add tests for floor buttons

describe('FloorPanel testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<FloorsPanel />);
    expect(screen.getByTestId(/floorPanelContainer/i)).toBeTruthy();
  });
});
