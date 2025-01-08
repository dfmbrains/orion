import {
  Box,
  Button,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Afghanistan from 'assets/images/countries/af.png';
import Azer from 'assets/images/countries/az.png';
import Baltic from 'assets/images/countries/baltic.png';
import China from 'assets/images/countries/zh.png';
import Europe from 'assets/images/countries/eu.png';
import Iran from 'assets/images/countries/ir.png';
import Kg from 'assets/images/countries/kg.png';
import Kz from 'assets/images/countries/kz.png';
import Ge from 'assets/images/countries/ge.png';
import Rus from 'assets/images/countries/ru.png';
import Tj from 'assets/images/countries/tj.png';
import Tur from 'assets/images/countries/tur.png';
import Uz from 'assets/images/countries/uz.png';
import MapBg from 'assets/images/mapTransparent.webp';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import { StyledSwiperButtonsPosition } from 'components/StyledComponents';
import SwiperButtons from 'components/SwiperButtons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CompanyHistoryDialog from '../components/CompanyHistoryDialog';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '120px 0 100px',
  position: 'relative',
  backgroundColor: '#F7F7F7',
  [theme.breakpoints.down('lg')]: { padding: '90px 0' },
  [theme.breakpoints.down('md')]: { padding: '70px 0 90px' },
  [theme.breakpoints.down('sm')]: { padding: '60px 0 70px' },

  '& .mapBg': {
    position: 'absolute',
    top: '50%',
    right: '3%',
    transform: 'translate(0, -50%)',
    width: '55%',
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
  '& .MuiButton-outlinedSizeLarge': {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      padding: '12px 24px',
      borderWidth: '2px !important',
    },
  },
}));

const StyledSwiperSlide = styled('div')(({ theme }) => ({
  '& img': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: '0 0 15px',
    [theme.breakpoints.down('sm')]: { margin: '0 auto 10px', display: 'block' },
  },
  '& h6': {
    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
  },
}));

const AboutSection2 = () => {
  const translationKey = 'about.section2';
  const { t } = useTranslation();

  const theme = useTheme();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleCloseDialog = () => setIsOpenDialog(false);

  const countries = t('countries', { returnObjects: true });
  const countriesImg = [
    China,
    Kg,
    Kz,
    Uz,
    Rus,
    Tur,
    Tj,
    Europe,
    Afghanistan,
    Iran,
    Baltic,
    Azer,
    Ge,
  ];

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledSection>
      <OrionContainer>
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ width: { md: '50%' } }}>
            <Typography variant="h2" color={theme.palette.primary.main}>
              {t('orionTrans')}
            </Typography>
            <Typography
              variant="subtitle2"
              mt={{ sm: 3, xs: 2 }}
              mb={{ sm: 4, xs: 3 }}
            >
              {t(`${translationKey}.subtitle1`)}
            </Typography>

            <Button
              color="primary"
              variant="outlined"
              fullWidth={isMobile}
              size="large"
              onClick={() => setIsOpenDialog(true)}
            >
              {t('buttons.readOurStory')}
            </Button>
          </Box>

          <Box mt={4} sx={{ position: 'relative' }}>
            <Typography
              variant="subtitle1"
              mb={{ sm: 6, xs: 4 }}
              fontWeight={'bold'}
            >
              {t(`${translationKey}.subtitle2`)}
            </Typography>
            <Swiper
              className="swiperStatic swiperCustomNavigation"
              navigation={true}
              modules={[Navigation]}
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                1200: {
                  spaceBetween: 10,
                  slidesPerView: 6,
                },
                900: {
                  spaceBetween: 10,
                  slidesPerView: 5,
                },
                600: {
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
                0: {
                  spaceBetween: 5,
                  slidesPerView: 3,
                },
              }}
            >
              <StyledSwiperButtonsPosition>
                <SwiperButtons />
              </StyledSwiperButtonsPosition>
              {countries.map((el, idx) => (
                <SwiperSlide key={idx}>
                  <StyledSwiperSlide>
                    <LazyImage src={countriesImg[idx]} alt={el} />
                    <Typography variant="subtitle1">{el}</Typography>
                  </StyledSwiperSlide>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </OrionContainer>

      <LazyImage
        alt="map"
        src={MapBg}
        className="mapBg"
        style={{ userSelect: 'none' }}
      />

      <CompanyHistoryDialog
        open={isOpenDialog}
        handleClose={handleCloseDialog}
      />
    </StyledSection>
  );
};

export default AboutSection2;
