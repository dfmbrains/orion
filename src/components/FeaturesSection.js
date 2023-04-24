import React from 'react';
import {styled} from "@mui/material";
import OrionContainer from "./OrionContainer";
import FeatureCard from "./FeatureCard";
import {FlexBox} from "./FlexBox";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "100px 0",
   backgroundColor: "#F7F7F7",
   [theme.breakpoints.down("lg")]: {padding: "60px 0"},
   [theme.breakpoints.down("md")]: {padding: "50px 0 60px"},
   [theme.breakpoints.down("sm")]: {padding: "50px 0"},
}));

const StyledFlexBox = styled(FlexBox)(({theme}) => ({
   alignItems: "flex-start",
   flexWrap: "wrap",
   gap: "40px 60px",
   [theme.breakpoints.down("sm")]: {gap: "30px 0"},

   "& .featureCard": {
      width: "calc(100% / 4 - 60px * 3 / 4)",
      [theme.breakpoints.down("lg")]: {width: "calc(100% / 2 - 60px / 2)"},
      [theme.breakpoints.down("sm")]: {width: "100%"},
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