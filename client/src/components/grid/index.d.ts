import React from 'react';
import { StyleInterface } from '../../shared/types';

export interface GridInterface extends React.HtmlHTMLAttributes<HTMLDivElement>, StyleInterface {
   children?: React.ReactNode;
}
export interface RowBoxInterface extends React.HtmlHTMLAttributes<HTMLDivElement>, StyleInterface {
   children?: React.ReactNode;
}
export interface GridBoxInterface extends StyleInterface {}
export interface RowInterface extends StyleInterface {}
