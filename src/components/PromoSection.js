import React from 'react';
import {styled, Typography} from "@mui/material";
import {StyledPromoBackgroundBox, StylePromoColumn} from "./StyledComponents";

const StyledSection = styled('section')(() => ({
   position: "relative",
   height: "55vh",
}));

const PromoSection = ({title, bgImage}) => {
   return (
       <StyledSection>
          <StyledPromoBackgroundBox bgimage={bgImage}>
             <StylePromoColumn>
                <Typography variant="h1">{title}</Typography>
             </StylePromoColumn>
          </StyledPromoBackgroundBox>
       </StyledSection>
   );
};

export default PromoSection;