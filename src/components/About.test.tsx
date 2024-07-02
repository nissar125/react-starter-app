import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  test('renders about message', () => {
    render(<About />);
    const aboutMessage = screen.getByText(/About the Application/i);
    expect(aboutMessage).toBeInTheDocument();
  });
});