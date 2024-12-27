import ClientsBg from 'assets/images/backgrounds/clients.jpg';
import PromoSection from 'components/PromoSection/PromoSection';
import TestimonialsSection from 'components/TestimonialsSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ClientsSection1 from './sections/ClientsSection1';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <>
      <PromoSection bgImage={ClientsBg} title={t('clients.promo')} />
      <ClientsSection1 />
      <TestimonialsSection />
    </>
  );
};

export default Clients;
