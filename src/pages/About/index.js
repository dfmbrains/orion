import AboutBg from 'assets/images/backgrounds/about.webp';
import OurTeamBg from 'assets/images/backgrounds/our_team.webp';
import Loadable from 'components/Loadable';
import PromoSection from 'components/PromoSection/PromoSection';
import { APP_URL } from 'helpers/constants';
import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';

const AboutSection1 = Loadable(lazy(() => import('./sections/AboutSection1')));
const AboutSection2 = Loadable(lazy(() => import('./sections/AboutSection2')));
const AboutSection3 = Loadable(lazy(() => import('./sections/AboutSection3')));
const AboutSection4 = Loadable(lazy(() => import('./sections/AboutSection4')));
const AboutSection5 = Loadable(lazy(() => import('./sections/AboutSection5')));
const AboutSection6 = Loadable(lazy(() => import('./sections/AboutSection6')));
const AboutSection7 = Loadable(lazy(() => import('./sections/AboutSection7')));
const AboutSection8 = Loadable(lazy(() => import('./sections/AboutSection8')));
const AboutSection9 = Loadable(lazy(() => import('./sections/AboutSection9')));
const StatisticsSection = Loadable(
  lazy(() => import('components/StatisticsSection')),
);
const TestimonialsSection = Loadable(
  lazy(() => import('components/TestimonialsSection')),
);

const About = () => {
  const { t, i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: i18n.language,
    url: `${APP_URL}/${i18n.language}/about`,
    name: t('meta.about.title'),
    description: t('meta.about.description'),
  };

  return (
    <>
      <MetaTags
        titleKey="meta.about.title"
        descriptionKey="meta.about.description"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </MetaTags>

      <PromoSection title={t('about.promo1')} bgImage={AboutBg} />
      <AboutSection1 />
      <AboutSection2 />
      <StatisticsSection />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
      <AboutSection8 />
      <TestimonialsSection />
      <PromoSection
        isFullHeight
        title={t('about.promo2')}
        bgImage={OurTeamBg}
      />
      <AboutSection9 />
    </>
  );
};

export default About;
