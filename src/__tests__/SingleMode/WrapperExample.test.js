import { renderWithProviders } from '../../utils/TestingWrapper';
import DisplayPanel from '../../components/singleMode/liftParts/DisplayPanel';
import { useSelector } from 'react-redux';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { singleModeSlice } from '../../state/singleModeSlice';
import { testReducer } from '../../state/store';

// Mock state
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

// Mock useSelector
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mock store
const mockStore = configureStore({ reducer: { singleMode: singleModeSlice } });

describe('Blog example testing suite', () => {
  it('component successfully renders - mock useSelector', () => {
    //Arrange
    useSelector.mockImplementation(() => mockCurrentFloor);
    render(<DisplayPanel />);

    // Act
    const displayPanelContainer = screen.getByTestId('displayPanelContainer');

    // Assert
    expect(displayPanelContainer).toBeInTheDocument();
  });
});
