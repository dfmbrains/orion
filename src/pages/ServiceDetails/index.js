import React from 'react';
import PromoSection from "../../components/PromoSection";
import ServiceDetailsBg from '../../assets/images/backgrounds/serviceDetails.png';
import EmailFormSection from "../../components/EmailFormSection";
import ServiceDetailsContent from "./sections/ServiceDetailsContent";

const ServiceDetails = () => {
   return (
       <>
          <PromoSection bgImage={ServiceDetailsBg} title={"Export-Import And Transit Rail Rates Payments"}/>
          <ServiceDetailsContent/>
          <EmailFormSection/>
       </>
   );
};

export default ServiceDetails;