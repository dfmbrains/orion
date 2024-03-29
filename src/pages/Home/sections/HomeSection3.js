import React from 'react';
import OrionContainer from "../../../components/OrionContainer";
import {Card, Divider, styled, Typography} from "@mui/material";
import CalculateForm from "../components/CalculateForm";
import MapBg from '../../../assets/images/map.webp';
import {useTranslation} from "react-i18next";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperButtonNext, SwiperButtonPrev} from "../../../components/SwiperButtons";

const StyledSection = styled('section')(({theme}) => ({
   padding: "0 0 120px",
   background: "#EEF8FF",
   [theme.breakpoints.down("lg")]: {padding: "0 0 80px"},
   [theme.breakpoints.down("md")]: {padding: "0 0 50px"},
}));

const StyledContentBox = styled('div')(({theme}) => ({
   position: "relative",
   display: "flex",
   alignItems: "center",
   padding: "0 50px",
   width: "100%",
   [theme.breakpoints.down("lg")]: {padding: "0 30px"},
   [theme.breakpoints.down("md")]: {flexWrap: "wrap"},
   [theme.breakpoints.down("sm")]: {padding: "0"},

   "& .mapBg": {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "0",
      [theme.breakpoints.down("md")]: {height: "38%"},
      [theme.breakpoints.down("sm")]: {height: "43%"},
   }
}));

const StyledSwiperBox = styled('div')(({theme}) => ({
   position: "relative",
   "& .swiperButtonPrev, & .swiperButtonNext": {
      minWidth: "auto", width: "28px", height: "28px",
      [theme.breakpoints.down("sm")]: {display: "none"},
   },
   "& .swiperButtonPrev": {
      position: "absolute",
      top: "calc(100% + 10px)",
      left: "0"
   },
   "& .swiperButtonNext": {
      position: "absolute",
      top: "calc(100% + 10px)",
      transform: "translate(100%)",
      left: "10px"
   },
}));

const StyledCountryItem = styled('div')(({theme}) => ({
   background: "#e8f1fd",
   textAlign: "center",
   padding: "15px",
   borderRadius: "15px",
   whiteSpace: "nowrap",
   [theme.breakpoints.down("lg")]: {padding: "8px 10px"},
}));

const StyledIntroBox = styled('div')(({theme}) => ({
   position: "relative",
   padding: "150px 0",
   zIndex: 1,
   width: "45%",
   [theme.breakpoints.down("lg")]: {width: "48%", padding: "60px 0"},
   [theme.breakpoints.down("md")]: {width: "100%", padding: "30px 0"},
   [theme.breakpoints.down("sm")]: {padding: "30px 20px"},
}));

const StyledCalculateCard = styled(Card)(({theme}) => ({
   position: "absolute",
   right: '5%',
   top: '50%',
   transform: "translate(0, -50%)",
   borderRadius: "15px",
   zIndex: 1,
   width: "40%",
   [theme.breakpoints.down("lg")]: {width: "45%", right: "30px"},
   [theme.breakpoints.down("md")]: {
      margin: "50px 0 0",
      width: "100%",
      position: "static",
      transform: "unset",
      top: "unset",
      right: "unset",
      overflow: "unset"
   },
   [theme.breakpoints.down("sm")]: {margin: "30px 0 0"},
}));

const StyledCalculateItem = styled('div')(({theme}) => ({
   paddingLeft: "32px",
   paddingRight: "32px",
   [theme.breakpoints.down("lg")]: {paddingLeft: "16px", paddingRight: "16px",},
}));

const HomeSection3 = () => {
   const translationKey = 'home.section3'
   const {t} = useTranslation()

   const countries = t('countries', {returnObjects: true}) || []

   return (
       <StyledSection id={"homeSection3"}>
          <OrionContainer>
             <StyledContentBox>
                <StyledIntroBox>
                   <Typography mb={3} variant={"h3"}>{t(`${translationKey}.title`)}</Typography>
                   <Typography mb={3} variant={"subtitle2"}>{t(`${translationKey}.subtitle`)}</Typography>
                   <Typography mb={2} variant={"subtitle2"}>{t(`${translationKey}.description`)}</Typography>

                   <StyledSwiperBox>
                      <Swiper className="swiperCustomNavigation"
                              navigation={true}
                              modules={[Navigation]}
                              slidesPerView={3}
                              spaceBetween={15}
                              breakpoints={{
                                 600: {
                                    spaceBetween: 15,
                                    slidesPerView: 3
                                 },
                                 0: {
                                    spaceBetween: 15,
                                    slidesPerView: 2
                                 }
                              }}
                      >
                         <>
                            <SwiperButtonPrev/>
                            <SwiperButtonNext/>
                         </>

                         {countries.map((el, idx) => (
                             <SwiperSlide key={idx}>
                                <StyledCountryItem key={idx}>
                                   <Typography variant={"subtitle2"}>{el}</Typography>
                                </StyledCountryItem>
                             </SwiperSlide>
                         ))}
                      </Swiper>
                   </StyledSwiperBox>
                </StyledIntroBox>

                <StyledCalculateCard>
                   <StyledCalculateItem sx={{pt: {lg: 6, sm: 3, xs: 2}, mb: {lg: 4, sm: 2, xs: 1}}}>
                      <Typography variant={"h5"}>{t(`${translationKey}.calculation.title`)}</Typography>
                   </StyledCalculateItem>

                   <Divider color={"#F18200"}/>

                   <StyledCalculateItem sx={{pb: {lg: 6, xs: 3}, mt: {lg: 4, xs: 2}}}>
                      <CalculateForm translationKey={translationKey}/>
                   </StyledCalculateItem>
                </StyledCalculateCard>

                <img src={MapBg} alt="map" className="mapBg"/>
             </StyledContentBox>
          </OrionContainer>
       </StyledSection>
   )
       ;
};

export default HomeSection3;