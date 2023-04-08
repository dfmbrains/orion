import React from 'react';
import {Box, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "./OrionContainer";
import {FlexGap10} from "./FlexBox";

const StyledSection = styled('section')(({bgcolor, theme}) => ({
   padding: "120px 0",
   backgroundColor: bgcolor || theme.palette.primary.main,

   "& .MuiTypography-root": {
      color: bgcolor ? "#1B1B1B" : '#FFFFFF'
   }
}));

const StatisticsSection = ({bgcolor}) => {
   const data = [
      {title: 'Shipped Tons Per Month', value: '10,000', valueTag: ''},
      {title: 'Shipped Tons Per Month', value: '10+', valueTag: ''},
      {title: 'Shipped Tons Per Month', value: '10', valueTag: 'Years'},
      {title: 'Shipped Tons Per Month', value: '8', valueTag: 'Years'}
   ]

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