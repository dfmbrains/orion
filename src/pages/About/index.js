import React from 'react';
import PromoSection from "../../components/PromoSection";
import AboutSection1 from "./sections/AboutSection1";
import AboutSection2 from "./sections/AboutSection2";
import StatisticsSection from "../../components/StatisticsSection";
import AboutSection3 from "./sections/AboutSection3";
import AboutSection4 from "./sections/AboutSection4";
import AboutSection5 from "./sections/AboutSection5";

const About = () => {
   return (
       <>
          <PromoSection title={"About us"}/>
          <AboutSection1/>
          <AboutSection2/>
          <StatisticsSection/>
          <AboutSection3/>
          <AboutSection4/>
          <AboutSection5/>
       </>
   );
};

export default About;