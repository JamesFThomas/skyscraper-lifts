import renderer from 'react-test-renderer';
import { renderWithProviders } from '../../utils/TestingWrapper';
import DisplayPanel from '../../components/singleMode/liftParts/DisplayPanel';
import { screen } from '@testing-library/react';

const mockUpstate = {
  singleMode: {
    dUp: true,
    dDown: false,
    currentFloor: 0,
  },
};
const mockDownState = {
  singleMode: {
    dUp: false,
    dDown: true,
    currentFloor: 0,
  },
};

const mockCurrentFloor = {
  singleMode: {
    dUp: false,
    dDown: false,
    currentFloor: 41,
  },
};
describe('DisplayPanel testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<DisplayPanel />);
    expect(screen.getByTestId(/displayPanelContainer/i)).toBeInTheDocument();
  });
  it('Component renders current floor when passed', () => {
    renderWithProviders(<DisplayPanel />, { preloadedState: mockCurrentFloor });
    const currentFloor = screen.getByTestId('currentFloor');
    expect(currentFloor).toBeInTheDocument();
    expect(currentFloor).toHaveTextContent('41');
  });
  it('Component correctly shows down direction', () => {
    renderWithProviders(<DisplayPanel />, { preloadedState: mockDownState });

    const downIcon = screen.getByTestId('ForwardIcon');
    expect(downIcon).toBeInTheDocument();
    expect(downIcon).toHaveAttribute('id', 'downIcon');
    expect(downIcon).toHaveStyle('transform: rotate(90deg);');
  });

  it('Component correctly shows up direction', () => {
    renderWithProviders(<DisplayPanel />, { preloadedState: mockUpstate });
    const upIcon = screen.getByTestId('ForwardIcon');
    expect(upIcon).toBeInTheDocument();
    expect(upIcon).toHaveAttribute('id', 'upIcon');
    expect(upIcon).toHaveStyle('transform: rotate(270deg);');
  });
});
