import { ServicesContainer, ServicesGridContainer } from './Services.style';
import { Grid, Row } from '../../../../components/grid/Grid';
import ServicesCard, { ServicesCardInterface } from '../servicesCard/ServicesCard';
import Button from '../../../../components/button/Button';

const cardAr: Array<ServicesCardInterface> = [
   {
      icon: '/svg/mobile.svg',
      heading: 'App Development',
      para: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
   },
   {
      icon: '/svg/earth.svg',
      heading: 'Web Designing',
      para: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
   },
   {
      icon: '/svg/pen.svg',
      heading: 'Graphic Designing',
      para: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
   },
   {
      icon: '/svg/order.svg',
      heading: 'Digital Marketing',
      para: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
   },
];

function Services() {
   return (
      <ServicesContainer>
         <Row textAlign="center">
            <h1 className="heading">Explore Our Services</h1>
            <p className="sm-para">We are self-service data analytics software that lets you create visually.</p>
         </Row>
         <ServicesGridContainer>
            <Grid col={4}>
               {cardAr.map((item) => (
                  <ServicesCard key={item.heading} {...item} />
               ))}
            </Grid>
         </ServicesGridContainer>
         <Row padding="2rem 0" textAlign="center">
            <Button>Learn More</Button>
         </Row>
      </ServicesContainer>
   );
}

export default Services;
