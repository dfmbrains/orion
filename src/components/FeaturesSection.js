import React from 'react';
import {styled} from "@mui/material";
import OrionContainer from "./OrionContainer";
import FeatureCard from "./FeatureCard";
import {FlexBox} from "./FlexBox";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "100px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   justifyContent: "space-between",
   alignItems: "flex-start",

   "& .featureCard": {
      width: "calc(100% / 4 - 60px * 3 / 4)"
   }
}));

const FeaturesSection = () => {
   const {t} = useTranslation()

   const cards = t('featuresSection', {returnObjects: true}) || []

   return (
       <StyledSection>
          <OrionContainer>
             <StyledFlexBox>
                {cards.map((el, idx) => (
                    <React.Fragment key={idx}>
                       <FeatureCard data={el}/>
                    </React.Fragment>
                ))}
             </StyledFlexBox>
          </OrionContainer>
       </StyledSection>
   );
};

export default FeaturesSection;