import React from 'react';
import {styled, Typography, useTheme} from "@mui/material";
import {FlexAllCenter} from "../../../components/FlexBox";

const StyledSection = styled('section')(() => ({
   height: "calc(50vh - 32px / 2)",

   "& .MuiTypography-root": {
      width: "50%",
      textAlign: "center"
   },
}));

const StyledFlexAllCenter = styled(FlexAllCenter)(() => ({
   height: "100%",
   flexDirection: "column"
}));

const AboutSection1 = () => {
   const theme = useTheme()

   return (
       <StyledSection>
          <StyledFlexAllCenter>
             <Typography variant={"h3"} mb={4}>We are <span
                 style={{color: theme.palette.primary.main}}>Orion-Trans</span>. Providing You with the most actionable
                Rail Freight Service</Typography>
             <Typography variant={"subtitle2"}>We are professional logistics specialists with a passion for quality and
                efficiency. We believe in integrity, trust, and continuous improvement. We promise to listen and provide
                You with reliable freight forwarding services over the globe.</Typography>
          </StyledFlexAllCenter>
       </StyledSection>
   );
};

export default AboutSection1;