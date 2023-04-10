import React from 'react';
import {Box, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexGap10} from "../../../components/FlexBox";
import OrenbiImg from '../../../assets/images/companies/orenbiTrading.png';
import {Navigation} from "swiper";
import {StyledSwiperButtonsPosition} from "../../../components/StyledComponents";
import SwiperButtons from "../../../components/SwiperButtons";
import {Swiper, SwiperSlide} from "swiper/react";

const StyledSection = styled('section')(() => ({
   padding: "70px 0 90px",
   backgroundColor: "#F7F7F7"
}));

const StyledImageBox = styled('div')(() => ({
   width: "90px",
   height: "90px",
   borderRadius: "50%",
   overflow: "hidden",
   marginRight: "15px",

   "& img": {
      width: "100%",
      height: "100%",
   }
}));

const AboutSection7 = () => {
   const testimonials = [
      {
         text: '“The most distinctive features of “Orion-Trans LLC ” is their business approach, a high staff professionalism and a strong team spirit. This company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans  LLC” as a reliable and stable partner.”',
         company: "Orenbi Trading LLC",
         name: 'Alina Alekseevna Bukreeva',
         logo: OrenbiImg
      },
      {
         text: '“The most distinctive features of “Orion-Trans LLC ” is their business approach, a high staff professionalism and a strong team spirit. This company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans  LLC” as a reliable and stable partner.”',
         company: "Orenbi Trading LLC 2",
         name: 'Alina Alekseevna Bukreeva 2',
         logo: OrenbiImg
      },
      {
         text: '“The most distinctive features of “Orion-Trans LLC ” is their business approach, a high staff professionalism and a strong team spirit. This company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans  LLC” as a reliable and stable partner.”',
         company: "Orenbi Trading LLC 3",
         name: 'Alina Alekseevna Bukreeva 3',
         logo: OrenbiImg
      }
   ]

   return (
       <StyledSection>
          <OrionContainer>
             <Box sx={{position: "relative"}}>
                <Typography variant={"h3"} mb={8}>Testimonials</Typography>

                <Swiper className="swiperCustomNavigation"
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={2}
                        spaceBetween={50}
                >
                   <StyledSwiperButtonsPosition>
                      <SwiperButtons/>
                   </StyledSwiperButtonsPosition>

                   {testimonials.map((el, idx) => (
                       <SwiperSlide key={idx}>
                          <FlexGap10>
                             <StyledImageBox>
                                <img src={el.logo} alt={el.company}/>
                             </StyledImageBox>
                             <div>
                                <Typography variant={"body1"} color={"#9EADB4"}>{el.company}</Typography>
                                <Typography variant={"subtitle1"}>{el.name}</Typography>
                             </div>
                          </FlexGap10>
                          <Typography className={"justify-text"} mt={3} variant={"subtitle1"}>{el.text}</Typography>
                       </SwiperSlide>
                   ))}
                </Swiper>
             </Box>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection7;