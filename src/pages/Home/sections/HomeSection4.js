import React from 'react';
import { Divider, Grid, styled, Typography } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import ProvisionImg from '../../../assets/images/provision.webp';
import { useTranslation } from 'react-i18next';
import { FlexGap10 } from '../../../components/FlexBox';
import DefaultButton from '../../../components/DefaultButton';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '100px 0',
  [theme.breakpoints.down('lg')]: { padding: '80px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .provisionImg': {
    width: '100%',
  },
}));

const HomeSection4 = () => {
  const translationKey = 'home.section4';
  const { t } = useTranslation();

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={{ sm: 8, xs: 6 }} alignItems="center">
          <Grid item lg={5.5} md={6}>
            <Typography mb={3} pr={6} variant="h2">
              {t(`${translationKey}.title`)}
            </Typography>
            <Typography mb={3} pr={6} variant="subtitle2">
              {t(`${translationKey}.subtitle`)}
            </Typography>

            <Divider />

            <FlexGap10 sx={{ mt: { lg: 5, sm: 3, xs: 2 } }}>
              <DefaultButton variant="contained" linkTo="/services">
                {t('buttons.learnMore')}
              </DefaultButton>

              <DefaultButton variant="outlined" linkTo="/contact?form=1">
                {t('buttons.order')}
              </DefaultButton>
            </FlexGap10>
          </Grid>

          <Divider flexItem orientation="vertical" />

          <Grid item lg={6} md={5.95}>
            <img src={ProvisionImg} alt="provision" className="provisionImg" />
          </Grid>
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default HomeSection4;
