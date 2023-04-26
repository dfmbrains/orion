import React from 'react';
import PromoSection from "../../components/PromoSection";
import BlogImg from '../../assets/images/backgrounds/news.webp';
import BlogContentSection from "./sections/BlogContentSection";
import {useTranslation} from "react-i18next";

const Blog = () => {
   const {t} = useTranslation()

   return (
       <>
          <PromoSection bgImage={BlogImg} title={t('blog.promo')}/>
          <BlogContentSection/>
       </>
   );
};

export default Blog;