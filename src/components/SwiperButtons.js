import { Icon, IconButton, styled } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
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

export const SwiperButtonPrev = ({ isBeginning }) => {
  const { t } = useTranslation();
  const swiper = useSwiper();

  return (
    <StyledIconButton
      size="small"
      disabled={isBeginning}
      className="swiperButtonPrev"
      onClick={() => swiper.slidePrev()}
      title={t('tagTitles.sliderPrevButton')}
      aria-label={t('ariaLabels.sliderPrevButton')}
    >
      <Icon>keyboard_arrow_left</Icon>
    </StyledIconButton>
  );
};

export const SwiperButtonNext = ({ isEnd }) => {
  const { t } = useTranslation();
  const swiper = useSwiper();

  return (
    <StyledIconButton
      size="small"
      disabled={isEnd}
      className="swiperButtonNext"
      onClick={() => swiper.slideNext()}
      title={t('tagTitles.sliderNextButton')}
      aria-label={t('ariaLabels.sliderNextButton')}
    >
      <Icon>keyboard_arrow_right</Icon>
    </StyledIconButton>
  );
};

const SwiperButtons = ({ slideStatus }) => {
  return (
    <StyledSwiperButtonsBox>
      <SwiperButtonPrev isBeginning={slideStatus === 1} />
      <SwiperButtonNext isEnd={slideStatus === 2} />
    </StyledSwiperButtonsBox>
  );
};

export default SwiperButtons;
