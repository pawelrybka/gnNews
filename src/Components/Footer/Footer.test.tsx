import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const footerText = screen.getByText(/Footer/i);
  const timeText = screen.getByText(new RegExp((new Date()).toLocaleTimeString(), 'i'));
  expect(footerText).toBeInTheDocument();
  expect(timeText).toBeInTheDocument();
});


