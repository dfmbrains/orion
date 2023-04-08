import React from 'react';
import PromoSection from "../../components/PromoSection";
import AboutSection1 from "./sections/AboutSection1";
import AboutSection2 from "./sections/AboutSection2";
import StatisticsSection from "../../components/StatisticsSection";

const About = () => {
   return (
       <>
          <PromoSection title={"About us"}/>
          <AboutSection1/>
          <AboutSection2/>
          <StatisticsSection/>
       </>
   );
};

export default About;