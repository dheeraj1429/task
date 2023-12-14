import { ServicesCardContainer } from './ServicesCard.style';

export interface ServicesCardInterface {
   icon: string;
   heading: string;
   para: string;
}

function ServicesCard({ icon, heading, para }: ServicesCardInterface) {
   return (
      <ServicesCardContainer>
         <img src={icon} alt="services-icon" />
         <h1>{heading}</h1>
         <p>{para}</p>
      </ServicesCardContainer>
   );
}

export default ServicesCard;
