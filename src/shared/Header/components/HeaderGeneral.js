import React from 'react';
import {
  Box,
  Icon,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  FlexAllCenter,
  FlexBetweenAlignCenter,
  FlexGap10,
} from '../../../components/FlexBox';
import { Logo } from '../../../components/Logo';
import { NavLink } from 'react-router-dom';
import OrionContainer from '../../../components/OrionContainer';
import { useTranslation } from 'react-i18next';
import ChangeLangButton from '../../../components/ChangeLangButton';
import { HEADER_BURGER_MENU } from '../../../helpers/constants';

const StyledBox = styled(Box)(({ theme, color }) => ({
  backgroundColor: color === 'dark' ? '#252525' : 'transparent',
  padding: '13px 0 10px',
  borderBottom: '1px solid #FFFFFF',
  position: 'absolute',
  width: '100%',
  top: 27.15,
  left: 0,
  zIndex: 10,
  transition: '0.2s',
  [theme.breakpoints.down('lg')]: { padding: '11px 0 9px' },

  '& .material-icons': {
    color: '#FFFFFF',
  },
  '.active': {
    position: 'relative',

    '&:after': {
      content: "''",
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#F6803D',
      height: 2,
      width: '100%',
      borderRadius: 5,
    },
  },
}));

const StyledLink = styled(NavLink)(({ theme }) => ({
  padding: '0 15px',
  color: '#FFFFFF',
  transition: '0.3s',
  [theme.breakpoints.down('lg')]: { padding: '0 10px' },

  '&:hover': {
    color: theme.palette.primary.main,
    transition: '0.3s',
  },
}));

const HeaderGeneral = ({ openBurger, color }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const isLaptopOrDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledBox color={color}>
      <OrionContainer>
        <FlexBetweenAlignCenter>
          <Logo />
          {isLaptopOrDesktop && (
            <FlexAllCenter>
              {HEADER_BURGER_MENU.map((el, idx) => (
                <StyledLink theme={theme} to={el.link} key={idx}>
                  <Typography variant="subtitle2">{t(el.title)}</Typography>
                </StyledLink>
              ))}
            </FlexAllCenter>
          )}
          <FlexGap10>
            <ChangeLangButton />

            {isTablet && (
              <IconButton onClick={openBurger} color="secondary">
                <Icon>menu</Icon>
              </IconButton>
            )}
          </FlexGap10>
        </FlexBetweenAlignCenter>
      </OrionContainer>
    </StyledBox>
  );
};

export default HeaderGeneral;
