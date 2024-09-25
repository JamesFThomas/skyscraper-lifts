import { renderWithProviders } from '../../utils/TestingWrapper';
import { screen, waitFor } from '@testing-library/react';
import DirectionPanel from '../../components/simulator/liftParts/DirectionPanel';

const mockDownProps = {
  direction: 'DOWN',
  currentFloor: '28',
};

const mockUpProps = {
  direction: 'UP',
  currentFloor: '82',
};

describe('DirectionPanel testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<DirectionPanel props={mockUpProps} />);

    const panel = screen.getByTestId('DirectionalPanel-container');
    expect(panel).toBeTruthy();
  });

  it('Component renders current floor when passed', async () => {
    renderWithProviders(<DirectionPanel props={mockUpProps} />);

    await waitFor(() => {
      screen.getByTestId('DirectionalPanel-currentFloor');
    });

    const currentFloor = screen.getByTestId('DirectionalPanel-currentFloor');

    expect(currentFloor).toHaveStyle(
      'border: 2px solid grey; font-size: 32px; padding: 16px; display: flex; flex-direction: row; justify-content: center',
    );
  });

  it('Component renders up icon when prop is true', () => {
    renderWithProviders(<DirectionPanel props={mockUpProps} />);
    const iconBox = screen.getByTestId('DirectionalPanel-upIconBox');
    expect(iconBox).toBeInTheDocument();
  });

  it('Component renders down icon when prop is true', () => {
    renderWithProviders(<DirectionPanel props={mockDownProps} />);
    const iconBox = screen.getByTestId('DirectionalPanel-downIconBox');
    expect(iconBox).toBeInTheDocument();
  });
});
