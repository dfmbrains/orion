import React from 'react';
import {Box, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import AltynbekImg from '../../../assets/images/team/altynbek.png';
import IlhomImg from '../../../assets/images/team/Ilhom.png';
import AkimImg from '../../../assets/images/team/Akim.png';
import AnvarImg from '../../../assets/images/team/Anvar.png';
import AdiletImg from '../../../assets/images/team/adilet.png';
import MadinaImg from '../../../assets/images/team/madina.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {SwiperButtonNext, SwiperButtonPrev} from "../../../components/SwiperButtons";

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
   const data = [
      {
         name: 'Altynbek Toktomushev',
         position: 'Senior Logistics Manager & Specialist',
         photo: AltynbekImg,
         description: 'Ilhom is a Chief Operating Office. Ilhom joined the company in 2012 as a logistics specialist and throughout this time, within 10 years he proved his ability to be the leader and connect his career in the logistics industry. Ilhom as our team leader always motivates and inspires his team to work to the very best of their abilities and empowers employees by encouraging them to brainstorm new ideas to find new decisions which affect the efficiency of their work.'
      },
      {
         name: 'Ilhom Abdurasulov',
         position: 'Chief Operating Officer',
         photo: IlhomImg,
         description: 'Ilhom is a Chief Operating Office. Ilhom joined the company in 2012 as a logistics specialist and throughout this time, within 10 years he proved his ability to be the leader and connect his career in the logistics industry. Ilhom as our team leader always motivates and inspires his team to work to the very best of their abilities and empowers employees by encouraging them to brainstorm new ideas to find new decisions which affect the efficiency of their work.'
      },
      {
         name: 'Anvar Malyanchinov',
         position: 'Senior Logistics Specialist',
         photo: AnvarImg,
         description: 'Ilhom is a Chief Operating Office. Ilhom joined the company in 2012 as a logistics specialist and throughout this time, within 10 years he proved his ability to be the leader and connect his career in the logistics industry. Ilhom as our team leader always motivates and inspires his team to work to the very best of their abilities and empowers employees by encouraging them to brainstorm new ideas to find new decisions which affect the efficiency of their work.'
      },
      {
         name: 'Akim',
         position: 'Container Freight Specialist',
         photo: AkimImg,
         description: 'Ilhom is a Chief Operating Office. Ilhom joined the company in 2012 as a logistics specialist and throughout this time, within 10 years he proved his ability to be the leader and connect his career in the logistics industry. Ilhom as our team leader always motivates and inspires his team to work to the very best of their abilities and empowers employees by encouraging them to brainstorm new ideas to find new decisions which affect the efficiency of their work.'
      },
      {
         name: 'Madina Abdurasulova',
         position: 'Digital Marketing Specialist',
         photo: MadinaImg,
         description: 'Ilhom is a Chief Operating Office. Ilhom joined the company in 2012 as a logistics specialist and throughout this time, within 10 years he proved his ability to be the leader and connect his career in the logistics industry. Ilhom as our team leader always motivates and inspires his team to work to the very best of their abilities and empowers employees by encouraging them to brainstorm new ideas to find new decisions which affect the efficiency of their work.'
      },
      {
         name: 'Adilet',
         position: 'Senior Logistics Specialist',
         photo: AdiletImg,
         description: 'Ilhom is a Chief Operating Office. Ilhom joined the company in 2012 as a logistics specialist and throughout this time, within 10 years he proved his ability to be the leader and connect his career in the logistics industry. Ilhom as our team leader always motivates and inspires his team to work to the very best of their abilities and empowers employees by encouraging them to brainstorm new ideas to find new decisions which affect the efficiency of their work.'
      }
   ]

   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Typography variant={"h3"}><span style={{color: theme.palette.primary.main}}>Our team</span> is a crucial
                value of our company.</Typography>
             <Typography width={"50%"} mx={"auto"} variant={"subtitle2"} mt={1}>They are growth for a company, where
                each of a team member has its special strong personal qualities, and willingness to work and
                create.</Typography>

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

                   {data.map((el, idx) => (
                       <SwiperSlide key={idx}>
                          <div>
                             <StyledPreviewMemberBox>
                                <img src={el.photo} alt={el.name}/>
                             </StyledPreviewMemberBox>
                             <Typography mt={1} variant={"subtitle1"}>{el.name}</Typography>
                             <Typography my={1} variant={"body1"}>{el.description}</Typography>
                             <Typography color={"#9EADB4"} variant={"body2"}>{el.position}</Typography>
                          </div>
                       </SwiperSlide>
                   ))}
                </Swiper>
             </Box>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection9;