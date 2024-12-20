import EmailFormSection from 'components/EmailFormSection';
import FeaturesSection from 'components/FeaturesSection';
import StatisticsSection from 'components/StatisticsSection';
import React from 'react';
import HomePromo from './sections/HomePromo';
import HomeSection2 from './sections/HomeSection2';
import HomeSection3 from './sections/HomeSection3';
import HomeSection4 from './sections/HomeSection4';
import HomeSection5 from './sections/HomeSection5';
import HomeSection6 from './sections/HomeSection6';
import HomeSection7 from './sections/HomeSection7';

const Home = () => {
  return (
    <>
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
