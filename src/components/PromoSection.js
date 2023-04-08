import React from 'react';
import {styled, Typography} from "@mui/material";
import AboutBg from '../assets/images/backgrounds/about.png';
import {StyledPromoBackgroundBox, StylePromoColumn} from "./StyledComponents";

const StyledSection = styled('section')(() => ({
   position: "relative",
   height: "calc(50vh - 32px / 2)",
}));

const PromoSection = ({title}) => {
   return (
       <StyledSection>
          <StyledPromoBackgroundBox bgimage={AboutBg}>
             <StylePromoColumn>
                <Typography variant="h1">{title}</Typography>
             </StylePromoColumn>
          </StyledPromoBackgroundBox>
       </StyledSection>
   );
};

export default PromoSection;