import { Row } from '../../../../components/grid/Grid';
import { ProfileContainer } from './Profile.style';

function Profile() {
   return (
      <ProfileContainer>
         <Row display="flex">
            <Row width="30%" textAlign="center">
               <img src="/images/user.png" alt="user-image" />
            </Row>
            <Row width="70%">
               <p className="heading">
                  “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re
                  like a partner and mentor in helping us get where we want to be.”
               </p>
               <span>David Calathan - Director of Design Operations, New York</span>
            </Row>
         </Row>
      </ProfileContainer>
   );
}

export default Profile;
