import { Grid, Row } from '../../../../components/grid/Grid';
import { BlogContainer } from './Blogs.style';
import BlogCard, { BlogCardInterface } from '../blogCard/BlogCard';

const blogsAr: Array<BlogCardInterface> = [
   {
      image: '/images/blog-1.png',
      heading: 'Realtime analytics',
      para: '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ',
   },
   {
      image: '/images/blog-2.png',
      heading: 'Realtime analytics',
      para: '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ',
   },
   {
      image: '/images/blog-3.png',
      heading: 'Realtime analytics',
      para: '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ',
   },
];

function Blogs() {
   return (
      <BlogContainer>
         <Row>
            <h1 className="heading">Our Blogs</h1>
         </Row>
         <Grid col={3} gap="1.5rem">
            {blogsAr.map((item) => (
               <Row textAlign="center" key={item.heading}>
                  <BlogCard {...item} />
               </Row>
            ))}
         </Grid>
      </BlogContainer>
   );
}

export default Blogs;
