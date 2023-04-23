import React from 'react';
import {Box, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "./OrionContainer";
import {FlexGap10} from "./FlexBox";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({bgcolor, theme}) => ({
   padding: "120px 0",
   backgroundColor: bgcolor || theme.palette.primary.main,

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
             <Grid container spacing={10}>
                {data.map((el, idx) => (
                    <Grid item xs={3} key={idx}>
                       <Box sx={{borderLeft: `1px solid ${bgcolor ? "#282519" : '#FFFFFF'}`}} pl={5} py={1}>
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