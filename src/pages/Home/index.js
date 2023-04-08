import React from 'react';
import HomePromo from "./sections/HomePromo";
import HomeSection2 from "./sections/HomeSection2";
import HomeSection3 from "./sections/HomeSection3";
import HomeSection4 from "./sections/HomeSection4";
import HomeSection5 from "./sections/HomeSection5";
import HomeSection6 from "./sections/HomeSection6";
import StatisticsSection from "../../components/StatisticsSection";
import HomeSection7 from "./sections/HomeSection7";
import HomeSection8 from "./sections/HomeSection8";

const Home = () => {
   return (
       <>
          <HomePromo/>
          <HomeSection2/>
          <HomeSection3/>
          <HomeSection4/>
          <HomeSection5/>
          <HomeSection6/>
          <StatisticsSection bgcolor={"#F7F7F7"}/>
          <HomeSection7/>
          <HomeSection8/>
       </>
   );
};

export default Home;