import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('should button component', () => {
   it('renders children correctly', () => {
      render(<Button>button</Button>);
      expect(screen.getByText('button')).toBeInTheDocument();
   });

   it('forwards the ref', () => {
      const mockRef = { current: null };
      render(<Button ref={mockRef}>Click me</Button>);
      expect(mockRef.current).toBeInTheDocument();
   });

   it('handles user click event', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      userEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
   });

   it('renders with a specific class name', () => {
      render(<Button className="custom-class">Custom Button</Button>);
      expect(screen.getByText('Custom Button')).toHaveClass('custom-class');
   });

   it('handles keyboard events', () => {
      const handleKeyPress = jest.fn();
      render(<Button onKeyPress={handleKeyPress}>Press me</Button>);
      userEvent.type(screen.getByText('Press me'), '{enter}');
      expect(handleKeyPress).toHaveBeenCalledTimes(1);
   });

   it('renders with a loading state', async () => {
      render(<Button isLoading>Loading...</Button>);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
   });
});
