import React from 'react';
import OrionContainer from "../../../components/OrionContainer";
import {styled, Typography, useTheme} from "@mui/material";
import {FlexBox} from "../../../components/FlexBox";
import FeatureCard from "../../../components/FeatureCard";
import {Trans, useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   width: "80%",
   margin: "0 auto",
   alignItems: "flex-start",
   gap: "80px 60px",
   flexWrap: "wrap",
   "& .featureCard": {
      width: "calc(100% / 3 - 60px * 2 / 3)"
   }
}));

const ServiceSection2 = () => {
   const translationKey = 'service.section2'
   const {t} = useTranslation()

   const theme = useTheme()

   const cardsData = t(`${translationKey}.list`, {returnObjects: true}) || []

   return (
       <StyledSection>
          <OrionContainer>
             <Typography variant={"h3"} mb={8} textAlign={"center"}>
                <Trans i18nKey={`${translationKey}.title`}
                       components={{span: <span style={{color: theme.palette.primary.main}}>services?</span>}}/>
             </Typography>

             <StyledFlexBox>
                {cardsData.map((el, idx) => (
                    <FeatureCard data={el} key={idx}/>
                ))}
             </StyledFlexBox>
          </OrionContainer>
       </StyledSection>
   );
};

export default ServiceSection2;