import { Grid, styled, Typography } from '@mui/material';
import FeatureCard from 'components/FeatureCard';
import OrionContainer from 'components/OrionContainer';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '80px 0',
  backgroundColor: '#F7F7F7',
  [theme.breakpoints.down('lg')]: { padding: '70px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .featureCard': {
    width: '100%',
  },
}));

const AboutSection7 = () => {
  const translationKey = 'about.section7';
  const { t } = useTranslation();

  const cards = t(`${translationKey}.list`, { returnObjects: true }) || [];

  return (
    <StyledSection>
      <OrionContainer>
        <Typography
          mb={{ lg: 10, md: 8, sm: 6, xs: 4 }}
          variant="h2"
          textAlign="center"
        >
          {t(`${translationKey}.title`)}
        </Typography>

        <Grid container spacing={{ lg: 8, md: 5, sm: 4, xs: 3 }}>
          {cards.map((el, idx) => (
            <Grid item md={4} sm={6} key={idx}>
              <FeatureCard data={el} />
            </Grid>
          ))}
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default AboutSection7;
