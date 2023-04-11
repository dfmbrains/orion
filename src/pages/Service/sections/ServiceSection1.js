import React from 'react';
import {Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import ServiceCard from "../components/ServiceCard";
import {FlexBox} from "../../../components/FlexBox";

const StyledSection = styled('section')(() => ({
   padding: "120px 0"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   gap: "60px 30px",
   flexWrap: "wrap",

   "& .serviceCard": {
      width: "calc(100% / 4 - 30px * 3 / 4)"
   },
   "& .serviceCardImg": {
      height: "100px"
   }
}));

const ServiceSection1 = () => {
   const theme = useTheme()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={20} mb={15}>
                <Grid item xs={6}>
                   <Typography variant={"h2"}>Service That Lead The Way To Better <span
                       style={{color: theme.palette.primary.main}}>Business</span></Typography>
                </Grid>

                <Grid item xs={6}>
                   <Typography fontWeight={'bold'} color={theme.palette.primary.main} pb={1}
                               sx={{borderBottom: `5px solid ${theme.palette.primary.main}`, display: "inline"}}
                               variant={"subtitle2"}>Orion-Trans.</Typography>
                   <Typography variant={"subtitle2"} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac quam tellus. Etiam commodo diam nec tempus sagittis. Aliquam erat volutpat.
                      Suspendisse ultricies lacus et sem tincidunt condimentum. Mauris at sem vel ex luctus pharetra.
                      Sed nec lobortis tellus. Duis eget cons</Typography>
                </Grid>
             </Grid>

             <StyledFlexBox>
                {Array.from(Array(8).keys()).map((el => (
                    <React.Fragment key={el}>
                       <ServiceCard/>
                    </React.Fragment>
                )))}
             </StyledFlexBox>
          </OrionContainer>
       </StyledSection>
   );
};

export default ServiceSection1;