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

const StyledSection = styled('section')(() => ({
   padding: "100px 0",

   "& .MuiTypography-root": {
      textAlign: "center"
   },
   "& .swiperButtonPrev": {
      position: "absolute",
      top: "50%",
      transform: "translate(-100%, -50%)",
      left: "-10%"
   },
   "& .swiperButtonNext": {
      position: "absolute",
      top: "50%",
      transform: "translate(100%, -50%)",
      right: "-10%"
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
   const theme = useTheme()

   const [team] = useRecoilState(teamRecoil)

   return (
       <StyledSection>
          <OrionContainer>
             {team
                 ? <>
                    <Typography variant={"h3"}><span style={{color: theme.palette.primary.main}}>Our team</span> is a
                       crucial value of our company.</Typography>
                    <Typography width={"50%"} mx={"auto"} variant={"subtitle2"} mt={1}>They are growth for a company,
                       where each of a team member has its special strong personal qualities, and willingness to work
                       and create.</Typography>

                    <Box mx={"auto"} mt={8} sx={{position: "relative", width: "60%"}}>
                       <Swiper className="swiperCustomNavigation"
                               navigation={true}
                               modules={[Navigation]}
                               slidesPerView={2}
                               spaceBetween={50}
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