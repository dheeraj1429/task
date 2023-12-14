import { Grid, Row } from '../grid/Grid';
import { FooterContainer, IconContainer } from './Footer.style';

// we can also create a single array for this, and use the type.

type IconAr = { src: string };
type LinkAr = { name: string };
const iconAr: Array<IconAr> = [{ src: '/svg/tw.svg' }, { src: '/svg/in.svg' }, { src: '/svg/fc.svg' }];
const companyAr: Array<LinkAr> = [{ name: 'About' }, { name: 'Features' }, { name: 'Works' }, { name: 'Career' }];
const helpAr: Array<LinkAr> = [
   { name: 'Customer Support' },
   { name: 'Delivery Details' },
   { name: 'Terms & Conditions' },
   { name: 'Privacy Policy' },
];
const resourcesAr: Array<LinkAr> = [{ name: 'Free eBooksl' }, { name: 'How to - Blog' }];

function Footer() {
   return (
      <FooterContainer>
         <Row display="flex" gap="2rem">
            <Row width="45%">
               <Row>
                  <h5>Digital agency</h5>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                     sodales in volutpat ullamcorper amet adipiscing fermentum.
                  </p>
                  <IconContainer>
                     {iconAr.map((el) => (
                        <img key={el.src} src={el.src} alt="icon" />
                     ))}
                  </IconContainer>
               </Row>
            </Row>
            <Row width="55%">
               <Grid col={3}>
                  <Row>
                     <h1 className="heading">Company</h1>
                     {companyAr.map((el) => (
                        <p key={el?.name}>{el?.name}</p>
                     ))}
                  </Row>
                  <Row>
                     <h1 className="heading">Help</h1>
                     {helpAr.map((el) => (
                        <p key={el?.name}>{el?.name}</p>
                     ))}
                  </Row>
                  <Row>
                     <h1 className="heading">Resources</h1>
                     {resourcesAr.map((el) => (
                        <p key={el?.name}>{el?.name}</p>
                     ))}
                  </Row>
               </Grid>
            </Row>
         </Row>
      </FooterContainer>
   );
}

export default Footer;
