import React from 'react';
import {Button, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexGap10} from "../../../components/FlexBox";
import ClientsImg from '../../../assets/images/partners_and_clients.png';

const StyledSection = styled('section')(() => ({
   padding: "80px 0",

   "& .aboutSection3Img": {
      width: "80%"
   }
}));

const AboutSection3 = () => {
   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8} alignItems={"center"}>
                <Grid item xs={6}>
                   <Typography mb={5} variant={"h3"}>What we<span
                       style={{color: theme.palette.primary.main}}> offer</span></Typography>
                   <Typography mb={4} variant={"subtitle2"}>We offer to our clients the most actionable solutions in
                      freight-forwarding services. Our team of professional logistics specialists will develop a plan of
                      the whole transportation arrangement for your business.</Typography>
                   <Typography mb={5} variant={"subtitle2"}>We will calculate for you all of the necessary rail
                      freight-forwarding tariffs across more than 20 countries, by import, export, transit and internal
                      consignment and find for you a needed rolling stock to ship your cargo.</Typography>
                   <FlexGap10>
                      <Button variant={"contained"} color={"primary"} size={"large"}>Contact Us</Button>
                      <Button variant={"outlined"} color={"primary"} size={"large"}>Calculate A Rail Tariff</Button>
                   </FlexGap10>
                </Grid>
                <Grid item xs={6}>
                   <img className="aboutSection3Img" src={ClientsImg} alt="clients"/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection3;