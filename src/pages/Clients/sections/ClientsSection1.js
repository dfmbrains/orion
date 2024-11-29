import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import { Navigation } from 'swiper';
import {
  Styled50vhLoadingBox,
  StyledSwiperButtonsPosition,
} from '../../../components/StyledComponents';
import SwiperButtons from '../../../components/SwiperButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FlexAllCenter } from '../../../components/FlexBox';
import { useRecoilState } from 'recoil';
import { partnersRecoil } from '../../../recoil';
import OrionLoading from '../../../components/OrionLoading';
import { Trans, useTranslation } from 'react-i18next';
import ImageComponent from '../../../components/ImageComponent';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '90px 0 160px',

  [theme.breakpoints.down('lg')]: { padding: '70px 0 130px' },
  [theme.breakpoints.down('md')]: { padding: '50px 0 100px' },
  [theme.breakpoints.down('sm')]: { padding: '40px 0 60px' },
}));

const StyledImageBox = styled(FlexAllCenter)(() => ({
  height: '100px',
  overflow: 'hidden',

  '& img': {
    minHeight: '100%',
  },
}));

const ClientsSection1 = () => {
  const translationKey = 'clients.section1';
  const { t } = useTranslation();

  const theme = useTheme();

  const [part, setPart] = useState('clients');

  const [partnersList] = useRecoilState(partnersRecoil);

  return (
    <StyledSection>
      <OrionContainer>
        <ButtonGroup>
          <Button
            color={part === 'clients' ? 'primary' : 'info'}
            variant="text"
            onClick={() => setPart('clients')}
          >
            {t(`${translationKey}.clients`)}.
          </Button>
          <Button
            color={part === 'partners' ? 'primary' : 'info'}
            variant="text"
            onClick={() => setPart('partners')}
          >
            {t(`${translationKey}.partners`)}.
          </Button>
          <Button href={'#testimonialsSection'} color="info" variant="text">
            {t(`${translationKey}.testimonials`)}.
          </Button>
        </ButtonGroup>

        <Typography
          variant="h2"
          mt={{ md: 4, sm: 3, xs: 2 }}
          mb={{ md: 5, sm: 4, xs: 3 }}
        >
          <Trans
            i18nKey={`${translationKey}.title`}
            components={{
              span: (
                <span
                  style={{
                    color: theme.palette.primary.main,
                    textTransform: 'capitalize',
                  }}
                ></span>
              ),
              br: <br />,
              item: part,
            }}
          />
        </Typography>

        <Typography variant="subtitle2">
          {t(`${translationKey}.subtitle`)}
        </Typography>

        {partnersList ? (
          <Box
            mt={{ md: 6, sm: 5, xs: 4 }}
            pt={{ md: 10, sm: 8, xs: 6 }}
            sx={{ position: 'relative' }}
          >
            <Swiper
              navigation
              slidesPerView={4}
              spaceBetween={20}
              modules={[Navigation]}
              className="swiperStatic swiperCustomNavigation"
            >
              <StyledSwiperButtonsPosition>
                <SwiperButtons />
              </StyledSwiperButtonsPosition>

              {partnersList.map(el => (
                <SwiperSlide key={el.id}>
                  <StyledImageBox>
                    <ImageComponent src={el.images.file} alt={el.images.name} />
                  </StyledImageBox>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        ) : (
          <Styled50vhLoadingBox>
            <OrionLoading />
          </Styled50vhLoadingBox>
        )}
      </OrionContainer>
    </StyledSection>
  );
};

export default ClientsSection1;
