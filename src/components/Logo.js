import { styled } from '@mui/material';
import LogoWhite from 'assets/images/logoWhite.png';
import LanguageLink from 'components/LanguageLink';
import React from 'react';

const StyledImg = styled('img')(({ theme }) => ({
  width: 196,
  [theme.breakpoints.down('lg')]: { width: 160 },
  [theme.breakpoints.down('md')]: { width: 140 },
  [theme.breakpoints.down('sm')]: { width: 130 },
}));

export const Logo = () => {
  return (
    <LanguageLink to="/home" style={{ display: 'flex' }}>
      <StyledImg src={LogoWhite} alt="Orion-Trans" />
    </LanguageLink>
  );
};
