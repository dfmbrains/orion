import React, {useEffect, useState} from 'react';
import {Box, Divider, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import OfficeImg from '../../../assets/images/officePhoto.png';
import {FlexGap10} from "../../../components/FlexBox";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import SwiperButtons from "../../../components/SwiperButtons";
import {StyledSwiperButtonsPosition} from "../../../components/StyledComponents";
import {anchorLinkHandler, formatName} from "../../../helpers/utils";
import MatxLoading from "../../../components/MatxLoading";
import {useRecoilState} from "recoil";
import {teamRecoil} from "../../../recoil";

const StyledSection = styled('section')(() => ({
   padding: "90px 0 120px",
   position: "relative"
}));

const StyledImageBox = styled('div')(() => ({
   "& img": {
      width: "100%"
   }
}));

const StyledPreviewMemberBox = styled('div')(() => ({
   width: "100px",
   height: "100px",
   borderRadius: "50%",
   overflow: "hidden",
   position: "relative",
   minWidth: "100px",

   "& img": {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "100%",
      minHeight: "100%",
      maxWidth: "130%",
      maxHeight: "130%"
   }
}));

const StyledFlexGap10 = styled(FlexGap10)(({theme}) => ({
   cursor: "pointer",

   "& .MuiTypography-subtitle1": {
      borderBottom: "3px solid transparent",
      transition: "0.3s"
   },
   "&:hover": {
      "& .MuiTypography-subtitle1": {
         borderColor: theme.palette.primary.main
      }
   }
}));

const HomeSection6 = () => {
   const theme = useTheme()

   const [team] = useRecoilState(teamRecoil)

   const [active, setActive] = useState(null)

   useEffect(() => {
      if (team) {
         setActive(team[0])
      }
   }, [team])

   return (
       <StyledSection id="homeTeamSection">
          <OrionContainer>
             {team && active
                 ? <>
                    <Grid container alignItems={"center"} spacing={5}>
                       <Grid item xs={5.95}>
                          <Typography mb={5} variant={"h2"}>These people work to make each freight successful and each
                             the client satisfied</Typography>

                          <Divider/>

                          <FlexGap10 my={3}>
                             <StyledPreviewMemberBox>
                                <img src={active.photo.file} alt={active.photo.name}/>
                             </StyledPreviewMemberBox>
                             <div>
                                <Typography color={"#9EADB4"} variant={"body1"}>{active.position}</Typography>
                                <Typography variant={"subtitle1"}>
                                   {formatName(active.firstName, active.midName, active.lastName)}
                                </Typography>
                             </div>
                          </FlexGap10>
                          <Typography mb={3} variant={"subtitle2"} color={"#332C2C"}>{active.about}</Typography>
                       </Grid>

                       <Divider orientation={"vertical"} flexItem/>

                       <Grid item xs={5.95}>
                          <StyledImageBox>
                             <img src={OfficeImg} alt="office"/>
                          </StyledImageBox>
                       </Grid>
                    </Grid>

                    <Box mt={8} sx={{position: "relative"}}>
                       <Typography variant={"h2"} mb={5}>Meet the team</Typography>
                       <Swiper className="swiperCustomNavigation"
                               navigation={true}
                               modules={[Navigation]}
                               slidesPerView={4}
                               spaceBetween={20}
                       >
                          <StyledSwiperButtonsPosition>
                             <SwiperButtons/>
                          </StyledSwiperButtonsPosition>
                          {team.map((el, idx) => (
                              <SwiperSlide key={idx}>
                                 <StyledFlexGap10 theme={theme} onClick={() => {
                                    anchorLinkHandler('homeTeamSection')
                                    setActive(el)
                                 }}>
                                    <StyledPreviewMemberBox>
                                       <img src={el.photo.file} alt={el.photo.name}/>
                                    </StyledPreviewMemberBox>
                                    <div>
                                       <Typography color={"#9EADB4"} variant={"body1"}>{el.position}</Typography>
                                       <Typography variant={"subtitle1"} sx={{wordBreak: "break-all"}}>
                                          {formatName(el.firstName, '', el.lastName)}
                                       </Typography>
                                    </div>
                                 </StyledFlexGap10>
                              </SwiperSlide>
                          ))}
                       </Swiper>
                    </Box>
                 </>
                 : <MatxLoading/>
             }
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection6;