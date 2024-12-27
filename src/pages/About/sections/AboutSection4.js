import { Grid, styled, Typography, useTheme } from '@mui/material';
import OurTeamImg from 'assets/images/mission2.jpg';
import ImageComponent from 'components/ImageComponent';
import OrionContainer from 'components/OrionContainer';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '90px 0',
  backgroundColor: '#F7F7F7',
  [theme.breakpoints.down('lg')]: { padding: '80px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .aboutSection4Img': {
    width: '80%',
    borderRadius: '16px',
    [theme.breakpoints.down('lg')]: { width: '100%' },
  },
}));

const AboutSection4 = () => {
  const translationKey = 'about.section4';
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={{ lg: 8, md: 6, xs: 4 }} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography mb={{ lg: 2, xs: 1 }} variant="h3">
              <Trans
                i18nKey={`${translationKey}.title1`}
                components={{
                  span: (
                    <span style={{ color: theme.palette.primary.main }}>
                      Mission
                    </span>
                  ),
                }}
              />
            </Typography>
            <Typography mb={{ lg: 4, xs: 3 }} variant="subtitle2">
              {t(`${translationKey}.subtitle1`)}
            </Typography>

            <Typography mb={{ lg: 2, xs: 1 }} variant="h3">
              <Trans
                i18nKey={`${translationKey}.title2`}
                components={{
                  span: (
                    <span style={{ color: theme.palette.primary.main }}>
                      Vision
                    </span>
                  ),
                }}
              />
            </Typography>
            <Typography variant="subtitle2">
              {t(`${translationKey}.subtitle2`)}
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <ImageComponent
              className="aboutSection4Img"
              src={OurTeamImg}
              alt="our team"
            />
          </Grid>
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default AboutSection4;
