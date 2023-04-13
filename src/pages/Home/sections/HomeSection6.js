import React, {useState} from 'react';
import {Box, Divider, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import AltynbekImg from '../../../assets/images/team/altynbek.png';
import IlhomImg from '../../../assets/images/team/Ilhom.png';
import AkimImg from '../../../assets/images/team/Akim.png';
import AnvarImg from '../../../assets/images/team/Anvar.png';
import AdiletImg from '../../../assets/images/team/adilet.png';
import MadinaImg from '../../../assets/images/team/madina.png';
import OfficeImg from '../../../assets/images/officePhoto.png';
import {FlexGap10} from "../../../components/FlexBox";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import SwiperButtons from "../../../components/SwiperButtons";
import {StyledSwiperButtonsPosition} from "../../../components/StyledComponents";
import {anchorLinkHandler} from "../../../helpers/utils";

const StyledSection = styled('section')(() => ({
   padding: "90px 0 120px",
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

   "& img": {
      width: "100%",
      height: "100%"
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
   const data = [
      {
         name: 'Altynbek Toktomushev',
         position: 'Senior Logistics Manager & Specialist',
         photo: AltynbekImg,
         description: 'Altynbek  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.  '
      },
      {
         name: 'Ilhom Abdurasulov',
         position: 'Chief Operating Officer',
         photo: IlhomImg,
         description: 'Ilhom  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.  '
      },
      {
         name: 'Anvar Malyanchinov',
         position: 'Senior Logistics Specialist',
         photo: AnvarImg,
         description: 'Anvar  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.  '
      },
      {
         name: 'Akim',
         position: 'Container Freight Specialist',
         photo: AkimImg,
         description: 'Akim  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.  '
      },
      {
         name: 'Madina Abdurasulova',
         position: 'Digital Marketing Specialist',
         photo: MadinaImg,
         description: 'Madina  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.  '
      },
      {
         name: 'Adilet',
         position: 'Senior Logistics Specialist',
         photo: AdiletImg,
         description: 'Adilet  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.  '
      }
   ]

   const theme = useTheme()

   const [active, setActive] = useState(data[0])

   return (
       <StyledSection id="homeTeamSection">
          <OrionContainer>
             <Grid container alignItems={"center"} spacing={5}>
                <Grid item xs={5.95}>
                   <Typography mb={5} variant={"h2"}>These people work to make each freight successful and each the
                      client satisfied</Typography>

                   <Divider/>

                   <FlexGap10 my={3}>
                      <StyledPreviewMemberBox>
                         <img src={active.photo} alt={active.name}/>
                      </StyledPreviewMemberBox>
                      <div>
                         <Typography color={"#9EADB4"} variant={"body1"}>{active.position}</Typography>
                         <Typography variant={"subtitle1"}>{active.name}</Typography>
                      </div>
                   </FlexGap10>
                   <Typography mb={3} variant={"subtitle2"} color={"#332C2C"}>{active.description}</Typography>

                   {/*<Button variant={"outlined"} color={"primary"}>Read More</Button>*/}
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
                   {data.map((el, idx) => (
                       <SwiperSlide key={idx}>
                          <StyledFlexGap10 theme={theme} onClick={() => {
                             anchorLinkHandler('homeTeamSection')
                             setActive(el)
                          }}>
                             <StyledPreviewMemberBox>
                                <img src={el.photo} alt={el.name}/>
                             </StyledPreviewMemberBox>
                             <div>
                                <Typography color={"#9EADB4"} variant={"body1"}>{el.position}</Typography>
                                <Typography variant={"subtitle1"}>{el.name}</Typography>
                             </div>
                          </StyledFlexGap10>
                       </SwiperSlide>
                   ))}
                </Swiper>
             </Box>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection6;