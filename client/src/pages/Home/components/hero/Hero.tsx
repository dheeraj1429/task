import { HeroContainer } from './Hero.style';
import { Grid, Row } from '../../../../components/grid/Grid';
import Button from '../../../../components/button/Button';

function Hero() {
   return (
      <HeroContainer>
         <Grid gap={'2rem'} col={2}>
            <Row>
               <h1 className="hero-heading">
                  Building Brands in the <span className="sp-heading">Digital Age</span>
               </h1>
               <p className="hero-para">
                  Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored
                  solutions that drive results and elevate your brand to new heights.
               </p>
               <Button margin="1rem 0">Learn More</Button>
            </Row>
            <Row justifyContent="end" display="flex" alignItems="center">
               <img src="/images/hero-image.png" alt="hero-image" />
            </Row>
         </Grid>
      </HeroContainer>
   );
}

export default Hero;
