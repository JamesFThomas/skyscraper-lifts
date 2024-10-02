import userEvent from '@testing-library/user-event';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { renderWithProviders } from '../../utils/TestingWrapper';
import { render, screen, waitFor } from '@testing-library/react';

const About = () => <div>You are on the about page</div>;
const Home = () => <div>You are home</div>;
const NoMatch = () => <div>No match</div>;

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export const App = () => (
  <div>
    <Link to="/">Home</Link>

    <Link to="/about">About</Link>

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>

    <LocationDisplay />
  </div>
);

describe('App testing suite', () => {
  it('Application successfully renders inside a container', async () => {
    renderWithProviders(<App />);
    const homeText = screen.getByText('You are home');
    expect(homeText).toBeInTheDocument();
    await userEvent.click(screen.getByText('About'));
    expect(screen.getByText('You are on the about page')).toBeInTheDocument();

    // screen.findByText('About This Application');
  });
});
