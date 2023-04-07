import React from 'react';
import HeaderTop from "./components/HeaderTop";
import HeaderGeneral from "./components/HeaderGeneral";

const Header = () => {
   return (
       <header>
          <HeaderTop/>
          <HeaderGeneral/>
       </header>
   );
};

export default Header;