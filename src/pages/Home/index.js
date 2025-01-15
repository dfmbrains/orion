import Loadable from 'components/Loadable';
import { APP_URL } from 'helpers/constants';
import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import MetaTags from 'seo/MetaTags';
import { companyRecoil } from 'store';
import HomePromo from './sections/HomePromo';

const HomeSection2 = Loadable(lazy(() => import('./sections/HomeSection2')));
const HomeSection3 = Loadable(lazy(() => import('./sections/HomeSection3')));
const HomeSection4 = Loadable(lazy(() => import('./sections/HomeSection4')));
const HomeSection5 = Loadable(lazy(() => import('./sections/HomeSection5')));
const HomeSection6 = Loadable(lazy(() => import('./sections/HomeSection6')));
const HomeSection7 = Loadable(lazy(() => import('./sections/HomeSection7')));
const FeaturesSection = Loadable(
  lazy(() => import('components/FeaturesSection')),
);
const EmailFormSection = Loadable(
  lazy(() => import('components/EmailFormSection')),
);
const StatisticsSection = Loadable(
  lazy(() => import('components/StatisticsSection')),
);

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
    logo: `${window.location.origin}/assets/logoWhite.webp`,
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
