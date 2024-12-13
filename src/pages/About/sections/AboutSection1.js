import React from 'react';
import { styled, Typography, useTheme } from '@mui/material';
import { FlexAllCenter } from '../../../components/FlexBox';
import { Trans, useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  height: 'calc(50vh - 32px)',
  [theme.breakpoints.down('xl')]: { height: 'auto', padding: '80px 0' },
  [theme.breakpoints.down('lg')]: { height: 'auto', padding: '50px 0' },
  [theme.breakpoints.down('sm')]: { padding: '40px 0 50px' },

  '& .MuiTypography-root': {
    width: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: { width: '90%' },
    [theme.breakpoints.down('sm')]: { width: '100%', padding: '0 5px' },
  },
}));

const StyledFlexAllCenter = styled(FlexAllCenter)(() => ({
  height: '100%',
  flexDirection: 'column',
}));

const AboutSection1 = () => {
  const translationKey = 'about.section1';
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <StyledSection>
      <StyledFlexAllCenter>
        <Typography variant="h3" mb={{ sm: 4, xs: 3 }}>
          <Trans
            i18nKey={`${translationKey}.title`}
            components={{
              span: (
                <span style={{ color: theme.palette.primary.main }}>
                  Orion-Trans
                </span>
              ),
            }}
          />
        </Typography>
        <Typography variant="subtitle2">
          {t(`${translationKey}.subtitle`)}
        </Typography>
      </StyledFlexAllCenter>
    </StyledSection>
  );
};

export default AboutSection1;
