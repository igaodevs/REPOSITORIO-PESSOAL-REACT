import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar', () => {
  render(<App />);
  const navbarElement = screen.getByText(/navbar/i);
  expect(navbarElement).toBeInTheDocument();
});
