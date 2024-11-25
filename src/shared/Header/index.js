import React, { useState } from 'react';
import HeaderTop from './components/HeaderTop';
import HeaderGeneral from './components/HeaderGeneral';
import Burger from '../Burger';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = ({ color }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <header id="header">
        <HeaderTop />
        <HeaderGeneral openBurger={() => setIsBurgerOpen(true)} color={color} />
      </header>

      {!isLaptop && (
        <Burger
          isOpen={isBurgerOpen}
          handleClose={() => setIsBurgerOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
