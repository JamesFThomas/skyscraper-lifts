import { render, screen } from '@testing-library/react';
import Home from '../../components/pages/Home';

describe('Home page testing suite', () => {
  it('Component renders with page title', () => {
    render(<Home />);

    const result = screen.getByRole('heading');

    expect(result).toHaveTextContent(/Welcome To My Building/i);
  });
  it('Component renders with video', () => {
    const { container } = render(<Home />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const result = container.querySelector('video');

    expect(result).toHaveAttribute('id', 'homePage-video');
  });
});
