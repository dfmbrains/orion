import React from 'react';
import {Box, styled, Typography, useTheme} from "@mui/material";
import {FlexAllCenter} from "../../../components/FlexBox";
import {useTranslation} from "react-i18next";

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
   const translationKey = 'about.section6'
   const {t} = useTranslation()

   const theme = useTheme()

   return (
       <StyledSection theme={theme}>
          <FlexAllCenter>
             <Box>
                <Typography variant={"h2"} mb={2}>{t(`${translationKey}.title`)}</Typography>
                <Typography variant={"subtitle1"}><span>200+ </span>{t(`${translationKey}.subtitle1`)}</Typography>
                <Typography variant={"subtitle1"}><span>10 </span>{t(`${translationKey}.subtitle2`)}</Typography>
             </Box>
          </FlexAllCenter>
       </StyledSection>
   );
};

export default AboutSection6;