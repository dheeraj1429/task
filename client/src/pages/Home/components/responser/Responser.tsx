import { ResponserContainer } from './Responser.style';
import { Grid, Row } from '../../../../components/grid/Grid';

const imagesAr = [
   { src: '/images/logo1.png' },
   { src: '/images/logo2.png' },
   { src: '/images/logo3.png' },
   { src: '/images/logo4.png' },
   { src: '/images/logo5.png' },
];

function Responser() {
   return (
      <ResponserContainer>
         <p className="para">Powering next-gen companies</p>
         <Grid col={5}>
            {imagesAr.map((el) => (
               <Row display="flex" alignItems="center" justifyContent="center" key={el.src}>
                  <img src={el.src} alt="logo-image" />
               </Row>
            ))}
         </Grid>
      </ResponserContainer>
   );
}

export default Responser;
