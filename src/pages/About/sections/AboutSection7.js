import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import FeatureCard from "../../../components/FeatureCard";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7",
   [theme.breakpoints.down("lg")]: {padding: "70px 0"},

   "& .featureCard": {
      width: "100%"
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

             <Grid container spacing={{lg: 8, md: 5}}>
                {cards.map((el, idx) => (
                    <Grid item md={4} sm={2} key={idx}>
                       <FeatureCard data={el}/>
                    </Grid>
                ))}
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection7;