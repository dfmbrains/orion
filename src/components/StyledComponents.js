import { Avatar, styled } from '@mui/material';
import { FlexAllCenter } from './FlexBox';

const StyledPromoBackgroundBox = styled(FlexAllCenter)(({ bgimage }) => ({
  height: '100%',
  backgroundImage: `url(${bgimage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 0.5s ease',
  position: 'relative',
  zIndex: 1,

  '&:before': {
    content: "''",
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: '#00000090',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
}));

const StylePromoColumn = styled(FlexAllCenter)(({ theme }) => ({
  flexDirection: 'column',
  position: 'relative',
  zIndex: 10,
  width: '100%',

  '& h1': {
    width: '80%',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: { width: '90%' },
    [theme.breakpoints.down('md')]: { width: '95%' },
  },
}));

const StyledSwiperButtonsPosition = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '5%',
  right: '5%',
  '& .swiperButtonPrev, & .swiperButtonNext': {
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto',
      width: '28px',
      height: '28px',
    },
  },
  [theme.breakpoints.down('md')]: {
    top: 'auto',
    right: '0',
    bottom: '-40px',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: '-35px',
  },
}));

const Styled100vhLoadingBox = styled('div')(() => ({
  position: 'relative',
  height: '100vh',
}));

const Styled50vhLoadingBox = styled('div')(() => ({
  position: 'relative',
  height: '50vh',
  width: '100%',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '100px',
  height: '100px',

  [theme.breakpoints.down('lg')]: {
    width: '80px',
    height: '80px',
  },
  [theme.breakpoints.down('md')]: {
    width: '70px',
    height: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
  },
}));

export {
  StyledPromoBackgroundBox,
  StylePromoColumn,
  StyledSwiperButtonsPosition,
  Styled100vhLoadingBox,
  Styled50vhLoadingBox,
  StyledAvatar,
};
