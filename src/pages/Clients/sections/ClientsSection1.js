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
import MatxLoading from '../../../components/MatxLoading';
import { Trans, useTranslation } from 'react-i18next';

const StyledSection = styled('section')(() => ({
  padding: '90px 0 160px',
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
            variant={'text'}
            onClick={() => setPart('clients')}
          >
            {t(`${translationKey}.clients`)}.
          </Button>
          <Button
            color={part === 'partners' ? 'primary' : 'info'}
            variant={'text'}
            onClick={() => setPart('partners')}
          >
            {t(`${translationKey}.partners`)}.
          </Button>
          <Button href={'#testimonialsSection'} color={'info'} variant={'text'}>
            {t(`${translationKey}.testimonials`)}.
          </Button>
        </ButtonGroup>

        <Typography mt={4} mb={5} variant={'h2'}>
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

        <Typography variant={'subtitle2'}>
          {t(`${translationKey}.subtitle`)}
        </Typography>

        {partnersList ? (
          <Box mt={6} pt={10} sx={{ position: 'relative' }}>
            <Swiper
              className="swiperCustomNavigation"
              navigation={true}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={20}
            >
              <StyledSwiperButtonsPosition>
                <SwiperButtons />
              </StyledSwiperButtonsPosition>

              {partnersList.map(el => (
                <SwiperSlide key={el.id}>
                  <StyledImageBox>
                    <img src={el.images.file} alt={el.images.name} />
                  </StyledImageBox>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        ) : (
          <Styled50vhLoadingBox>
            <MatxLoading />
          </Styled50vhLoadingBox>
        )}
      </OrionContainer>
    </StyledSection>
  );
};

export default ClientsSection1;
