import React from 'react';
import PromoSection from "../../components/PromoSection";
import ClientsBg from '../../assets/images/backgrounds/clients.png';
import ClientsSection1 from "./sections/ClientsSection1";
import TestimonialsSection from "../../components/TestimonialsSection";
import {useTranslation} from "react-i18next";

const Clients = () => {
   const {t} = useTranslation()

   return (
       <>
          <PromoSection bgImage={ClientsBg} title={t('clients.promo')}/>
          <ClientsSection1/>
          <TestimonialsSection/>
       </>
   );
};

export default Clients;