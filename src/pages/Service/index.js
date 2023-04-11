import React from 'react';
import PromoSection from "../../components/PromoSection";
import ServiceBg from '../../assets/images/backgrounds/serviceBg.png';
import ServiceSection1 from "./sections/ServiceSection1";
import EmailFormSection from "../../components/EmailFormSection";
import ServiceSection2 from "./sections/ServiceSection2";

const Service = () => {
   return (
       <>
          <PromoSection title={"Services"} bgImage={ServiceBg}/>
          <ServiceSection1/>
          <ServiceSection2/>
          <EmailFormSection/>
       </>
   );
};

export default Service;