import { LoadingButton } from '@mui/lab';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const DefaultButton = ({ children, isLoadingButton, ...props }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const buttonProps = {
    size: isLaptop ? 'medium' : 'large',
    ...props,
  };

  if (buttonProps.to) {
    const lang = pathname.split('/')[1];

    buttonProps.to = `/${lang}${buttonProps.to && buttonProps.to !== '/' ? buttonProps.to : ''}`;
  }

  return isLoadingButton ? (
    <LoadingButton {...buttonProps}>{children}</LoadingButton>
  ) : (
    <Button {...buttonProps}>{children}</Button>
  );
};

export default DefaultButton;
