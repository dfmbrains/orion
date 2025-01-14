import EmailFormSection from 'components/EmailFormSection';
import FeaturesSection from 'components/FeaturesSection';
import StatisticsSection from 'components/StatisticsSection';
import { APP_URL } from 'helpers/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import MetaTags from 'seo/MetaTags';
import { companyRecoil } from 'store';
import HomePromo from './sections/HomePromo';
import HomeSection2 from './sections/HomeSection2';
import HomeSection3 from './sections/HomeSection3';
import HomeSection4 from './sections/HomeSection4';
import HomeSection5 from './sections/HomeSection5';
import HomeSection6 from './sections/HomeSection6';
import HomeSection7 from './sections/HomeSection7';

const Home = () => {
  const { t, i18n } = useTranslation();

  const company = useRecoilValue(companyRecoil);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    inLanguage: i18n.language,
    url: `${APP_URL}/${i18n.language}/home`,
    name: t('meta.home.title'),
    description: t('meta.home.description'),
    logo: `${window.location.origin}/assets/logoWhite.png`,
    foundingDate: '2010',
    sameAs: Object.values(company.socialMedia)
      .map(item => item.link)
      .filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: company.about.phoneNumber1,
        contactType: 'customer service',
      },
      {
        '@type': 'ContactPoint',
        telephone: company.about.phoneNumber2,
        contactType: 'customer service',
      },
    ],
  };

  return (
    <>
      <MetaTags
        titleKey="meta.home.title"
        descriptionKey="meta.home.description"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </MetaTags>

      <HomePromo />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <FeaturesSection />
      <HomeSection5 />
      <StatisticsSection bgcolor="#F7F7F7" />
      <HomeSection6 />
      <HomeSection7 />
      <EmailFormSection />
    </>
  );
};

export default Home;
