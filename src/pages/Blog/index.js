import BlogImg from 'assets/images/backgrounds/news.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogContentSection from './sections/BlogContentSection';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <PromoSection bgImage={BlogImg} title={t('blog.promo')} />
      <BlogContentSection />
    </>
  );
};

export default Blog;
