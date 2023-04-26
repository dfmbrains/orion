import React from 'react';
import {Box, styled, Typography} from "@mui/material";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import OrionContainer from "./OrionContainer";
import {Styled50vhLoadingBox, StyledSwiperButtonsPosition} from "./StyledComponents";
import SwiperButtons from "./SwiperButtons";
import {useRecoilState} from "recoil";
import {reviewsRecoil} from "../recoil";
import MatxLoading from "./MatxLoading";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "70px 0 90px",
   backgroundColor: "#F7F7F7"
}));

const TestimonialsSection = () => {
   const {t} = useTranslation()

   const [reviews] = useRecoilState(reviewsRecoil)

   return (
       <StyledSection id="testimonialsSection">
          <OrionContainer>
             <Box sx={{position: "relative"}}>
                <Typography variant={"h3"} mb={{lg: 8, md: 6, xs: 4}}>{t('testimonialsSection.title')}</Typography>

                {reviews
                    ? <Swiper className="swiperCustomNavigation"
                              navigation={true}
                              modules={[Navigation]}
                              slidesPerView={2}
                              spaceBetween={50}
                    >
                       <StyledSwiperButtonsPosition>
                          <SwiperButtons/>
                       </StyledSwiperButtonsPosition>

                       {reviews.map(el => (
                           <SwiperSlide key={el.id}>
                              <Typography variant={"body1"} color={"#9EADB4"}>{el?.company || ''}</Typography>
                              <Typography variant={"h5"}>{el.name}</Typography>
                              <Typography className={"justify-text"} mt={{md: 3, xs: 1.5}}
                                          variant={"subtitle1"}>{el.text}</Typography>
                           </SwiperSlide>
                       ))}
                    </Swiper>
                    : <Styled50vhLoadingBox>
                       <MatxLoading/>
                    </Styled50vhLoadingBox>
                }
             </Box>
          </OrionContainer>
       </StyledSection>
   );
};

export default TestimonialsSection;