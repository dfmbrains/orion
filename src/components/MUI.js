import { Avatar, styled } from '@mui/material';

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
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
