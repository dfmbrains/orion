import React from 'react';
import {Divider, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import TeamImg from '../../../assets/images/team.png';
import {FlexBox} from "../../../components/FlexBox";

const StyledSection = styled('section')(() => ({
   padding: "50px 0",

   "& .aboutSection5Img": {
      width: "80%",
      marginTop: "28px"
   },
   "& .aboutSection5Objectives": {
      backgroundColor: "#F7F7F7",
      padding: "15px 30px",
      "&:not(:last-child)": {
         marginBottom: "10px"
      }
   }
}));

const AboutSection5 = () => {
   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={5}>
                <Grid item xs={6}>
                   <FlexBox sx={{height: "100%"}}>
                      <div>
                         <Typography mb={4} variant={"h3"}>Our<span
                             style={{color: theme.palette.primary.main}}> Goal</span></Typography>
                         <Typography pb={3} width={"80%"} variant={"subtitle2"}>Efficiently organize and accompany rail
                            freight transportation, creating a fast, convenient and accessible rail
                            freight.</Typography>
                         <Divider/>
                         <img className="aboutSection5Img" src={TeamImg} alt="team"/>
                      </div>
                      <Divider orientation={"vertical"} flexItem/>
                   </FlexBox>
                </Grid>
                <Grid item xs={6}>
                   <Typography mb={3} variant={"h3"}>Our<span
                       style={{color: theme.palette.primary.main}}> Objectives</span></Typography>

                   <Typography className={"aboutSection5Objectives"} variant={"subtitle1"}>Create an efficient chain of
                      partnership with the railways, transport companies, and other freight-forwarding
                      companies.</Typography>
                   <Typography className={"aboutSection5Objectives"} variant={"subtitle1"}>Continuously improve the
                      quality level of professionalism and skills of our team - logistics specialists.</Typography>
                   <Typography className={"aboutSection5Objectives"} variant={"subtitle1"}>Enhance the quality of
                      customer services and meet their requests</Typography>
                   <Typography className={"aboutSection5Objectives"} variant={"subtitle1"}>Integrating and developing
                      the modern innovative technology to create more efficient and accessible freight-forwarding
                      solutions for our clients and partners.</Typography>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection5;