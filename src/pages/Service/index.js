import ServiceBg from 'assets/images/backgrounds/serviceBg2.webp';
import EmailFormSection from 'components/EmailFormSection';
import PromoSection from 'components/PromoSection/PromoSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceSection1 from './sections/ServiceSection1';
import ServiceSection2 from './sections/ServiceSection2';

const Service = () => {
  const { t } = useTranslation();

  return (
    <>
      <PromoSection title={t('service.promo')} bgImage={ServiceBg} />
      <ServiceSection1 />
      <ServiceSection2 />
      <EmailFormSection />
    </>
  );
};

export default Service;
