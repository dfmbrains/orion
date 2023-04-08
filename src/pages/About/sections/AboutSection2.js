import React from 'react';
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

const StyledSection = styled('section')(() => ({
   padding: "120px 0 100px",
   position: "relative",
   backgroundColor: "#F7F7F7",

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
   const theme = useTheme()

   const data = [
      {title: 'Kazakhstan', flag: Kz}, {title: 'Uzbekistan', flag: Uz}, {title: 'Turkmenistan', flag: Tur},
      {title: 'China', flag: China}, {title: 'Russia', flag: Rus}, {title: 'Tajikistan', flag: Tj},
      {title: 'Azerbaijan', flag: Azer}, {title: 'Eastern Europe countries.', flag: Europe},
      {title: 'Afghanistan', flag: Afganistan}, {title: 'Iran', flag: Iran}, {title: 'Baltic Countries', flag: Baltic}
   ]

   return (
       <StyledSection>
          <OrionContainer>
             <Box sx={{position: "relative", zIndex: 2}}>
                <Box sx={{width: "50%"}}>
                   <Typography variant={"h2"} color={theme.palette.primary.main}>Orion-Trans</Typography>
                   <Typography variant={"subtitle2"} mt={3} mb={4}>Orion-Trans is an international modern company of
                      rail
                      freight forwarding services, based in Kyrgyzstan, Bishkek. We met up to make logistics services in
                      more than 20 nations over the globe and have been operating on the market since 2012, thereby have
                      proved to our clients and partners our level of professionalism in the logistics
                      field.</Typography>

                   <Button size={"large"} variant={"outlined"} color={"primary"} sx={{width: "50%"}}>Read Our
                      Story</Button>
                </Box>

                <Box sx={{position: "relative"}}>
                   <Typography variant={"subtitle1"} mt={4} mb={6} fontWeight={"bold"}>Countries we're carrying out
                      international freight forwarding services:</Typography>
                   <Swiper className="swiperCustomNavigation"
                           navigation={true}
                           modules={[Navigation]}
                           slidesPerView={6}
                           spaceBetween={10}
                   >
                      <StyledSwiperButtonsPosition>
                         <SwiperButtons/>
                      </StyledSwiperButtonsPosition>
                      {data.map((el, idx) => (
                          <SwiperSlide key={idx}>
                             <StyledSwiperSlide>
                                <img src={el.flag} alt={el.title}/>
                                <Typography variant={"subtitle1"}>{el.title}</Typography>
                             </StyledSwiperSlide>
                          </SwiperSlide>
                      ))}
                   </Swiper>
                </Box>
             </Box>
          </OrionContainer>

          <img className="mapBg" src={MapBg} alt="map"/>
       </StyledSection>
   );
};

export default AboutSection2;