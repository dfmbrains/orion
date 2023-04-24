import React from 'react';
import {Box, Button, Card, Divider, Grid, styled, Typography, useMediaQuery, useTheme} from "@mui/material";
import FreightTriangleBg from '../../../assets/images/freightTriangle.png';
import ContainerFreight from '../../../assets/images/containerFreight.png';
import EllipseBg from '../../../assets/images/ellipse.png';
import OrionContainer from "../../../components/OrionContainer";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../../../helpers/utils";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   position: "relative",
   padding: "120px 0 0",
   overflow: "hidden",
   [theme.breakpoints.down("lg")]: {padding: "100px 0 0"},

   "& .freightTriangleBg": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -2
   },
   "& .ellipseBg": {
      position: "absolute",
      top: '100px',
      left: "50%",
      transform: 'translate(-50%)',
      width: "90%",
      height: "120%",
      zIndex: -1
   },
   "& .containerFreightImg": {
      "& img": {
         width: "100%"
      },
      [theme.breakpoints.down("lg")]: {display: "flex", alignItems: "flex-end"},
   }
}));

const HomeSection2 = () => {
   const translationKey = 'home.section2'

   const navigate = useNavigate()
   const theme = useTheme()
   const {t} = useTranslation()

   const otherServicesList = t(`${translationKey}.otherServices.list`, {returnObjects: true}) || []

   const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={{sm: 4, lg: 8}}>
                <Grid item xs={3.5} className="containerFreightImg">
                   <img src={ContainerFreight} alt={t(`${translationKey}.title`)}/>
                </Grid>
                <Grid item xs={5}>
                   <Box sx={{pb: {sm: 5, lg: 0}}}>
                      <Typography mb={{sm: 3, lg: 6}} variant="h2">{t(`${translationKey}.title`)}</Typography>
                      <Typography mb={{sm: 1, lg: 3}} color={"primary"}
                                  variant="h4">{t(`${translationKey}.subtitle`)}</Typography>
                      <Typography mb={{sm: 1, lg: 3}} variant="body1">{t(`${translationKey}.description`)}</Typography>

                      <Divider/>

                      <Button onClick={() => {
                         handleScrollToTop()
                         navigate('/services')
                      }} sx={{mt: 3}} size={isLaptop ? "medium" : "large"} variant={"contained"}
                              color={"primary"}>{t('buttons.learnMore')}</Button>
                   </Box>
                </Grid>
                <Grid item xs={3.5} sx={{alignSelf: {sm: "flex-start", lg: "center"}}}>
                   <Card sx={{p: {sm: 2, lg: 6}}}>
                      <Typography mb={2} sx={{fontWeight: "bold"}}
                                  variant="h5">{t(`${translationKey}.otherServices.title`)}</Typography>

                      {otherServicesList.map((el, ind) => (
                          <Typography key={ind} mt={ind === 0 ? 0 : 1} variant="body1">{el}</Typography>
                      ))}
                   </Card>
                </Grid>
             </Grid>
          </OrionContainer>
          <img className="freightTriangleBg" src={FreightTriangleBg} alt="triangle"/>
          <img className="ellipseBg" src={EllipseBg} alt="ellipse"/>
       </StyledSection>
   );
};

export default HomeSection2;