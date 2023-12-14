import React from 'react';
import { BlogCardContainer, BlogImageCard, ContentContainer } from './BlogCard.style';
import { Row } from '../../../../components/grid/Grid';

export interface BlogCardInterface extends React.HtmlHTMLAttributes<HTMLDivElement> {
   image: string;
   heading: string;
   para: string;
}

function BlogCard({ image, heading, para }: BlogCardInterface) {
   return (
      <BlogCardContainer>
         <BlogImageCard backgroundImage={image} />
         <ContentContainer>
            <h1>{heading}</h1>
            <p>{para}</p>
            <Row padding="1rem" display="flex" justifyContent="end">
               <img className="icon" src="/svg/arrow.svg" alt="arrow" />
            </Row>
         </ContentContainer>
      </BlogCardContainer>
   );
}

export default BlogCard;
