import ContactBg from 'assets/images/backgrounds/contact.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import ContactContentSection from './sections/ContactContentSection';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    inLanguage: i18n.language,
    url: `https://test.oriontrans.kg/${i18n.language}/contact`,
    name: t('meta.contact.title'),
    description: t('meta.contact.description'),
  };

  return (
    <>
      <MetaTags
        titleKey="meta.contact.title"
        descriptionKey="meta.contact.description"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </MetaTags>

      <PromoSection title={t('contact.promo')} bgImage={ContactBg} />
      {/*<FeaturesSection />*/}
      <ContactContentSection />
    </>
  );
};

export default Contact;
