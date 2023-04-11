import React from 'react';
import PromoSection from "../../components/PromoSection";
import ClientsBg from '../../assets/images/backgrounds/clients.png';
import ClientsSection1 from "./sections/ClientsSection1";
import TestimonialsSection from "../../components/TestimonialsSection";

const Clients = () => {
   return (
       <>
          <PromoSection bgImage={ClientsBg} title={"Clients & Partners"}/>
          <ClientsSection1/>
          <TestimonialsSection/>
       </>
   );
};

export default Clients;