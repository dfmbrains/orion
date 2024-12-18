import { Box, Icon, styled, Typography, useTheme } from '@mui/material';
import { FlexBetweenAlignCenter, FlexGap10 } from 'components/FlexBox';
import OrionContainer from 'components/OrionContainer';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from 'store';

const StyledBox = styled(Box)(({ theme, active }) => ({
  backgroundColor: '#252525',
  padding: '6px 0',
  position: active === 'true' ? 'fixed' : 'static',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: theme.zIndex.appBar,
  [theme.breakpoints.down('lg')]: { padding: '5px 0' },
  [theme.breakpoints.down('sm')]: { padding: '8px 0' },

  '& .material-icons': {
    color: '#FFFFFF',
    [theme.breakpoints.down('lg')]: { fontSize: 17 },
  },
  '& .flexGap10': {
    [theme.breakpoints.down('lg')]: { columnGap: '6px' },
  },
}));
const StyledBody2 = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  transition: '0.3s',

  '& span': {
    textTransform: 'capitalize',
  },
  '&:hover': {
    color: theme !== 'false' ? theme.palette.primary.main : '#FFFFFF',
    transition: '0.3s',
  },
}));

const HeaderTop = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const company = useRecoilValue(companyRecoil);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setActive(window.pageYOffset > 32),
      );
    }
  }, []);

  return (
    <StyledBox theme={theme} active={active.toString()}>
      <OrionContainer>
        <FlexBetweenAlignCenter>
          <FlexGap10 className="flexGap10">
            <Icon className="icon" fontSize="small">
              support_agent
            </Icon>
            <StyledBody2 variant="body2" theme={'false'}>
              <span>{t('header.support')}</span> 24 / 7
            </StyledBody2>
          </FlexGap10>
          <FlexGap10 className="flexGap10">
            <Icon className="icon" fontSize="small">
              phone
            </Icon>
            <a href={`tel:${company?.about.phoneNumber1 || ''}`}>
              <StyledBody2 theme={theme} variant="body2">
                {company?.about.phoneNumber1 || ''}
              </StyledBody2>
            </a>
            <a href={`tel:${company?.about.phoneNumber2 || ''}`}>
              <StyledBody2 theme={theme} variant="body2">
                {company?.about.phoneNumber2 || ''}
              </StyledBody2>
            </a>
          </FlexGap10>
        </FlexBetweenAlignCenter>
      </OrionContainer>
    </StyledBox>
  );
};

export default HeaderTop;
