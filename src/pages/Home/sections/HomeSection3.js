import React from 'react';
import OrionContainer from '../../../components/OrionContainer';
import {
  Card,
  Divider,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CalculateForm from '../components/CalculateForm';
import MapBg from '../../../assets/images/map.webp';
import { useTranslation } from 'react-i18next';
import {
  SwiperButtonNext,
  SwiperButtonPrev,
} from '../../../components/SwiperButtons';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createDesiredArrays } from '../../../helpers/utils';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '0 0 80px',
  background: '#EEF8FF',
  [theme.breakpoints.down('lg')]: { padding: '0 0 60px' },
  [theme.breakpoints.down('md')]: { padding: '0 0 50px' },
}));

const StyledContentBox = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0 50px',
  width: '100%',

  [theme.breakpoints.down('lg')]: { padding: '0 30px' },
  [theme.breakpoints.down('md')]: { flexWrap: 'wrap' },
  [theme.breakpoints.down('sm')]: { padding: '0' },

  '& .mapBg': {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: '0',

    [theme.breakpoints.down('md')]: { height: '38%' },
    [theme.breakpoints.down('sm')]: { height: '60%' },
  },
}));

const StyledSwiperBox = styled('div')(({ theme }) => ({
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
    width: '100%',
  },

  '& .swiperButtonPrev, & .swiperButtonNext': {
    minWidth: 'auto',
    width: '28px',
    height: '28px',

    [theme.breakpoints.down('sm')]: { display: 'none' },
  },

  '& .swiperButtonPrev': {
    position: 'absolute',
    top: 'calc(100% + 10px)',
    left: '0',
  },

  '& .swiperButtonNext': {
    position: 'absolute',
    top: 'calc(100% + 10px)',
    transform: 'translate(100%)',
    left: '10px',
  },
}));

const StyledCountryItem = styled('div')(({ theme }) => ({
  background: '#e8f1fd',
  textAlign: 'center',
  padding: '15px',
  borderRadius: '15px',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('lg')]: { padding: '8px 10px' },
}));

const StyledIntroBox = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '80px 0',
  zIndex: 1,
  width: '45%',

  [theme.breakpoints.down('lg')]: { width: '48%', padding: '60px 0' },
  [theme.breakpoints.down('md')]: { width: '100%', padding: '30px 0' },
  [theme.breakpoints.down('sm')]: { padding: '20px 20px 25px' },

  '& .countriesBox': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',

    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 5px)',
      rowGap: '10px',
    },
  },
}));

const StyledCalculateCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  right: '5%',
  top: '50%',
  transform: 'translate(0, -50%)',
  borderRadius: '15px',
  zIndex: 1,
  width: '40%',

  [theme.breakpoints.down('lg')]: { width: '45%', right: '30px' },
  [theme.breakpoints.down('md')]: {
    margin: '50px 0 0',
    width: '100%',
    position: 'static',
    transform: 'unset',
    top: 'unset',
    right: 'unset',
    overflow: 'unset',
  },
  [theme.breakpoints.down('sm')]: { margin: '30px 0 0' },
}));

const StyledCalculateItem = styled('div')(({ theme }) => ({
  paddingLeft: '32px',
  paddingRight: '32px',
  [theme.breakpoints.down('lg')]: { paddingLeft: '16px', paddingRight: '16px' },
}));

const HomeSection3 = () => {
  const theme = useTheme();
  const translationKey = 'home.section3';
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const countries = createDesiredArrays(
    t('countries', { returnObjects: true }) || [],
  );

  return (
    <StyledSection id={'homeSection3'}>
      <OrionContainer>
        <StyledContentBox>
          <StyledIntroBox>
            <Typography mb={3} variant={'h3'}>
              {t(`${translationKey}.title`)}
            </Typography>
            <Typography mb={3} variant={'subtitle2'}>
              {t(`${translationKey}.subtitle`)}
            </Typography>
            <Typography mb={2} variant={'subtitle2'}>
              {t(`${translationKey}.description`)}
            </Typography>

            <StyledSwiperBox>
              {isMobile ? (
                countries.flat('').map((item, idx) => (
                  <div className="countriesBox">
                    <StyledCountryItem key={idx}>
                      <Typography variant={'subtitle2'}>{item[0]}</Typography>
                    </StyledCountryItem>

                    {item[1] && (
                      <StyledCountryItem key={idx}>
                        <Typography variant={'subtitle2'}>{item[1]}</Typography>
                      </StyledCountryItem>
                    )}
                  </div>
                ))
              ) : (
                <Swiper
                  navigation
                  slidesPerView={3}
                  spaceBetween={15}
                  modules={[Navigation]}
                  className="swiperCustomNavigation"
                  breakpoints={{
                    600: {
                      spaceBetween: 15,
                      slidesPerView: 3,
                    },
                    0: {
                      spaceBetween: 15,
                      slidesPerView: 2,
                    },
                  }}
                >
                  <>
                    <SwiperButtonPrev />
                    <SwiperButtonNext />
                  </>

                  {countries.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="countriesBox">
                        <StyledCountryItem key={idx}>
                          <Typography variant={'subtitle2'}>
                            {item[0]}
                          </Typography>
                        </StyledCountryItem>

                        {item[1] && (
                          <StyledCountryItem key={idx}>
                            <Typography variant={'subtitle2'}>
                              {item[1]}
                            </Typography>
                          </StyledCountryItem>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </StyledSwiperBox>
          </StyledIntroBox>

          <StyledCalculateCard>
            <StyledCalculateItem
              sx={{
                pt: { lg: 6, sm: 3, xs: 2 },
                mb: { lg: 4, sm: 2, xs: 1 },
              }}
            >
              <Typography variant={'h5'}>
                {t(`${translationKey}.calculation.title`)}
              </Typography>
            </StyledCalculateItem>

            <Divider color={'#F18200'} />

            <StyledCalculateItem
              sx={{ pb: { lg: 6, xs: 3 }, mt: { lg: 4, xs: 2 } }}
            >
              <CalculateForm translationKey={translationKey} />
            </StyledCalculateItem>
          </StyledCalculateCard>

          <img src={MapBg} alt="map" className="mapBg" />
        </StyledContentBox>
      </OrionContainer>
    </StyledSection>
  );
};

export default HomeSection3;
