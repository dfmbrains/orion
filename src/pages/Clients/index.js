import ClientsBg from 'assets/images/backgrounds/clients.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import TestimonialsSection from 'components/TestimonialsSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import ClientsSection1 from './sections/ClientsSection1';

const Clients = () => {
  const { t, i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    inLanguage: i18n.language,
    url: `https://test.oriontrans.kg/${i18n.language}/clients-&-partners`,
    name: t('meta.clients.title'),
    description: t('meta.clients.description'),
  };

  return (
    <>
      <MetaTags
        titleKey="meta.clients.title"
        descriptionKey="meta.clients.description"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </MetaTags>

      <PromoSection bgImage={ClientsBg} title={t('clients.promo')} />
      <ClientsSection1 />
      <TestimonialsSection />
    </>
  );
};

export default Clients;
