import React, { forwardRef } from 'react';
import { ButtonCm } from './Button.style';
import { ButtonProps } from '.';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ isLoading, children, ...props }, ref): React.JSX.Element => {
   return (
      <ButtonCm ref={ref} {...props}>
         {isLoading ? 'Loading...' : children}
      </ButtonCm>
   );
});

Button.displayName = 'Button';
export default Button;
