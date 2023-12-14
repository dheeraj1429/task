import Navbar from '../../components/navbar/Navbar';
import { HomeContainer } from './Home.style';
import Hero from './components/hero/Hero';
import Responser from './components/responser/Responser';
import Services from './components/services/Services';
import Profile from './components/profile/Profile';
import Blogs from './components/blogs/Blogs';
import Footer from '../../components/footer/Footer';
import { Fragment } from 'react';
import { useGetPostsQuery } from '../../state/features/posts/post.api';

function Home() {
   const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery();
   console.log({ isLoading, isError, isSuccess, data, error });

   return (
      <Fragment>
         <HomeContainer>
            <Navbar />
            <Hero />
            <Responser />
            <Services />
            <Profile />
            <Blogs />
         </HomeContainer>
         <Footer />
      </Fragment>
   );
}

export default Home;
