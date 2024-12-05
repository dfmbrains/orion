import React from 'react';
import { Divider, Grid, styled, Typography } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import { useTranslation } from 'react-i18next';
import { FlexGap10 } from '../../../components/FlexBox';
import DefaultButton from '../../../components/DefaultButton';
import { Autoplay, Navigation, Pagination } from 'swiper';
import {
  SwiperButtonNext,
  SwiperButtonPrev,
} from '../../../components/SwiperButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageComponent from '../../../components/ImageComponent';

import GondolaImg from '../../../assets/images/wagons/gondola.png';
import PlatformImg from '../../../assets/images/wagons/platform.png';
import TankImg from '../../../assets/images/wagons/tank.png';
import ContainerImg from '../../../assets/images/wagons/container.png';
import HopperImg from '../../../assets/images/wagons/hopper.png';
import FridgeImg from '../../../assets/images/wagons/fridge.png';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '100px 0',

  [theme.breakpoints.down('lg')]: { padding: '80px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },

  '& .swiper-pagination': {
    display: 'inline-block',
    width: 'auto',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },

  '& .provisionImg': {
    width: '100%',
  },
}));

const HomeSection4 = () => {
  const translationKey = 'home.section4';
  const { t } = useTranslation();

  const stockImages = [
    GondolaImg,
    TankImg,
    HopperImg,
    FridgeImg,
    ContainerImg,
    PlatformImg,
  ];

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={{ sm: 8, xs: 6 }} alignItems="center">
          <Grid item lg={5.5} md={6} xs={12}>
            <Typography mb={3} pr={6} variant="h2">
              {t(`${translationKey}.title`)}
            </Typography>
            <Typography mb={3} pr={6} variant="subtitle2">
              {t(`${translationKey}.subtitle`)}
            </Typography>

            <Divider />

            <FlexGap10 sx={{ mt: { lg: 5, sm: 3, xs: 2 } }}>
              <DefaultButton variant="contained" linkTo="/services">
                {t('buttons.learnMore')}
              </DefaultButton>

              <DefaultButton variant="outlined" linkTo="/contact?form=1">
                {t('buttons.order')}
              </DefaultButton>
            </FlexGap10>
          </Grid>

          <Divider flexItem orientation="vertical" />

          <Grid item lg={6} md={5.95} xs={12}>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              className="swiperCustomNavigation"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay, Navigation, Pagination]}
            >
              <FlexGap10 sx={{ display: 'inline-flex' }} mt={2}>
                <SwiperButtonPrev />
                <SwiperButtonNext />
              </FlexGap10>

              {stockImages.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <ImageComponent
                    src={item}
                    alt="provision"
                    className="provisionImg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default HomeSection4;
