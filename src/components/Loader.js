import React from 'react';
import { keyframes, styled } from '@mui/material';

const spinAnimation = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
`;

const LoaderBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1000,
  width: '100%',
  height: '100vh',
  backgroundColor: '#00000099',
}));

const LoaderElement = styled('div')(({ theme }) => ({
  width: '36px',
  height: '36px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::after': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '100%',
    border: '4px solid #dfe7fd',
    borderTopColor: theme.palette.primary.main,
    borderRadius: '50%',
    animation: `${spinAnimation} 0.75s ease infinite`,
  },
}));

const Loader = () => {
  return (
    <LoaderBox>
      <LoaderElement />
    </LoaderBox>
  );
};

export default Loader;
