import styled from 'styled-components';
import { GridBoxInterface, RowInterface } from '.';

export const GridBox = styled.div<GridBoxInterface>`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: ${(props) => `repeat(${props.col}, 1fr)`};
   gap: ${(props) => props.gap};
`;

export const RowBox = styled.div<RowInterface>`
   width: ${(props) => props.width || '100%'};
   height: 100%;
   justify-content: ${(props) => props.justifyContent};
   align-items: ${(props) => props.alignItems};
   display: ${(props) => props.display};
   text-align: ${(props) => props.textAlign};
   padding: ${(props) => props.padding};
   gap: ${(props) => props.gap};
`;
