import ServiceBg from 'assets/images/backgrounds/serviceBg2.webp';
import EmailFormSection from 'components/EmailFormSection';
import PromoSection from 'components/PromoSection/PromoSection';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import ServiceSection1 from './sections/ServiceSection1';
import ServiceSection2 from './sections/ServiceSection2';

const Service = () => {
  const { t, i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    inLanguage: i18n.language,
    url: `https://test.oriontrans.kg/${i18n.language}/services`,
    name: t('meta.services.title'),
    description: t('meta.services.description'),
  };

  return (
    <>
      <MetaTags
        titleKey="meta.services.title"
        descriptionKey="meta.services.description"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </MetaTags>

      <PromoSection title={t('service.promo')} bgImage={ServiceBg} />
      <ServiceSection1 />
      <ServiceSection2 />
      <EmailFormSection />
    </>
  );
};

export default Service;
