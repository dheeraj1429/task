import styled from 'styled-components';

export const BlogCardContainer = styled.div`
   position: relative;
`;

export const BlogImageCard = styled.div<{ backgroundImage: string }>`
   height: 31rem;
   background-position: center;
   background-size: contain;
   background-image: ${(props) => `url(${props.backgroundImage})`};
   background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
   width: 80%;
   position: absolute;
   padding: 1rem;
   right: 0;
   bottom: -3rem;
   background-color: var(--main-cl);
   text-align: start;

   h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
   }

   p {
      font-size: 0.9rem;
      color: var(--gray-cl);
   }

   .icon {
      cursor: pointer;
   }
`;
