import {
  Box,
  Icon,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ChangeLangButton from 'components/ChangeLangButton';
import {
  FlexAllCenter,
  FlexBetweenAlignCenter,
  FlexGap10,
} from 'components/FlexBox';
import { Logo } from 'components/Logo';
import OrionContainer from 'components/OrionContainer';
import { HEADER_BURGER_MENU } from 'helpers/constants';
import React from 'react';
import HeaderLink from 'shared/Header/components/HeaderLink';

const StyledBox = styled(Box)(({ theme, color }) => ({
  backgroundColor: color === 'dark' ? '#252525' : 'transparent',
  padding: '13px 0 10px',
  borderBottom: '1px solid #FFFFFF',
  // position: 'absolute',
  width: '100%',
  // top: 27.15,
  // left: 0,
  // zIndex: 10,
  transition: '0.2s',
  [theme.breakpoints.down('lg')]: { padding: '11px 0 9px' },

  '& .material-icons': {
    color: '#FFFFFF',
  },
}));

const HeaderGeneral = ({ openBurger, color }) => {
  const theme = useTheme();

  const isLaptopOrDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledBox color={color}>
      <OrionContainer>
        <FlexBetweenAlignCenter>
          <Logo />
          {isLaptopOrDesktop && (
            <FlexAllCenter>
              {HEADER_BURGER_MENU.map((item, idx) => (
                <HeaderLink key={idx} headerLink={item} />
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
