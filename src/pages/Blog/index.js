import BlogImg from 'assets/images/backgrounds/news.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import { APP_URL } from 'helpers/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import BlogContentSection from './sections/BlogContentSection';

const Blog = () => {
  const { t,i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    inLanguage: i18n.language,
    url: `${APP_URL}/${i18n.language}/blog`,
    name: t('meta.blogs.title'),
    description: t('meta.blogs.description'),
  };

  return (
    <>
      <MetaTags
        titleKey="meta.blogs.title"
        descriptionKey="meta.blogs.description"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </MetaTags>

      <PromoSection bgImage={BlogImg} title={t('blog.promo')} />
      <BlogContentSection />
    </>
  );
};

export default Blog;
