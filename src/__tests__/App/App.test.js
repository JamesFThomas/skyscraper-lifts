import { render, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/TestingWrapper';
import App from '../../components/App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('App testing suite', () => {
  it('Application successfully renders inside a container', () => {
    renderWithProviders(<App />);
    const app = screen.getByTestId('applicationContainer');
    expect(app).toBeInTheDocument();
  });

  it('Application renders with Navbar visible', () => {
    renderWithProviders(<App />);
    const app = screen.getByTestId('applicationContainer');
    const navBar = screen.getByTestId('navbar-container');

    expect(app).toBeInTheDocument();
    expect(navBar).toBeInTheDocument();
  });

  it('Application renders Navbar with 4 links', async () => {
    renderWithProviders(<App />);

    const tags = screen.getAllByTestId(/navbarButton-/i); // collects all links

    expect(tags.length).toBe(4);

    // Test each link for data-testid && href attribute
    expect(tags[0]).toHaveAttribute('data-testid', 'navbarButton-Home');
    expect(tags[0]).toHaveAttribute('to', '/');
    expect(tags[1]).toHaveAttribute('data-testid', 'navbarButton-About');
    expect(tags[1]).toHaveAttribute('to', '/about');
    expect(tags[2]).toHaveAttribute('data-testid', 'navbarButton-Single');
    expect(tags[2]).toHaveAttribute('to', '/single');
    expect(tags[3]).toHaveAttribute('data-testid', 'navbarButton-Auto');
    expect(tags[3]).toHaveAttribute('to', '/auto');
  });

  it('Manual setting of url renders correct page - render', async () => {
    const route = '/about';

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    );

    await screen.findByText('About This Application');
  });

  it('Component renders about page when url is /about - renderWithProviders', async () => {
    const route = '/about';

    renderWithProviders(<App />, route);

    await screen.findByText('About This Application');
  });

  it('Component renders home page when url is /', async () => {
    const route = '/';

    renderWithProviders(<App />, route);

    await screen.findByText('Welcome To My Building');
  });

  // TODO - Fix this test
  xit('Component should render Home then About page', async () => {
    const user = userEvent.setup();
    const route = '/';

    renderWithProviders(<App />, route);

    await screen.findByText('Welcome To My Building');

    user.click(screen.getByText('About'));

    await screen.findByText('About This Application');
  });
});
