import React from 'react';
import {Box, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {SwiperButtonNext, SwiperButtonPrev} from "../../../components/SwiperButtons";
import {useRecoilState} from "recoil";
import {teamRecoil} from "../../../recoil";
import MatxLoading from "../../../components/MatxLoading";
import {formatName} from "../../../helpers/utils";
import {Styled50vhLoadingBox} from "../../../components/StyledComponents";
import {Trans, useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "100px 0",
   [theme.breakpoints.down("lg")]: {padding: "80px 0"},
   [theme.breakpoints.down("lg")]: {padding: "60px 0 70px"},

   "& .MuiTypography-root": {
      textAlign: "center"
   },
   "& .swiperButtonPrev": {
      position: "absolute",
      top: "50%",
      transform: "translate(-100%, -50%)",
      left: "-10%",
      [theme.breakpoints.down("lg")]: {left: "-10px"},
      [theme.breakpoints.down("md")]: {left: "20px"},
      [theme.breakpoints.down("sm")]: {left: "25px"},
   },
   "& .swiperButtonNext": {
      position: "absolute",
      top: "50%",
      transform: "translate(100%, -50%)",
      right: "-10%",
      [theme.breakpoints.down("lg")]: {right: "-10px"},
      [theme.breakpoints.down("lg")]: {right: "20px"},
      [theme.breakpoints.down("sm")]: {right: "25px"},
   }
}));

const StyledPreviewMemberBox = styled('div')(() => ({
   width: "100px",
   height: "100px",
   borderRadius: "50%",
   overflow: "hidden",
   margin: "0 auto",

   "& img": {
      width: "100%",
      height: "100%"
   }
}));

const AboutSection9 = () => {
   const translationKey = 'about.section9'
   const {t} = useTranslation()

   const theme = useTheme()

   const [team] = useRecoilState(teamRecoil)

   return (
       <StyledSection>
          <OrionContainer>
             {team
                 ? <>
                    <Typography variant={"h3"}>
                       <Trans i18nKey={`${translationKey}.title`}
                              components={{span: <span style={{color: theme.palette.primary.main}}>Our team </span>}}/>
                    </Typography>
                    <Typography width={{lg: "50%", md: "80%", xs: "100%"}} mx={"auto"} variant={"subtitle2"}
                                mt={1}>{t(`${translationKey}.subtitle`)}</Typography>

                    <Box mx={"auto"} mt={{lg: 8, md: 6, xs: 4}} px={{sm: 3, xs: 4, lg: 0}}
                         sx={{position: "relative", width: {lg: "60%", md: "80%", xs: "100%"}}}>
                       <Swiper className="swiperCustomNavigation"
                               navigation={true}
                               modules={[Navigation]}
                               slidesPerView={2}
                               spaceBetween={50}
                               breakpoints={{
                                  900: {
                                     spaceBetween: 50,
                                     slidesPerView: 2
                                  },
                                  0: {
                                     spaceBetween: 30,
                                     slidesPerView: 1
                                  }
                               }}
                       >
                          <>
                             <SwiperButtonPrev/>
                             <SwiperButtonNext/>
                          </>

                          {team.map((el, idx) => (
                              <SwiperSlide key={idx}>
                                 <div>
                                    <StyledPreviewMemberBox>
                                       <img src={el.images.file} alt={el.images.name}/>
                                    </StyledPreviewMemberBox>
                                    <Typography mt={1} variant={"subtitle1"}>
                                       {formatName(el.firstName, el.midName, el.lastName)}
                                    </Typography>
                                    <Typography my={1} variant={"body1"}>{el.about}</Typography>
                                    <Typography color={"#9EADB4"} variant={"body2"}>{el.position}</Typography>
                                 </div>
                              </SwiperSlide>
                          ))}
                       </Swiper>
                    </Box>
                 </>
                 : <Styled50vhLoadingBox>
                    <MatxLoading/>
                 </Styled50vhLoadingBox>
             }
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection9;