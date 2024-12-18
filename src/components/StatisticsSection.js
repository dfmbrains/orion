import { styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { FlexGap10 } from './FlexBox';
import OrionContainer from './OrionContainer';

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

const StyledRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: { flexWrap: 'wrap', rowGap: '48px' },
  [theme.breakpoints.down('sm')]: { flexWrap: 'wrap', rowGap: '24px' },
}));

const StyledBox = styled('div')(({ theme, bgcolor }) => ({
  flex: 'auto',
  position: 'relative',
  padding: '8px 24px',

  '&::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1px',
    height: '100%',
    zIndex: 1,
    backgroundColor: bgcolor ? '#282519' : '#FFFFFF',
  },

  [theme.breakpoints.down('md')]: { width: '50%' },
  [theme.breakpoints.down('sm')]: { width: '100%', padding: '5px 0px 5px 10%' },
}));

const ValueComponent = ({ item, bgcolor }) => {
  return (
    <StyledBox bgcolor={bgcolor}>
      <Typography variant="body1">{item.title}</Typography>
      <FlexGap10>
        <Typography variant="h1" component="h5">
          <CountUp
            start={0}
            prefix=""
            suffix=""
            duration={2}
            separator=","
            enableScrollSpy
            end={item.value}
            decimals={item.value % 1 !== 0 ? 1 : 0}
          />
        </Typography>
        <Typography variant="h4" component="h5" mt={{ sm: 2, xs: 1 }}>
          {item.valueTag}
        </Typography>
      </FlexGap10>
    </StyledBox>
  );
};

const StatisticsSection = ({ bgcolor }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = t('statisticsSection', { returnObjects: true }) || [];

  return (
    <StyledSection bgcolor={bgcolor} theme={theme}>
      <OrionContainer>
        <StyledRow>
          {data.map((item, idx) => (
            <ValueComponent key={idx} item={item} bgcolor={bgcolor} />
          ))}
        </StyledRow>
      </OrionContainer>
    </StyledSection>
  );
};

export default StatisticsSection;
