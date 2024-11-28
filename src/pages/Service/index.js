import React from 'react';
import PromoSection from '../../components/PromoSection/PromoSection';
import ServiceBg from '../../assets/images/backgrounds/serviceBg.webp';
import ServiceSection1 from './sections/ServiceSection1';
import EmailFormSection from '../../components/EmailFormSection';
import ServiceSection2 from './sections/ServiceSection2';
import { useTranslation } from 'react-i18next';

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
