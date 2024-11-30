import React from 'react';
import {
  StyledPromoBackgroundBox,
  StylePromoColumn,
} from '../StyledComponents';
import { Typography } from '@mui/material';

const PromoSectionContent = ({ title, bgImage }) => {
  return (
    <StyledPromoBackgroundBox bgimage={bgImage}>
      <StylePromoColumn>
        <Typography variant="h1">{title}</Typography>
      </StylePromoColumn>
    </StyledPromoBackgroundBox>
  );
};

export default PromoSectionContent;
