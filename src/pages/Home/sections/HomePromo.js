import React from 'react';
import {styled, Typography} from "@mui/material";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {FlexAllCenter} from "../../../components/FlexBox";
import PromoSlide1 from '../../../assets/images/main.jpg';
import OrionContainer from "../../../components/OrionContainer";

const StyledSection = styled('section')(() => ({
   position: "relative",
   height: "calc(100vh - 32px)",
   backgroundColor: "#000",

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

const StyledFlexAllCenter = styled(FlexAllCenter)(() => ({
   flexDirection: "column",
   position: "relative",
   zIndex: 10
}));

const StyledSlide = styled(FlexAllCenter)(({bgimage}) => ({
   height: "100%",
   background: `url(${bgimage})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   zIndex: 1,

   "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      backgroundColor: "#00000090",
      height: "100%",
      width: "100%",
      zIndex: 2,
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
                    <StyledSlide bgimage={el.bgImage}>
                       <OrionContainer>
                          <StyledFlexAllCenter>
                             <Typography my={3} variant="h1">{el.title}</Typography>
                             <Typography variant="h5">{el.subtitle}</Typography>
                          </StyledFlexAllCenter>
                       </OrionContainer>
                    </StyledSlide>
                 </SwiperSlide>
             ))}
          </Swiper>
       </StyledSection>
   );
};

export default HomePromo;