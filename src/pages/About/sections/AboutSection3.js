import React from 'react';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import { FlexGap10 } from '../../../components/FlexBox';
import ClientsImg from '../../../assets/images/partners_and_clients.webp';
import { useNavigate } from 'react-router-dom';
import { anchorLinkHandler } from '../../../helpers/utils';
import { Trans, useTranslation } from 'react-i18next';
import DefaultButton from '../../../components/DefaultButton';
import ImageComponent from '../../../components/ImageComponent';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '80px 0',
  [theme.breakpoints.down('lg')]: { padding: '70px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .aboutSection3Img': {
    width: '80%',
    [theme.breakpoints.down('lg')]: { width: '100%' },
  },
}));

const AboutSection3 = () => {
  const translationKey = 'about.section3';
  const { t } = useTranslation();

  const theme = useTheme();
  const navigate = useNavigate();

  const navigateToCalculationForm = async () => {
    await navigate('/');
    await anchorLinkHandler('homeSection3');
  };

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
              <DefaultButton variant="contained" linkTo="/contact?form=0">
                {t('buttons.contactUs')}
              </DefaultButton>

              <DefaultButton
                variant="outlined"
                onClick={navigateToCalculationForm}
              >
                {t('buttons.calculateRailTariff')}
              </DefaultButton>
            </FlexGap10>
          </Grid>
          <Grid item md={6} xs={12}>
            <ImageComponent
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
