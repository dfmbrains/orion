import { styled, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Burger from '../Burger';
import HeaderGeneral from './components/HeaderGeneral';
import HeaderTop from './components/HeaderTop';

const StyledHeader = styled('header')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
  width: '100%',
}));

const Header = ({ color }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <StyledHeader id="header">
        <HeaderTop />
        <HeaderGeneral openBurger={() => setIsBurgerOpen(true)} color={color} />
      </StyledHeader>

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
