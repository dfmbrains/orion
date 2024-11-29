import React, { useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {
  StyledPromoBackgroundBox,
  StylePromoColumn,
} from '../../../components/StyledComponents';
import { styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OrionContainer from '../../../components/OrionContainer';

import PromoSlide1 from '../../../assets/images/backgrounds/home_promo1.webp';
import PromoSlide2 from '../../../assets/images/backgrounds/home_promo2.webp';
import PromoSlide3 from '../../../assets/images/backgrounds/home_promo3.webp';
import PromoSlide4 from '../../../assets/images/backgrounds/home_promo4.webp';

const StyledSwiperMenu = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '65px',
  width: '100%',
  bottom: 0,
  left: 0,
  zIndex: '1',
  backdropFilter: 'blur(2.5px)',
  backgroundColor: '#FFFFFF25',
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: { height: '140px' },
}));

const StyledMenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',

  [theme.breakpoints.down('md')]: { flexWrap: 'wrap', gap: '15px' },
}));

const StyledMenuItem = styled(Typography)(({ theme, isSelected }) => ({
  textAlign: 'left',
  width: 'calc(100% / 4 - 30px * 3 / 4)',
  color: theme.palette.secondary.main,
  borderBottom: isSelected
    ? `2px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.palette.secondary.main}`,
  padding: '0 0 6px',
  cursor: 'pointer',

  '&:hover': {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },

  [theme.breakpoints.down('md')]: {
    width: 'calc(100% / 2 - 15px / 2)',
  },
}));

const SwiperMenu = ({ slides, activeSlide }) => {
  const swiper = useSwiper();

  return (
    <StyledSwiperMenu>
      <OrionContainer>
        <StyledMenuContainer>
          {slides.map((slide, idx) => (
            <StyledMenuItem
              key={idx}
              variant="subtitle2"
              className="menuItem"
              isSelected={activeSlide === idx}
              onClick={() => swiper.slideTo(idx)}
            >
              {slide.shortTitle}
            </StyledMenuItem>
          ))}
        </StyledMenuContainer>
      </OrionContainer>
    </StyledSwiperMenu>
  );
};

const HomePromoSwiper = () => {
  const { t } = useTranslation();

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = t('home.promo.slides', { returnObjects: true });

  const slidesImgs = [PromoSlide1, PromoSlide2, PromoSlide3, PromoSlide4];

  return (
    <Swiper
      navigation
      centeredSlides
      spaceBetween={10}
      className="mySwiper"
      modules={[Autoplay, Navigation]}
      onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      <SwiperMenu slides={slides} activeSlide={activeSlide} />

      {slides.map((el, idx) => (
        <SwiperSlide key={idx} className={'mySwiperSlide'}>
          <StyledPromoBackgroundBox bgimage={slidesImgs[idx]}>
            <StylePromoColumn>
              <Typography my={3} variant="h1">
                {el.title}
              </Typography>
              <Typography variant="h5">{el.subtitle}</Typography>
            </StylePromoColumn>
          </StyledPromoBackgroundBox>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomePromoSwiper;
