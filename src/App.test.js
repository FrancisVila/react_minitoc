import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => { render(<App />); }); // ex: wrapper = shallow(<Component />);

test('renders the Minitoc', () => {
  
  const linkElement = screen.getByText(/In this page:/i);
  expect(linkElement).toBeInTheDocument();
});




