import React, {useState} from 'react';
import {Box, Button, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import MapBg from '../../../assets/images/mapTransparent.png';
import {Navigation} from "swiper";
import {StyledSwiperButtonsPosition} from "../../../components/StyledComponents";
import SwiperButtons from "../../../components/SwiperButtons";
import {Swiper, SwiperSlide} from "swiper/react";
import Baltic from '../../../assets/images/countries/baltic.png'
import Afganistan from '../../../assets/images/countries/af.png'
import Azer from '../../../assets/images/countries/az.png'
import China from '../../../assets/images/countries/cn.png'
import Europe from '../../../assets/images/countries/eu.png'
import Iran from '../../../assets/images/countries/ir.png'
import Kz from '../../../assets/images/countries/kz.png'
import Rus from '../../../assets/images/countries/ru.png'
import Tj from '../../../assets/images/countries/tj.png'
import Tur from '../../../assets/images/countries/tur.png'
import Uz from '../../../assets/images/countries/uz.png'
import CompanyHistoryDialog from "../components/CompanyHistoryDialog";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "120px 0 100px",
   position: "relative",
   backgroundColor: "#F7F7F7",
   [theme.breakpoints.down("lg")]: {padding: "90px 0"},

   "& .mapBg": {
      position: "absolute",
      top: "50%",
      right: "3%",
      transform: "translate(0, -50%)",
      width: "55%"
   }
}));

const StyledSwiperSlide = styled('div')(() => ({
   "& img": {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      margin: "0 0 15px"
   }
}));

const AboutSection2 = () => {
   const translationKey = 'about.section2'
   const {t} = useTranslation()

   const theme = useTheme()
   const [isOpenDialog, setIsOpenDialog] = useState(false)

   const handleCloseDialog = () => setIsOpenDialog(false)

   const countries = t('countries', {returnObjects: true})
   const countriesImg = [China, Kz, Uz, Rus, Tur, Tj, Europe, Afganistan, Iran, Baltic, Azer]

   return (
       <StyledSection>
          <OrionContainer>
             <Box sx={{position: "relative", zIndex: 2}}>
                <Box sx={{width: "50%"}}>
                   <Typography variant={"h2"} color={theme.palette.primary.main}>{t('orionTrans')}</Typography>
                   <Typography variant={"subtitle2"} mt={3} mb={4}>{t(`${translationKey}.subtitle1`)}</Typography>

                   <Button onClick={() => setIsOpenDialog(true)} size={"large"} variant={"outlined"} color={"primary"}
                           sx={{width: "50%"}}>{t('buttons.readOurStory')}</Button>
                </Box>

                <Box sx={{position: "relative"}}>
                   <Typography variant={"subtitle1"} mt={4} mb={6}
                               fontWeight={"bold"}>{t(`${translationKey}.subtitle2`)}</Typography>
                   <Swiper className="swiperCustomNavigation"
                           navigation={true}
                           modules={[Navigation]}
                           slidesPerView={6}
                           spaceBetween={10}
                           breakpoints={{
                              1200: {
                                 spaceBetween: 10,
                                 slidesPerView: 6
                              },
                              900: {
                                 spaceBetween: 10,
                                 slidesPerView: 5
                              }
                           }}
                   >
                      <StyledSwiperButtonsPosition>
                         <SwiperButtons/>
                      </StyledSwiperButtonsPosition>
                      {countries.map((el, idx) => (
                          <SwiperSlide key={idx}>
                             <StyledSwiperSlide>
                                <img src={countriesImg[idx]} alt={el}/>
                                <Typography variant={"subtitle1"}>{el}</Typography>
                             </StyledSwiperSlide>
                          </SwiperSlide>
                      ))}
                   </Swiper>
                </Box>
             </Box>
          </OrionContainer>

          <img className="mapBg" src={MapBg} alt="map"/>

          <CompanyHistoryDialog open={isOpenDialog} handleClose={handleCloseDialog}/>
       </StyledSection>
   );
};

export default AboutSection2;