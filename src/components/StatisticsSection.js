import React from 'react';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import OrionContainer from './OrionContainer';
import { FlexGap10 } from './FlexBox';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ bgcolor, theme }) => ({
  padding: '120px 0',
  backgroundColor: bgcolor || theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: { padding: '80px 0' },
  [theme.breakpoints.down('md')]: { padding: '50px 0' },
  [theme.breakpoints.down('sm')]: { padding: '45px 0' },

  '& .MuiTypography-root': {
    color: bgcolor ? '#1B1B1B' : '#FFFFFF',
  },
}));

const StyledBox = styled('div')(({ theme, bgcolor }) => ({
  position: 'relative',
  padding: '8px 0',

  '&::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: '-24px',
    width: '1px',
    height: '100%',
    zIndex: 1,
    backgroundColor: bgcolor ? '#282519' : '#FFFFFF',
  },

  [theme.breakpoints.down('sm')]: { padding: '3px 0' },
}));

const StatisticsSection = ({ bgcolor }) => {
  const { t } = useTranslation();

  const data = t('statisticsSection', { returnObjects: true }) || [];

  const theme = useTheme();

  return (
    <StyledSection bgcolor={bgcolor} theme={theme}>
      <OrionContainer>
        <Grid container spacing={{ lg: 10, md: 6, sm: 6, xs: 4 }}>
          {data.map((el, idx) => (
            <Grid item md={3} xs={6} key={idx}>
              <StyledBox bgcolor={bgcolor}>
                <Typography variant={'body1'}>{el.title}</Typography>
                <FlexGap10>
                  <Typography variant={'h1'} component={'h5'}>
                    {el.value}
                  </Typography>
                  <Typography variant={'h4'} component={'h5'} mt={2}>
                    {el.valueTag}
                  </Typography>
                </FlexGap10>
              </StyledBox>
            </Grid>
          ))}
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default StatisticsSection;
