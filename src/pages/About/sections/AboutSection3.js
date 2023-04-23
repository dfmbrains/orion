import React from 'react';
import {Button, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexGap10} from "../../../components/FlexBox";
import ClientsImg from '../../../assets/images/partners_and_clients.png';
import {useNavigate} from "react-router-dom";
import {anchorLinkHandler, handleScrollToTop} from "../../../helpers/utils";
import {Trans, useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",

   "& .aboutSection3Img": {
      width: "80%"
   }
}));

const AboutSection3 = () => {
   const translationKey = 'about.section3'
   const {t} = useTranslation()

   const theme = useTheme()
   const navigate = useNavigate()

   const navigateToCalculationForm = async () => {
      await navigate('/')
      await anchorLinkHandler('homeSection3')
   }

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8} alignItems={"center"}>
                <Grid item xs={6}>
                   <Typography mb={5} variant={"h3"}>
                      <Trans i18nKey={`${translationKey}.title`}
                             components={{span: <span style={{color: theme.palette.primary.main}}>offer</span>}}/>
                   </Typography>
                   <Typography mb={4} variant={"subtitle2"}>{t(`${translationKey}.subtitle1`)}</Typography>
                   <Typography mb={5} variant={"subtitle2"}>{t(`${translationKey}.subtitle2`)}</Typography>

                   <FlexGap10>
                      <Button onClick={() => {
                         handleScrollToTop()
                         navigate('/contact')
                      }} variant={"contained"} color={"primary"} size={"large"}>{t('buttons.contactUs')}</Button>
                      <Button onClick={navigateToCalculationForm} variant={"outlined"} color={"primary"}
                              size={"large"}>{t('buttons.calculate')} {t('words.railTariff')}</Button>
                   </FlexGap10>
                </Grid>
                <Grid item xs={6}>
                   <img className="aboutSection3Img" src={ClientsImg} alt="clients"/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   )
       ;
};

export default AboutSection3;