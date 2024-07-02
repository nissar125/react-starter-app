import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderFooter from './Headerfooter';

// Mocking Link component from react-router-dom to avoid issues in tests
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => (
    <a href={to} {...props}>{children}</a>
  ),
}));

describe('HeaderFooter Component', () => {
  test('renders application name in the header', () => {
    render(
      <Router>
        <HeaderFooter />
      </Router>
    );
    const headerElement = screen.getByText(/Application Name/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders menu items', () => {
    render(
      <Router>
        <HeaderFooter />
      </Router>
    );
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const gridLink = screen.getByText(/Grid/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(gridLink).toBeInTheDocument();
  });

  test('renders footer with correct text', () => {
    render(
      <Router>
        <HeaderFooter />
      </Router>
    );
    const footerElement = screen.getByText(/© 2024 AT&T. All Rights Reserved/i);
    expect(footerElement).toBeInTheDocument();
  });
});