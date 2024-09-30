import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/TestingWrapper';
import App from '../../components/App';

//TODO add tests for Navbar and routes

describe('App testing suite', () => {
  it('Application container successfully renders', () => {
    renderWithProviders(<App />);
    const app = screen.getByTestId('applicationContainer');
    expect(app).toBeInTheDocument();
  });
});
