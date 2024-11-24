import React from 'react';
import { styled, Typography } from '@mui/material';
import { StyledPromoBackgroundBox, StylePromoColumn } from './StyledComponents';

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  height: '55vh',
  [theme.breakpoints.down('md')]: { height: '50vh' },
  [theme.breakpoints.down('sm')]: { height: '35vh' },
}));

const PromoSection = ({ title, bgImage }) => {
  return (
    <StyledSection>
      <StyledPromoBackgroundBox bgimage={bgImage}>
        <StylePromoColumn>
          <Typography variant="h1" textTransform={'capitalize'}>
            {title}
          </Typography>
        </StylePromoColumn>
      </StyledPromoBackgroundBox>
    </StyledSection>
  );
};

export default PromoSection;
