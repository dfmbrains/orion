import React from 'react';
import { styled } from '@mui/material';
import OrionLoading from './OrionLoading';

const LoaderBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#00000010',
  zIndex: 9,
}));

const Loader = () => {
  return (
    <LoaderBox>
      <OrionLoading />
    </LoaderBox>
  );
};

export default Loader;
