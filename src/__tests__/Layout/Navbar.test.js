/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from '@testing-library/react';
import NavBar from '../../components/layout/Navbar';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar testing suite', () => {
  it('Component successfully renders', () => {
    render(<NavBar />);
    const container = screen.getByTestId('navbar-container');
    expect(container).toBeTruthy();
  });
  it('Component renders with 4 links that have proper hrefs', () => {
    render(<NavBar />);
    const buttons = screen.getAllByRole('link');

    // check array length, link names, and href values
    expect(buttons).toHaveLength(4);
    expect(buttons[0]).toHaveTextContent('Skyscraper Lifts');
    expect(buttons[0]).toHaveAttribute('href', '/');
    expect(buttons[1]).toHaveTextContent('About');
    expect(buttons[1]).toHaveAttribute('href', '/about');
    expect(buttons[2]).toHaveTextContent('Single');
    expect(buttons[2]).toHaveAttribute('href', '/single');
    expect(buttons[3]).toHaveTextContent('Auto');
    expect(buttons[3]).toHaveAttribute('href', '/auto');
  });
});
