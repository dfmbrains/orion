import ClientsBg from 'assets/images/backgrounds/clients.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import TestimonialsSection from 'components/TestimonialsSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import ClientsSection1 from './sections/ClientsSection1';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags
        titleKey="meta.clients.title"
        descriptionKey="meta.clients.description"
      />

      <PromoSection bgImage={ClientsBg} title={t('clients.promo')} />
      <ClientsSection1 />
      <TestimonialsSection />
    </>
  );
};

export default Clients;
