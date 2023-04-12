import React from 'react';
import {styled, Typography} from "@mui/material";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import PromoSlide1 from '../../../assets/images/main.jpg';
import {StyledPromoBackgroundBox, StylePromoColumn} from "../../../components/StyledComponents";

const StyledSection = styled('section')(() => ({
   position: "relative",
   height: "calc(100vh - 32px)",
   backgroundColor: "#252525",

   "& .MuiTypography-root": {
      textAlign: "center",
      color: "#FFFFFF"
   },
   "& h5": {
      width: "50%"
   },
   "& .mySwiper, & .mySwiperSlide": {height: "100%"},
   "& .swiper-button-prev, & .swiper-button-next": {
      "&:after": {
         color: '#FFF'
      }
   }
}));

const HomePromo = () => {
   const slides = [
      {
         title: 'Rail Freight-Forwarding Company: Quality Professional Solutions',
         subtitle: 'No matter from where to where, we identify for you flexible routes and monitor your cargo movements at all stages of supplying',
         bgImage: PromoSlide1
      },
      {
         title: 'Rail Freight-Forwarding Company: Quality Professional Solutions',
         subtitle: 'No matter from where to where, we identify for you flexible routes and monitor your cargo movements at all stages of supplying',
         bgImage: PromoSlide1
      },
      {
         title: 'Rail Freight-Forwarding Company: Quality Professional Solutions',
         subtitle: 'No matter from where to where, we identify for you flexible routes and monitor your cargo movements at all stages of supplying',
         bgImage: PromoSlide1
      }
   ]

   return (
       <StyledSection>
          <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                 delay: 2500,
                 disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
          >
             {slides.map((el, idx) => (
                 <SwiperSlide key={idx} className={"mySwiperSlide"}>
                    <StyledPromoBackgroundBox bgimage={el.bgImage}>
                       <StylePromoColumn>
                          <Typography my={3} variant="h1">{el.title}</Typography>
                          <Typography variant="h5">{el.subtitle}</Typography>
                       </StylePromoColumn>
                    </StyledPromoBackgroundBox>
                 </SwiperSlide>
             ))}
          </Swiper>
       </StyledSection>
   );
};

export default HomePromo;