import React from 'react';
import { Box, styled, Typography, useTheme } from '@mui/material';
import { FlexAllCenter } from '../../../components/FlexBox';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '70px 0',
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: { padding: '50px 0' },
  [theme.breakpoints.down('sm')]: { padding: '40px 0' },

  '& .MuiTypography-root': {
    color: '#FFF',
    textAlign: 'center',

    '& span': {
      fontWeight: '400',
    },
  },
}));

const AboutSection6 = () => {
  const translationKey = 'about.section6';
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <StyledSection theme={theme}>
      <FlexAllCenter>
        <Box>
          <Typography variant="h2" mb={2}>
            {t(`${translationKey}.title`)}
          </Typography>
          <Typography
            width={{ sm: '100%', xs: '80%' }}
            mx={{ sm: '0', xs: 'auto' }}
            variant="subtitle1"
          >
            <Typography variant="h4" component={'span'}>
              200+{' '}
            </Typography>
            {t(`${translationKey}.subtitle1`)}
          </Typography>
          <Typography
            width={{ sm: '100%', xs: '80%' }}
            mx={{ sm: '0', xs: 'auto' }}
            mt={{ md: 0, xs: 1 }}
            variant="subtitle1"
          >
            <Typography variant="h4" component={'span'}>
              10{' '}
            </Typography>
            {t(`${translationKey}.subtitle2`)}
          </Typography>
        </Box>
      </FlexAllCenter>
    </StyledSection>
  );
};

export default AboutSection6;
