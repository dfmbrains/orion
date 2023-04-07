import React from 'react';
import {Container, styled, Typography} from "@mui/material";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {FlexAllCenter} from "../../../components/FlexBox";
import PromoSlide1 from '../../../assets/images/main.jpg';

const StyledSection = styled('section')(() => ({
   position: "relative",
   height: "calc(100vh - 32px)",
   backgroundColor: "#000",

   "& .MuiTypography-root": {
      textAlign: "center",
      color: "#FFFFFF"
   },
   "& h4": {
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
   height: "100%",
   flexDirection: "column",
   position: "relative",
   zIndex: 10
}));

const StyledSlide = styled(FlexAllCenter)(({bgImage}) => ({
   height: "100%",
   background: `url(${bgImage})`,
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
                    <StyledSlide bgImage={el.bgImage}>
                       <Container sx={{height: "100%"}}>
                          <StyledFlexAllCenter bgImage={el.bgImage}>
                             <Typography my={3} variant="h1">{el.title}</Typography>
                             <Typography variant="h4">{el.subtitle}</Typography>
                          </StyledFlexAllCenter>
                       </Container>
                    </StyledSlide>
                 </SwiperSlide>
             ))}
          </Swiper>
       </StyledSection>
   );
};

export default HomePromo;