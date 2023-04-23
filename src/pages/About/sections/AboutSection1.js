import React from 'react';
import {styled, Typography, useTheme} from "@mui/material";
import {FlexAllCenter} from "../../../components/FlexBox";
import {Trans, useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   height: "calc(50vh - 32px)",

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
   const translationKey = 'about.section1'
   const {t} = useTranslation()

   const theme = useTheme()

   return (
       <StyledSection>
          <StyledFlexAllCenter>
             <Typography variant={"h3"} mb={4}>
                <Trans i18nKey={`${translationKey}.title`}
                       components={{span: <span style={{color: theme.palette.primary.main}}>Orion-Trans</span>}}/>
             </Typography>
             <Typography variant={"subtitle2"}>{t(`${translationKey}.subtitle`)}</Typography>
          </StyledFlexAllCenter>
       </StyledSection>
   );
};

export default AboutSection1;