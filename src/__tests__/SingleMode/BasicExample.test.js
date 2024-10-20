import DisplayPanel from '../../components/singleMode/liftParts/DisplayPanel';
import { useSelector } from 'react-redux';
import { screen, render } from '@testing-library/react';

// Mock state
const mockIdleState = {
  singleMode: {
    dUp: false,
    dDown: false,
    currentFloor: 0,
  },
};

const mockCurrentFloor = {
  singleMode: {
    dUp: false,
    dDown: false,
    currentFloor: 89,
  },
};

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

// Mock useSelector
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Blog example testing suite', () => {
  it('component successfully renders', () => {
    //Arrange
    useSelector.mockImplementation((selector) => selector(mockIdleState));
    render(<DisplayPanel />);

    // Act
    const displayPanelContainer = screen.getByTestId('displayPanelContainer');

    // Assert
    expect(displayPanelContainer).toBeInTheDocument();
  });

  // Current floor direction test
  it('component renders currentfloor value', () => {
    //Arrange
    useSelector.mockImplementation((selector) => selector(mockCurrentFloor));
    render(<DisplayPanel />);

    // Act
    const currentFloor = screen.getByTestId('currentFloor');

    // Assert
    expect(currentFloor).toBeInTheDocument();

    expect(currentFloor).toHaveTextContent(
      mockCurrentFloor.singleMode.currentFloor,
    );
  });

  // Up direction test
  it('component indicates up direction when true', () => {
    //Arrange
    useSelector.mockImplementation((selector) => selector(mockUpstate));
    render(<DisplayPanel />);

    // Act
    const upIcon = screen.getByTestId('ForwardIcon');

    // Assert
    expect(upIcon).toBeInTheDocument();
    expect(upIcon).toHaveAttribute('id', 'upIcon');
  });

  // Down direction test
  it('component indicates down direction when true', () => {
    //Arrange
    useSelector.mockImplementation((selector) => selector(mockDownState));
    render(<DisplayPanel />);

    // Act
    const downIcon = screen.getByTestId('ForwardIcon');

    // Assert
    expect(downIcon).toBeInTheDocument();
    expect(downIcon).toHaveAttribute('id', 'downIcon');
  });
});
