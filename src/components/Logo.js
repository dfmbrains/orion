import { styled } from '@mui/material';
import LogoWhite from 'assets/images/logoWhite.webp';
import React from 'react';

const StyledImg = styled('img')(({ theme }) => ({
  width: 196,
  height: 'auto',

  [theme.breakpoints.down('lg')]: { width: 160 },
  [theme.breakpoints.down('md')]: { width: 140 },
  [theme.breakpoints.down('sm')]: { width: 130 },
}));

export const Logo = () => {
  return <StyledImg src={LogoWhite} alt="Orion-Trans" />;
};
