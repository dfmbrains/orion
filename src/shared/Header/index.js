import React from 'react';
import HeaderTop from './components/HeaderTop';
import HeaderGeneral from './components/HeaderGeneral';

const Header = ({ color }) => {
  return (
    <header id="header">
      <HeaderTop />
      <HeaderGeneral color={color} />
    </header>
  );
};

export default Header;
