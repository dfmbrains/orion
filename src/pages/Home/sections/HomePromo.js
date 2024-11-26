import React, { useState } from 'react';
import { styled, Typography } from '@mui/material';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import PromoSlide1 from '../../../assets/images/main.webp';
import {
  StyledPromoBackgroundBox,
  StylePromoColumn,
} from '../../../components/StyledComponents';
import { useTranslation } from 'react-i18next';
import OrionContainer from '../../../components/OrionContainer';

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  height: 'calc(100vh - 32px)',
  backgroundColor: '#252525',

  [theme.breakpoints.down('lg')]: { height: 'calc(100vh - 27.15px)' },
  [theme.breakpoints.down('md')]: { height: 'calc(100vh - 26px)' },
  [theme.breakpoints.down('sm')]: { height: 'calc(75vh)' },

  '& .mySwiperSlide': {
    '& .MuiTypography-root': {
      textAlign: 'center',
      color: '#FFFFFF',
    },
  },

  '& h5': {
    width: '50%',

    [theme.breakpoints.down('lg')]: { width: '75%' },
    [theme.breakpoints.down('md')]: { width: '85%' },
    [theme.breakpoints.down('sm')]: { width: '90%' },
  },

  '& .mySwiper, & .mySwiperSlide': { height: '100%' },

  '& .swiper-button-prev, & .swiper-button-next': {
    [theme.breakpoints.down('sm')]: { display: 'none' },

    '&:after': {
      color: '#FFF',

      [theme.breakpoints.down('lg')]: { fontSize: '36px' },
      [theme.breakpoints.down('md')]: { fontSize: '28px' },
    },
  },
}));

const StyledSwiperMenu = styled('div')(() => ({
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
}));

const StyledMenuContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '30px',
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

const HomePromo = () => {
  const { t } = useTranslation();

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = t('home.promo.slides', { returnObjects: true });

  //@Todo картинки поменять для каждого слайда
  const slidesImgs = [PromoSlide1, PromoSlide1, PromoSlide1, PromoSlide1];

  return (
    <StyledSection>
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
    </StyledSection>
  );
};

export default HomePromo;
