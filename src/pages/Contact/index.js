import React from 'react';
import PromoSection from "../../components/PromoSection";
import ContactBg from '../../assets/images/backgrounds/contact.png';
import FeaturesSection from "../../components/FeaturesSection";
import ContactContentSection from "./sections/ContactContentSection";

const Contact = () => {
   return (
       <>
          <PromoSection title={"Contact us"} bgImage={ContactBg}/>
          <FeaturesSection/>
          <ContactContentSection/>
       </>
   );
};

export default Contact;