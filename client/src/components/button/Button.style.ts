import styled from 'styled-components';

export const ButtonCm = styled.button<{ margin?: string }>`
   border-radius: 8px;
   background-color: var(--dark-blue);
   color: var(--main-cl);
   padding: 0.8rem 2rem;
   border: none;
   cursor: pointer;
   font-weight: 600;
   margin: ${(props) => props.margin};
`;
