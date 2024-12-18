import { Typography } from '@mui/material';
import React from 'react';
import {
  StyledPromoBackgroundBox,
  StylePromoColumn,
} from '../StyledComponents';

const PromoSectionContent = ({ title, bgImage }) => {
  return (
    <StyledPromoBackgroundBox bgimage={bgImage}>
      <StylePromoColumn>
        <Typography mt="30px" variant="h1">
          {title}
        </Typography>
      </StylePromoColumn>
    </StyledPromoBackgroundBox>
  );
};

export default PromoSectionContent;
