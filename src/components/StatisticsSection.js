import React from 'react';
import {Box, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "./OrionContainer";
import {FlexGap10} from "./FlexBox";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({bgcolor, theme}) => ({
   padding: "120px 0",
   backgroundColor: bgcolor || theme.palette.primary.main,
   [theme.breakpoints.down("lg")]: {padding: "80px 0"},
   [theme.breakpoints.down("md")]: {padding: "50px 0"},
   [theme.breakpoints.down("sm")]: {padding: "45px 0"},

   "& .MuiTypography-root": {
      color: bgcolor ? "#1B1B1B" : '#FFFFFF'
   }
}));

const StatisticsSection = ({bgcolor}) => {
   const {t} = useTranslation()

   const data = t('statisticsSection', {returnObjects: true}) || []

   const theme = useTheme()

   return (
       <StyledSection bgcolor={bgcolor} theme={theme}>
          <OrionContainer>
             <Grid container spacing={{lg: 10, md: 6, sm: 6, xs: 4}}>
                {data.map((el, idx) => (
                    <Grid item md={3} xs={6} key={idx}>
                       <Box sx={{borderLeft: `1px solid ${bgcolor ? "#282519" : '#FFFFFF'}`}}
                            pl={{lg: 5, sm: 2, xs: 1}} py={{sm: 1, xs: 0.3}}>
                          <Typography variant={"body1"}>{el.title}</Typography>
                          <FlexGap10>
                             <Typography variant={"h1"} component={"h5"}>{el.value}</Typography>
                             <Typography variant={"h4"} component={"h5"}
                                         mt={2}>{el.valueTag}</Typography>
                          </FlexGap10>
                       </Box>
                    </Grid>
                ))}
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default StatisticsSection;