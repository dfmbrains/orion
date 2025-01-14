import AboutBg from 'assets/images/backgrounds/about.webp';
import OurTeamBg from 'assets/images/backgrounds/our_team.webp';
import PromoSection from 'components/PromoSection/PromoSection';
import StatisticsSection from 'components/StatisticsSection';
import TestimonialsSection from 'components/TestimonialsSection';
import { APP_URL } from 'helpers/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from 'seo/MetaTags';
import AboutSection1 from './sections/AboutSection1';
import AboutSection2 from './sections/AboutSection2';
import AboutSection3 from './sections/AboutSection3';
import AboutSection4 from './sections/AboutSection4';
import AboutSection5 from './sections/AboutSection5';
import AboutSection6 from './sections/AboutSection6';
import AboutSection7 from './sections/AboutSection7';
import AboutSection8 from './sections/AboutSection8';
import AboutSection9 from './sections/AboutSection9';

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
