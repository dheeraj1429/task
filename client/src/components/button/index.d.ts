import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children?: React.ReactNode;
   margin?: string;
   isLoading?: boolean;
}
