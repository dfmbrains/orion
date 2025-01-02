import { LoadingButton } from '@mui/lab';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const DefaultButton = ({ children, isLoadingButton, ...props }) => {
  const theme = useTheme();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const buttonProps = {
    size: isLaptop ? 'medium' : 'large',
    ...props,
  };

  return isLoadingButton ? (
    <LoadingButton {...buttonProps}>{children}</LoadingButton>
  ) : (
    <Button {...buttonProps}>{children}</Button>
  );
};

export default DefaultButton;
