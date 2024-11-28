import React, { lazy } from 'react';
import { styled } from '@mui/material';
import Loadable from '../Loadable';

const PromoSectionContent = Loadable(
  lazy(() => import('./PromoSectionContent')),
);

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  height: '55vh',
  [theme.breakpoints.down('md')]: { height: '50vh' },
  [theme.breakpoints.down('sm')]: { height: '35vh' },
}));

const PromoSection = ({ title, bgImage }) => {
  return (
    <StyledSection>
      <PromoSectionContent title={title} bgImage={bgImage} />
    </StyledSection>
  );
};

export default PromoSection;
