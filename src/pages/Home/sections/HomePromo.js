import React from 'react';
import { styled, Typography } from '@mui/material';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PromoSlide1 from '../../../assets/images/main.webp';
import {
  StyledPromoBackgroundBox,
  StylePromoColumn,
} from '../../../components/StyledComponents';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  height: 'calc(100vh - 32px)',
  backgroundColor: '#252525',
  [theme.breakpoints.down('lg')]: { height: 'calc(100vh - 27.15px)' },
  [theme.breakpoints.down('md')]: { height: 'calc(100vh - 26px)' },
  [theme.breakpoints.down('sm')]: { height: 'calc(75vh)' },

  '& .MuiTypography-root': {
    textAlign: 'center',
    color: '#FFFFFF',
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

const HomePromo = () => {
  const { t } = useTranslation();

  const slides = t('home.promo.slides', { returnObjects: true });

  //@Todo картинки поменять для каждого слайда
  const slidesImgs = [PromoSlide1, PromoSlide1, PromoSlide1];

  return (
    <StyledSection>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
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

      {/*@Todo menu as in design*/}
    </StyledSection>
  );
};

export default HomePromo;
