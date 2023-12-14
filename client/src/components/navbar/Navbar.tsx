import { NavBarLinkInterface } from '.';
import { NavInnerList, NavLinkContainer, NavList, NavbarContainer, NavbarLogoContainer } from './Navbar.style';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const navAr: Array<NavBarLinkInterface> = [
   { name: 'About', link: '/' },
   { name: 'Services', link: '/' },
   { name: 'Projects', link: '/' },
];

function Navbar() {
   return (
      <NavbarContainer>
         <NavbarLogoContainer>
            <img src="/images/logo.png" alt="logo-image" />
            <p className="navbar_logo_heading">Digital agency</p>
         </NavbarLogoContainer>
         <NavLinkContainer>
            <NavList>
               {navAr.map((el) => (
                  <Link to={el.link}>
                     <NavInnerList key={el.name}>{el.name}</NavInnerList>
                  </Link>
               ))}
               <Button>Get in Touch</Button>
            </NavList>
         </NavLinkContainer>
      </NavbarContainer>
   );
}

export default Navbar;
