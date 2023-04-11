import React from 'react';
import {Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexBox} from "../../../components/FlexBox";
import FeatureCard from "../../../components/FeatureCard";

const StyledSection = styled('section')(() => ({
   padding: "90px 0",
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   justifyContent: "space-between",
   alignItems: "flex-start",
   flexWrap: "wrap",
   rowGap: "50px",

   "& .featureCard": {
      width: "calc(100% / 3 - 80px * 2 / 3)"
   }
}));

const AboutSection8 = () => {
   const cards = [
      {
         title: 'Integrity & Honesty',
         icon: 'health_and_safety'
      },
      {
         title: 'Exceptional Customer Service',
         icon: 'support_agent'
      },
      {
         title: 'Value Our People',
         icon: 'groups'
      },
      {
         title: 'Continuous Improvement',
         icon: 'self_improvement'
      },
      {
         title: 'Value Teamwork',
         icon: 'group_work'
      },
      {
         title: 'Direct Agreements With Railways',
         icon: 'gavel'
      }
   ]

   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container alignItems={"center"}>
                <Grid item xs={4}>
                   <Typography color={theme.palette.primary.main} variant={"h3"}>Our Core Values</Typography>
                </Grid>
                <Grid item xs={8}>
                   <StyledFlexBox>
                      {cards.map((el, idx) => (
                          <React.Fragment key={idx}>
                             <FeatureCard data={el}/>
                          </React.Fragment>
                      ))}
                   </StyledFlexBox>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection8;