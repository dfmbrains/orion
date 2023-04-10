import React from 'react';
import {Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import OurTeamImg from '../../../assets/images/our_team.png';

const StyledSection = styled('section')(() => ({
   padding: "90px 0",
   backgroundColor: "#F7F7F7",

   "& .aboutSection4Img": {
      width: "80%"
   }
}));

const AboutSection4 = () => {
   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8} alignItems={"center"}>
                <Grid item xs={6}>
                   <Typography mb={2} variant={"h3"}>Our<span
                       style={{color: theme.palette.primary.main}}> Mission</span></Typography>
                   <Typography mb={4} variant={"subtitle2"}>To ensure businesses with all the necessary
                      freight-forwarding services on the market: to be the most secure and trusted freight-forwarding
                      company for the businesses, and to continuously improve the quality level of the services and work
                      approach for the sake of the businesses.</Typography>
                   <Typography mb={2} variant={"h3"}>Our<span style={{color: theme.palette.primary.main}}> Vision</span></Typography>
                   <Typography variant={"subtitle2"}>We see ourselves as the number one secure freight-forwarding
                      company on the logistics market, who ensure new innovative logistics services to our clients and
                      partners and create and develop convenient workplaces our team.</Typography>
                </Grid>
                <Grid item xs={6}>
                   <img className="aboutSection4Img" src={OurTeamImg} alt="our team"/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection4;