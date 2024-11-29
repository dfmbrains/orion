import React from 'react';
import { Icon, IconButton, styled } from '@mui/material';
import { FlexBox } from './FlexBox';
import { useSwiper } from 'swiper/react';

const StyledSwiperButtonsBox = styled(FlexBox)(() => ({
  alignItems: 'center',
  columnGap: '24px',
}));

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: '#D6D6D6',

  '&:hover': {
    backgroundColor: '#bdbbbb',
  },

  '& .material-icons': {
    color: '#1B1B1B',
  },
}));

export const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <StyledIconButton
      className="swiperButtonPrev"
      onClick={() => swiper.slidePrev()}
      size="small"
    >
      <Icon>keyboard_arrow_left</Icon>
    </StyledIconButton>
  );
};

export const SwiperButtonNext = () => {
  const swiper = useSwiper();

  return (
    <StyledIconButton
      size="small"
      className="swiperButtonNext"
      onClick={() => swiper.slideNext()}
    >
      <Icon>keyboard_arrow_right</Icon>
    </StyledIconButton>
  );
};

const SwiperButtons = () => {
  return (
    <StyledSwiperButtonsBox>
      <SwiperButtonPrev />
      <SwiperButtonNext />
    </StyledSwiperButtonsBox>
  );
};

export default SwiperButtons;
