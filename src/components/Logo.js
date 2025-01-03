import { styled } from '@mui/material';
import LogoWhite from 'assets/images/logoWhite.png';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(() => ({
  display: 'flex',
}));
const StyledImg = styled('img')(({ theme }) => ({
  width: 196,
  [theme.breakpoints.down('lg')]: { width: 160 },
  [theme.breakpoints.down('md')]: { width: 140 },
  [theme.breakpoints.down('sm')]: { width: 130 },
}));

export const Logo = () => {
  return (
    <StyledLink to={'/'}>
      <StyledImg src={LogoWhite} alt="Orion Trans" />
    </StyledLink>
  );
};
