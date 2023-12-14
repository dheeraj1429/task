import { forwardRef } from 'react';
import { GridBox, RowBox } from './Grid.style';
import { GridInterface, RowBoxInterface } from '.';

export const Grid = forwardRef<HTMLDivElement, GridInterface>(({ children, ...props }, ref) => {
   return (
      <GridBox ref={ref} {...props}>
         {children}
      </GridBox>
   );
});

export const Row = forwardRef<HTMLDivElement, RowBoxInterface>(({ children, ...props }, ref) => {
   return (
      <RowBox {...props} ref={ref}>
         {children}
      </RowBox>
   );
});

Grid.displayName = 'Grid';
Row.displayName = 'Row';
