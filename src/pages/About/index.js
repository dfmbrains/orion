import React from 'react';
import PromoSection from '../../components/PromoSection/PromoSection';
import StatisticsSection from '../../components/StatisticsSection';
import AboutBg from '../../assets/images/backgrounds/about.webp';
import MeetTeamBg from '../../assets/images/backgrounds/meet_team.webp';
import TestimonialsSection from '../../components/TestimonialsSection';
import AboutSection1 from './sections/AboutSection1';
import AboutSection2 from './sections/AboutSection2';
import AboutSection3 from './sections/AboutSection3';
import AboutSection4 from './sections/AboutSection4';
import AboutSection5 from './sections/AboutSection5';
import AboutSection6 from './sections/AboutSection6';
import AboutSection7 from './sections/AboutSection7';
import AboutSection8 from './sections/AboutSection8';
import AboutSection9 from './sections/AboutSection9';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
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
      <PromoSection title={t('about.promo2')} bgImage={MeetTeamBg} />
      <AboutSection9 />
    </>
  );
};

export default About;
