import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/TestingWrapper';
import App from '../../components/App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
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

    const tags = screen.getAllByRole('link'); // collects all links

    //test length of tags array
    expect(tags.length).toBe(4);

    // Test each link for data-testid && href attribute
    expect(tags[0]).toHaveAttribute('data-testid', 'navbarButton-Home');
    expect(tags[0]).toHaveAttribute('href', '/');
    expect(tags[1]).toHaveAttribute('data-testid', 'navbarButton-About');
    expect(tags[1]).toHaveAttribute('href', '/about');
    expect(tags[2]).toHaveAttribute('data-testid', 'navbarButton-Single');
    expect(tags[2]).toHaveAttribute('href', '/single');
    expect(tags[3]).toHaveAttribute('data-testid', 'navbarButton-Auto');
    expect(tags[3]).toHaveAttribute('href', '/auto');
  });

  // TODO - Fix this test
  // try testing for changes in window pathname
  xit('Clicking Navbar link changes url pathname', async () => {
    const history = createMemoryHistory();

    render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>,
    );
    const user = userEvent.setup();

    const homePageText = screen.getByText('Welcome To My Building');
    expect(homePageText).toBeInTheDocument();
    // const app = screen.getByTestId('applicationContainer');
    // const navBar = screen.getByTestId('navbar-container');

    await user.click(screen.getByText('About'));

    // expect(navBar).toBeInTheDocument();
    const aboutText = screen.getByText('About This Application');
    expect(aboutText).toBeInTheDocument();
    // expect(window.location.pathname).toBe('/about');
  });
});
