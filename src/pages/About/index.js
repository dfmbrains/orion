import React from 'react';
import PromoSection from "../../components/PromoSection";
import AboutSection1 from "./sections/AboutSection1";
import AboutSection2 from "./sections/AboutSection2";
import StatisticsSection from "../../components/StatisticsSection";
import AboutSection3 from "./sections/AboutSection3";
import AboutSection4 from "./sections/AboutSection4";
import AboutSection5 from "./sections/AboutSection5";
import AboutSection6 from "./sections/AboutSection6";
import AboutSection7 from "./sections/AboutSection7";
import AboutSection8 from "./sections/AboutSection8";
import AboutSection9 from "./sections/AboutSection9";
import AboutBg from '../../assets/images/backgrounds/about.png';
import MeetTeamBg from '../../assets/images/backgrounds/meet_team.png';

const About = () => {
   return (
       <>
          <PromoSection title={"About us"} bgImage={AboutBg}/>
          <AboutSection1/>
          <AboutSection2/>
          <StatisticsSection/>
          <AboutSection3/>
          <AboutSection4/>
          <AboutSection5/>
          <AboutSection6/>
          <AboutSection7/>
          <AboutSection8/>
          <AboutSection9/>
          <PromoSection title={"Meet our Team"} bgImage={MeetTeamBg}/>
       </>
   );
};

export default About;