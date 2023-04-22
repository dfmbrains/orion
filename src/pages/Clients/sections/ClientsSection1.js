import React, {useState} from 'react';
import {Box, Button, ButtonGroup, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {Navigation} from "swiper";
import {StyledSwiperButtonsPosition} from "../../../components/StyledComponents";
import SwiperButtons from "../../../components/SwiperButtons";
import {Swiper, SwiperSlide} from "swiper/react";
import {FlexAllCenter} from "../../../components/FlexBox";
import {useRecoilState} from "recoil";
import {partnersRecoil} from "../../../recoil";

const StyledSection = styled('section')(() => ({
   padding: "90px 0 160px",
}));

const StyledImageBox = styled(FlexAllCenter)(() => ({
   height: "100px",
   overflow: "hidden",

   "& img": {
      minHeight: "100%"
   }
}));

const ClientsSection1 = () => {
   const theme = useTheme()

   const [part, setPart] = useState('clients')

   const [partnersList] = useRecoilState(partnersRecoil)

   return (
       <StyledSection>
          <OrionContainer>
             <ButtonGroup>
                <Button color={part === 'clients' ? "primary" : "info"} variant={"text"}
                        onClick={() => setPart('clients')}>Clients.</Button>
                <Button color={part === 'partners' ? "primary" : "info"} variant={"text"}
                        onClick={() => setPart('partners')}>Partners.</Button>
                <Button href={'#testimonialsSection'} color={"info"} variant={"text"}>Testimonials.</Button>
             </ButtonGroup>

             <Typography mt={4} mb={5} variant={"h2"}>We Work With The <br/> Best <span
                 style={{color: theme.palette.primary.main, textTransform: "capitalize"}}>{part}.</span></Typography>

             <Typography variant={"subtitle2"}>The use of railroads and trains to convey cargo on land is known as rail
                freight transport. Rail transport is popular, especially in continents with extensive journey durations,
                such as China, Russia, the United States and Europe. Freight trains can transport a variety of cargo,
                including freight containers, automobiles, cattle, grains, coal, minerals and metals. Bulk goods,
                standardized shipping containers, or particularly constructed carriages for a specific sort of freight
                can all be transported by freight trains. Rail freight travels far more quickly than ocean freight. It
                costs more than sea freight, but less than air freight. Moving high-value industrial products like
                automobiles, electronics, and computer equipment, as well as promotional items, by train is
                ideal.</Typography>


             <Box mt={6} pt={10} sx={{position: "relative"}}>
                <Swiper className="swiperCustomNavigation"
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={20}
                >
                   <StyledSwiperButtonsPosition>
                      <SwiperButtons/>
                   </StyledSwiperButtonsPosition>

                   {partnersList.map(el => (
                       <SwiperSlide key={el.id}>
                          <StyledImageBox>
                             <img src={el.images.file} alt={el.images.name}/>
                          </StyledImageBox>
                       </SwiperSlide>
                   ))}
                </Swiper>
             </Box>
          </OrionContainer>
       </StyledSection>
   );
};

export default ClientsSection1;