import { Icon, IconButton, styled } from '@mui/material';
import React from 'react';
import { useSwiper } from 'swiper/react';
import { FlexBox } from './FlexBox';

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
      size="small"
      title="Previous slide"
      aria-label="Previous slide"
      className="swiperButtonPrev"
      onClick={() => swiper.slidePrev()}
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
      title="Next slide"
      aria-label="Next slide"
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
