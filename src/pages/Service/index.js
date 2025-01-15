import ServiceBg from 'assets/images/backgrounds/serviceBg2.webp';
import EmailFormSection from 'components/EmailFormSection';
import PromoSection from 'components/PromoSection/PromoSection';
import { APP_URL } from 'helpers/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import ServiceSection1 from './sections/ServiceSection1';
import ServiceSection2 from './sections/ServiceSection2';

// const ServiceSection1 = Loadable(
//   lazy(() => import('./sections/ServiceSection1')),
// );
// const ServiceSection2 = Loadable(
//   lazy(() => import('./sections/ServiceSection2')),
// );
// const EmailFormSection = Loadable(
//   lazy(() => import('components/EmailFormSection')),
// );

const Service = () => {
  const { t, i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    inLanguage: i18n.language,
    url: `${APP_URL}/${i18n.language}/services`,
    name: t('meta.services.title'),
    description: t('meta.services.description'),
  };

  return (
    <>
      <MetaTags
        titleKey="meta.services.title"
        descriptionKey="meta.services.description"
        additionalTags={
          <link
            as="image"
            rel="preload"
            type="image/webp"
            href="./assets/images/backgrounds/serviceBg2.webp"
          />
        }
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
