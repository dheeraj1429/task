import styled from 'styled-components';

export const FooterContainer = styled.section`
   padding: 4rem 5rem;
   background-color: var(--dark);

   h5 {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--main-cl);
   }

   p {
      font-size: 0.9rem;
      color: var(--gray-cl);
      margin-top: 1rem;
   }

   .heading {
      color: var(--main-cl);
      font-size: 1rem;
   }
`;

export const IconContainer = styled.div`
   display: flex;
   margin-top: 1rem;
   gap: 1rem;
`;
