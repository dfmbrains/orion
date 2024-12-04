import React, { lazy } from 'react';
import { styled } from '@mui/material';
import Loadable from '../../../components/Loadable';

const HomePromoSwiper = Loadable(
  lazy(() => import('../components/HomePromoSwiper')),
);

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  // height: 'calc(100vh - 32px)',
  height: '100vh',
  backgroundColor: '#252525',

  // [theme.breakpoints.down('lg')]: { height: 'calc(100vh - 27.15px)' },
  // [theme.breakpoints.down('md')]: { height: 'calc(100vh - 26px)' },
  [theme.breakpoints.down('sm')]: { height: 'calc(75vh)' },

  '& .mySwiperSlide': {
    '& .MuiTypography-root': {
      textAlign: 'center',
      color: '#FFFFFF',
    },
  },

  '& h5': {
    width: '50%',

    [theme.breakpoints.down('lg')]: { width: '75%' },
    [theme.breakpoints.down('md')]: { width: '85%' },
    [theme.breakpoints.down('sm')]: { width: '90%' },
  },

  '& .mySwiper, & .mySwiperSlide': { height: '100%' },

  '& .swiper-button-prev, & .swiper-button-next': {
    [theme.breakpoints.down('sm')]: { display: 'none' },

    '&:after': {
      color: '#FFF',

      [theme.breakpoints.down('lg')]: { fontSize: '36px' },
      [theme.breakpoints.down('md')]: { fontSize: '28px' },
    },
  },
}));

const HomePromo = () => {
  return (
    <StyledSection>
      <HomePromoSwiper />
    </StyledSection>
  );
};

export default HomePromo;
