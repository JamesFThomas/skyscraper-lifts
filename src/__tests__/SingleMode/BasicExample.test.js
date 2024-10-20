import { renderWithProviders } from '../../utils/TestingWrapper';
import DisplayPanel from '../../components/singleMode/liftParts/DisplayPanel';
import { useSelector } from 'react-redux';
import { screen, render, getByText, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { singleModeSlice } from '../../state/singleModeSlice';
import { testReducer } from '../../state/store';

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
  useSelector: jest.fn(),
}));

describe('Blog example testing suite', () => {
  xit('component successfully renders', () => {
    //Arrange
    useSelector.mockImplementation(() => mockIdleState);
    render(<DisplayPanel />);

    // Act
    const displayPanelContainer = screen.getByTestId('displayPanelContainer');

    // Assert
    expect(displayPanelContainer).toBeInTheDocument();
  });

  // Current floor direction test
  xit('component renders currentfloor value', () => {
    //Arrange
    useSelector.mockImplementation(() => mockCurrentFloor);
    render(<DisplayPanel />);

    // Act
    const currentFloor = screen.getByTestId('currentFloor');

    // Assert
    expect(currentFloor).toBeInTheDocument();

    //TODO add assertion for currentfloor value to be 89
    // expect(currentFloor).toContain(mockCurrentFloor.singleMode.currentFloor);
  });

  // Down direction test
  it('component indicates up direction when true', async () => {
    //Arrange
    useSelector.mockImplementation(() => mockUpstate);
    render(<DisplayPanel />);

    // Act
    const upIcon = screen.getByTestId('ForwardIcon');

    await waitFor(() => {
      // Assert
      screen.getByTestId('ForwardIcon');
    });

    // Assert
    expect(upIcon).toBeInTheDocument();
  });

  // Up direction test
  xit('component indicates down direction when true', () => {
    //Arrange
    useSelector.mockImplementation(() => mockCurrentFloor);
    render(<DisplayPanel />);

    // Act
    const displayPanelContainer = screen.getByTestId('displayPanelContainer');

    // Assert
    expect(displayPanelContainer).toBeInTheDocument();
  });
});
