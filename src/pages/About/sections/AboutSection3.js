import { Grid, styled, Typography, useTheme } from '@mui/material';
import ClientsImg from 'assets/images/what_we_offer.webp';
import DefaultButton from 'components/DefaultButton';
import { FlexGap10 } from 'components/FlexBox';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '80px 0',
  [theme.breakpoints.down('lg')]: { padding: '70px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .aboutSection3Img': {
    width: '80%',
    borderRadius: '16px',
    height: 'auto',

    [theme.breakpoints.down('lg')]: { width: '100%' },
  },
}));

const AboutSection3 = () => {
  const translationKey = 'about.section3';
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={{ lg: 8, md: 6, xs: 5 }} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography mb={{ lg: 5, md: 4, xs: 3 }} variant="h3">
              <Trans
                i18nKey={`${translationKey}.title`}
                components={{
                  span: (
                    <span style={{ color: theme.palette.primary.main }}>
                      offer
                    </span>
                  ),
                }}
              />
            </Typography>
            <Typography mb={{ lg: 4, md: 2, xs: 1 }} variant="subtitle2">
              {t(`${translationKey}.subtitle1`)}
            </Typography>
            <Typography mb={{ lg: 5, md: 4, xs: 3 }} variant="subtitle2">
              {t(`${translationKey}.subtitle2`)}
            </Typography>

            <FlexGap10>
              <DefaultButton
                component={Link}
                variant="contained"
                to="/contact?form=0#contactContentSection"
              >
                {t('buttons.contactUs')}
              </DefaultButton>

              <DefaultButton
                component={Link}
                variant="outlined"
                to="/#homeSection3"
              >
                {t('buttons.calculateRailTariff')}
              </DefaultButton>
            </FlexGap10>
          </Grid>
          <Grid item md={6} xs={12}>
            <LazyImage
              alt="clients"
              src={ClientsImg}
              className="aboutSection3Img"
            />
          </Grid>
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default AboutSection3;
