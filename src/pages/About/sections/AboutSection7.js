import React from 'react';
import {styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexBox} from "../../../components/FlexBox";
import FeatureCard from "../../../components/FeatureCard";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   justifyContent: "space-between",
   alignItems: "flex-start",
   flexWrap: "wrap",
   rowGap: "40px",

   "& .featureCard": {
      width: "calc(100% / 3 - 80px * 2 / 3)"
   }
}));

const AboutSection7 = () => {
   const translationKey = 'about.section7'
   const {t} = useTranslation()

   const cards = t(`${translationKey}.list`, {returnObjects: true}) || []

   return (
       <StyledSection>
          <OrionContainer>
             <Typography mb={10} variant={"h2"} textAlign={"center"}>{t(`${translationKey}.title`)}</Typography>

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

export default AboutSection7;