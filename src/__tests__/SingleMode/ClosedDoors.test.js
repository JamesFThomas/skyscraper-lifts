import { screen, render } from '@testing-library/react';
import ClosedDoors from '../../components/singleMode/liftParts/ClosedDoors';

describe('ClosedDoors testing suite', () => {
  it('Component successfully renders with correct styles', () => {
    render(<ClosedDoors />);
    const doors = screen.getByTestId('closed-doors');
    expect(doors).toBeInTheDocument();
    // test door styling
    expect(doors).toHaveStyle(
      'border: 2px solid grey; margin: 1em; display: flex; flex-direction: row; width: 20em; justify-content: center',
    );
  });
});
