import React from 'react';
import PromoSection from "../../components/PromoSection";
import BlogImg from '../../assets/images/backgrounds/news.png';
import BlogContentSection from "./sections/BlogContentSection";

const Blog = () => {
   return (
       <>
          <PromoSection bgImage={BlogImg} title={'Blogs & News'}/>
          <BlogContentSection/>
       </>
   );
};

export default Blog;