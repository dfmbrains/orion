import React from 'react';
import {Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import OurTeamImg from '../../../assets/images/our_team.png';
import {Trans, useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "90px 0",
   backgroundColor: "#F7F7F7",

   "& .aboutSection4Img": {
      width: "80%"
   }
}));

const AboutSection4 = () => {
   const translationKey = 'about.section4'
   const {t} = useTranslation()

   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8} alignItems={"center"}>
                <Grid item xs={6}>
                   <Typography mb={2} variant={"h3"}>
                      <Trans i18nKey={`${translationKey}.title1`}
                             components={{span: <span style={{color: theme.palette.primary.main}}>Mission</span>}}/>
                   </Typography>
                   <Typography mb={4} variant={"subtitle2"}>{t(`${translationKey}.subtitle1`)}</Typography>

                   <Typography mb={2} variant={"h3"}>
                      <Trans i18nKey={`${translationKey}.title2`}
                             components={{span: <span style={{color: theme.palette.primary.main}}>Vision</span>}}/>
                   </Typography>
                   <Typography variant={"subtitle2"}>{t(`${translationKey}.subtitle2`)}</Typography>
                </Grid>
                <Grid item xs={6}>
                   <img className="aboutSection4Img" src={OurTeamImg} alt="our team"/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection4;