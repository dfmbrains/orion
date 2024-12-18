import ContactBg from 'assets/images/backgrounds/contact.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactContentSection from './sections/ContactContentSection';

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
