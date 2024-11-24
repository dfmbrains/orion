import React from 'react';
import { styled } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledResponsiveImageBox } from '../../../components/StyledComponents';

const StyledSection = styled('section')(() => ({
  padding: '130px 0 0',
  position: 'relative',

  '& .mySwiper, & .mySwiperSlide': { height: '100%' },
  '& .swiper-button-prev, & .swiper-button-next': {
    '&:after': {
      color: '#1B1B1B',
      fontWeight: 'bold',
    },
  },
}));

const StyledSlideBox = styled(StyledResponsiveImageBox)(() => ({
  height: 'calc(100vh / 4 * 3)',

  '& img': {
    maxWidth: '120%',
    maxHeight: '120%',
  },
}));

const BlogDetailsPromo = ({ images }) => {
  return (
    <StyledSection>
      <OrionContainer>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images.map((img, ind) => (
            <SwiperSlide key={ind}>
              <StyledSlideBox>
                <img src={img.file} alt={img.name} />
              </StyledSlideBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </OrionContainer>
    </StyledSection>
  );
};

export default BlogDetailsPromo;
