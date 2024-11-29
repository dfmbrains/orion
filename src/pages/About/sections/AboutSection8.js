import React from 'react';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import FeatureCard from '../../../components/FeatureCard';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '90px 0',
  [theme.breakpoints.down('lg')]: { padding: '70px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .featureCard': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& h6': {
      textAlign: 'center',
    },
  },
}));

const AboutSection8 = () => {
  const translationKey = 'about.section8';
  const { t } = useTranslation();

  const cards = t(`${translationKey}.list`, { returnObjects: true }) || [];

  const theme = useTheme();

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container alignItems="center" spacing={{ md: 3, xs: 4 }}>
          <Grid item md={4} xs={12}>
            <Typography
              color={theme.palette.primary.main}
              textAlign={{ md: 'left', xs: 'center' }}
              variant="h3"
            >
              {t(`${translationKey}.title`)}
            </Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid container spacing={{ lg: 3, md: 2, sm: 3, xs: 1 }}>
              {cards.map((el, idx) => (
                <Grid item sm={4} xs={6} key={idx}>
                  <FeatureCard className="localCard" data={el} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default AboutSection8;
