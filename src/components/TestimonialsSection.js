import React, { useEffect, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OrionContainer from './OrionContainer';
import { Styled50vhLoadingBox } from './StyledComponents';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';
import { useRecoilValue } from 'recoil';
import { reviewsRecoil, selectedLanguageRecoil } from '../recoil';
import OrionLoading from './OrionLoading';
import { useTranslation } from 'react-i18next';
import { filterArrByLanguage } from '../helpers/utils';
import { FlexGap10 } from './FlexBox';
import ImageComponent from './ImageComponent';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '70px 0 90px',
  backgroundColor: '#F7F7F7',
  [theme.breakpoints.down('md')]: { padding: '60px 0 80px' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0 70px' },
}));

const StyledCardBox = styled('div')(({ theme }) => ({
  width: '50%',
  margin: '0 auto',
  position: 'relative',

  [theme.breakpoints.down('md')]: { width: '75%' },
  [theme.breakpoints.down('sm')]: { width: '80%' },

  '& .swiper-pagination-progressbar': {
    position: 'absolute',
    left: '0',
    width: '25%',
    top: 'calc(100% + 20px)',
    height: '8px',
    borderRadius: '4px',

    '& .swiper-pagination-progressbar-fill': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px',
    },
  },

  '& .swiperButtonPrev': {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-100%, -50%)',
    left: '-10%',

    [theme.breakpoints.down('md')]: { left: '-20px' },
    [theme.breakpoints.down('sm')]: { left: '-10px' },
  },
  '& .swiperButtonNext': {
    position: 'absolute',
    top: '50%',
    transform: 'translate(100%, -50%)',
    right: '-10%',

    [theme.breakpoints.down('md')]: { right: '-20px' },
    [theme.breakpoints.down('sm')]: { right: '-10px' },
  },
}));

const StyledImgBox = styled('div')(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  minWidth: '100px',
  [theme.breakpoints.down('lg')]: {
    minWidth: '80px',
    width: '80px',
    height: '80px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '70px',
    width: '70px',
    height: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '60px',
    width: '60px',
    height: '60px',
  },

  '& img': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    maxWidth: '130%',
    maxHeight: '130%',
  },
}));

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const reviews = useRecoilValue(reviewsRecoil);
  const language = useRecoilValue(selectedLanguageRecoil);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (language && reviews) {
      const filteredReviews = filterArrByLanguage(reviews, language);

      setData(filteredReviews);
    }
  }, [language, reviews]);

  return (
    <StyledSection id="testimonialsSection">
      <OrionContainer>
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h3" mb={{ lg: 8, md: 6, xs: 4 }}>
            {t('testimonialsSection.title')}
          </Typography>

          {reviews ? (
            <StyledCardBox sx={{ position: 'relative' }}>
              <Swiper
                navigation
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                className="swiperStatic swiperCustomNavigation"
                pagination={{ clickable: true, type: 'progressbar' }}
              >
                {data.length > 1 && (
                  <>
                    <SwiperButtonPrev />
                    <SwiperButtonNext />
                  </>
                )}

                {data.map(el => (
                  <SwiperSlide key={el.id}>
                    <FlexGap10 sx={{ columnGap: '30px' }}>
                      <StyledImgBox>
                        <ImageComponent
                          src={el?.image?.file}
                          alt={el?.image?.name}
                        />
                      </StyledImgBox>

                      <div>
                        <Typography variant="body1" color="#9EADB4">
                          {el?.company || ''}
                        </Typography>
                        <Typography variant="h5">{el.name}</Typography>
                      </div>
                    </FlexGap10>

                    <Typography
                      mt={{ md: 3, xs: 1.5 }}
                      variant="subtitle1"
                      className="justify-text"
                    >
                      "{el.text}"
                    </Typography>
                  </SwiperSlide>
                ))}
              </Swiper>
            </StyledCardBox>
          ) : (
            <Styled50vhLoadingBox>
              <OrionLoading />
            </Styled50vhLoadingBox>
          )}
        </Box>
      </OrionContainer>
    </StyledSection>
  );
};

export default TestimonialsSection;
