import {
  Icon,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { handleScrollToTop } from 'helpers/utils';
import React, { useEffect, useState } from 'react';

const StyledIconButton = styled(IconButton)(({ theme, status }) => ({
  position: 'fixed',
  bottom: '3%',
  right: '1.5%',
  zIndex: theme.zIndex.mobileStepper,
  backgroundColor: theme.palette.primary.main,
  transition: '0.2s',
  transform: `scale(${status > 0 ? '1' : '0'})`,
  [theme.breakpoints.down('sm')]: { right: '15px' },

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '& .material-icons': {
    color: theme.palette.secondary.main,
  },
}));

const ScrollTop = () => {
  const theme = useTheme();
  const [active, setActive] = useState();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setActive(window.pageYOffset));
    }
  }, []);

  return (
    <StyledIconButton
      theme={theme}
      status={active}
      size={isLaptop ? 'medium' : 'large'}
      onClick={() => handleScrollToTop('smooth')}
    >
      <Icon>arrow_upward</Icon>
    </StyledIconButton>
  );
};

export default ScrollTop;
