import React from 'react';
import {Button, Card, Divider, Grid, styled, Typography} from "@mui/material";
import FreightTriangleBg from '../../../assets/images/freightTriangle.png';
import ContainerFreight from '../../../assets/images/containerFreight.png';
import EllipseBg from '../../../assets/images/ellipse.png';
import OrionContainer from "../../../components/OrionContainer";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../../../helpers/utils";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   position: "relative",
   padding: "120px 0 0",
   overflow: "hidden",

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
      width: "100%",
   }
}));

const HomeSection2 = () => {
   const translationKey = 'home.section2'

   const navigate = useNavigate()
   const {t} = useTranslation()

   const otherServicesList = t(`${translationKey}.otherServices.list`, {returnObjects: true}) || []

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8}>
                <Grid item xs={3.5}>
                   <img className="containerFreightImg" src={ContainerFreight} alt={t(`${translationKey}.title`)}/>
                </Grid>
                <Grid item xs={5}>
                   <Typography mb={6} variant="h2">{t(`${translationKey}.title`)}</Typography>
                   <Typography mb={3} color={"primary"} variant="h4">{t(`${translationKey}.subtitle`)}</Typography>
                   <Typography mb={3} variant="body1">{t(`${translationKey}.description`)}</Typography>

                   <Divider/>

                   <Button onClick={() => {
                      handleScrollToTop()
                      navigate('/services')
                   }} sx={{mt: 3}} size={"large"} variant={"contained"}
                           color={"primary"}>{t('buttons.learnMore')}</Button>
                </Grid>
                <Grid item xs={3.5} alignSelf={"center"}>
                   <Card sx={{p: 6}}>
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