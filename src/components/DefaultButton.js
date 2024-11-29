import React, { useCallback } from 'react';
import { handleScrollToTop } from '../helpers/utils';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

const DefaultButton = ({
  linkTo,
  onClick,
  children,
  isLoadingButton,
  ...props
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClick = useCallback(() => {
    if (onClick) return onClick();
    else if (linkTo) {
      handleScrollToTop();
      navigate(linkTo);
    }
  }, [onClick, linkTo, navigate]);

  const buttonProps = {
    ...props,

    color: 'primary',
    onClick: handleClick,
    size: isLaptop ? 'medium' : 'large',
  };

  return isLoadingButton ? (
    <LoadingButton {...buttonProps}>{children}</LoadingButton>
  ) : (
    <Button {...buttonProps}>{children}</Button>
  );
};

export default DefaultButton;
