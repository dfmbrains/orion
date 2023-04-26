import React from 'react';
import {Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import FeatureCard from "../../../components/FeatureCard";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "90px 0",
   [theme.breakpoints.down("lg")]: {padding: "70px 0"},
}));

const AboutSection8 = () => {
   const translationKey = 'about.section8'
   const {t} = useTranslation()

   const cards = t(`${translationKey}.list`, {returnObjects: true}) || []

   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container alignItems={"center"} spacing={{lg: 3, xs: 2}}>
                <Grid item xs={4}>
                   <Typography color={theme.palette.primary.main}
                               variant={"h3"}>{t(`${translationKey}.title`)}</Typography>
                </Grid>
                <Grid item xs={8}>
                   <Grid container spacing={{lg: 3, xs: 2}}>
                      {cards.map((el, idx) => (
                          <Grid item md={4} sm={2} key={idx}>
                             <FeatureCard data={el}/>
                          </Grid>
                      ))}
                   </Grid>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection8;