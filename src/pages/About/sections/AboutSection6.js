import React from 'react';
import {Box, styled, Typography, useTheme} from "@mui/material";
import {FlexAllCenter} from "../../../components/FlexBox";

const StyledSection = styled('section')(({theme}) => ({
   padding: "70px 0",
   backgroundColor: theme.palette.primary.main,

   "& .MuiTypography-root": {
      color: "#FFF",
      textAlign: "center",

      "& span": {
         fontSize: "32px"
      }
   }
}));

const AboutSection6 = () => {
   const theme = useTheme()

   return (
       <StyledSection theme={theme}>
          <FlexAllCenter>
             <Box>
                <Typography variant={"h2"} mb={2}>Why us?</Typography>
                <Typography variant={"subtitle1"}><span>200+ </span>clients make use of our services for more
                   than</Typography>
                <Typography variant={"subtitle1"}><span>10 </span>years, and our partners work with us up to this
                   day.</Typography>
             </Box>
          </FlexAllCenter>
       </StyledSection>
   );
};

export default AboutSection6;