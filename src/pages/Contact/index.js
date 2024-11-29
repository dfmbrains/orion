import React from 'react';
import PromoSection from '../../components/PromoSection/PromoSection';
import ContactBg from '../../assets/images/backgrounds/contact.webp';
import ContactContentSection from './sections/ContactContentSection';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <PromoSection title={t('contact.promo')} bgImage={ContactBg} />
      {/*<FeaturesSection />*/}
      <ContactContentSection />
    </>
  );
};

export default Contact;
