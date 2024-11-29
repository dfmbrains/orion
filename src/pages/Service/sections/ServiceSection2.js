import React from 'react';
import OrionContainer from '../../../components/OrionContainer';
import { styled, Typography, useTheme } from '@mui/material';
import { FlexBox } from '../../../components/FlexBox';
import FeatureCard from '../../../components/FeatureCard';
import { Trans, useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '80px 0',
  backgroundColor: '#F7F7F7',

  [theme.breakpoints.down('lg')]: { padding: '70px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },
}));

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  width: '80%',
  margin: '0 auto',
  alignItems: 'flex-start',
  gap: '80px 60px',
  flexWrap: 'wrap',

  [theme.breakpoints.down('lg')]: { gap: '60px 40px' },
  [theme.breakpoints.down('sm')]: { gap: '30px' },

  '& .featureCard': {
    width: 'calc(100% / 3 - 60px * 2 / 3)',

    [theme.breakpoints.down('lg')]: { width: 'calc(100% / 2 - 60px / 2)' },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& h6': {
        textAlign: 'center',
      },
    },
  },
}));

const ServiceSection2 = () => {
  const translationKey = 'service.section2';
  const { t } = useTranslation();

  const theme = useTheme();

  const cardsData = t(`${translationKey}.list`, { returnObjects: true }) || [];

  return (
    <StyledSection>
      <OrionContainer>
        <Typography
          variant="h3"
          mb={{ md: 8, sm: 6, xs: 4 }}
          textAlign={'center'}
        >
          <Trans
            i18nKey={`${translationKey}.title`}
            components={{
              span: (
                <span style={{ color: theme.palette.primary.main }}>
                  services?
                </span>
              ),
            }}
          />
        </Typography>

        <StyledFlexBox>
          {cardsData.map((el, idx) => (
            <FeatureCard data={el} key={idx} />
          ))}
        </StyledFlexBox>
      </OrionContainer>
    </StyledSection>
  );
};

export default ServiceSection2;
