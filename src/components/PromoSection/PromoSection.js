import React, { lazy, useState } from 'react';
import { styled } from '@mui/material';
import Loadable from '../Loadable';
import Loader from '../Loader';

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <StyledSection>
      <PromoSectionContent title={title} bgImage={bgImage} />
      {!isLoaded && <Loader />}

      <img
        src={bgImage}
        alt="background"
        style={{ display: 'none' }}
        onLoad={() => setIsLoaded(true)}
      />
    </StyledSection>
  );
};

export default PromoSection;
