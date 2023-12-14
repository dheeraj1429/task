import styled from 'styled-components';

export const NavbarContainer = styled.div`
   width: 100%;
   padding: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const NavbarLogoContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;

   .navbar_logo_heading {
      font-size: 1.5rem;
      color: var(--dark);
      font-weight: 700;
      margin: 0;
   }
`;

export const NavLinkContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.8rem;
`;

export const NavList = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
   display: flex;
   align-items: center;
   gap: 1.8rem;
`;

export const NavInnerList = styled.li`
   cursor: pointer;
   text-decoration: none;
   color: var(--dark-cl);
`;
