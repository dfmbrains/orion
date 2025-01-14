import {
  Box,
  Button,
  ButtonGroup,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { FlexAllCenter } from 'components/FlexBox';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import {
  Styled50vhLoadingBox,
  StyledSwiperButtonsPosition,
} from 'components/StyledComponents';
import SwiperButtons from 'components/SwiperButtons';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { companiesRecoil } from 'store';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '90px 0 160px',

  [theme.breakpoints.down('lg')]: { padding: '70px 0 130px' },
  [theme.breakpoints.down('md')]: { padding: '50px 0 100px' },
  [theme.breakpoints.down('sm')]: { padding: '40px 0 60px' },
}));

const StyledImageBox = styled(FlexAllCenter)(() => ({
  width: '215px',
  height: '120px',
  background: '#F7F7F7',
  borderRadius: '16px',

  '& img': {
    maxWidth: '80%',
    maxHeight: '80%',
  },
}));

const ClientsSection1 = () => {
  const translationKey = 'clients.section1';
  const { t } = useTranslation();

  const theme = useTheme();

  const companiesList = useRecoilValue(companiesRecoil);

  const [searchParams] = useSearchParams();
  const [part, setPart] = useState(
    searchParams.has('part') ? searchParams.get('part') : 0,
  );

  useEffect(() => {
    if (searchParams.has('part') && +searchParams.get('part') !== part) {
      setPart(+searchParams.get('part'));
    }
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <StyledSection>
      <OrionContainer>
        <ButtonGroup>
          <Button
            variant="text"
            onClick={() => setPart(0)}
            color={part === 0 ? 'primary' : 'info'}
          >
            {t(`${translationKey}.clients`)}.
          </Button>
          <Button
            variant="text"
            onClick={() => setPart(1)}
            color={part === 1 ? 'primary' : 'info'}
          >
            {t(`${translationKey}.partners`)}.
          </Button>
          <Button href="#testimonialsSection" color="info" variant="text">
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
              item:
                (part === 0
                  ? t(`${translationKey}.selectedClients.title`)
                  : t(`${translationKey}.selectedPartners.title`)) || '',
            }}
          />
        </Typography>

        <Typography variant="subtitle2">
          {part === 0
            ? t(`${translationKey}.selectedClients.subtitle`)
            : t(`${translationKey}.selectedPartners.subtitle`)}
        </Typography>

        {companiesList ? (
          <Box
            mt={{ md: 6, sm: 5, xs: 4 }}
            pt={{ md: 10, sm: 8, xs: 6 }}
            sx={{ position: 'relative' }}
          >
            <Swiper
              navigation
              spaceBetween={2}
              slidesPerView={6}
              modules={[Navigation]}
              className="swiperStatic swiperCustomNavigation"
            >
              <StyledSwiperButtonsPosition>
                <SwiperButtons />
              </StyledSwiperButtonsPosition>

              {companiesList
                .filter(item =>
                  item.type !== 'all'
                    ? part === 0
                      ? item.type === 'client'
                      : item.type === 'partner'
                    : item,
                )
                .map((el, idx) => (
                  <SwiperSlide key={idx}>
                    <StyledImageBox>
                      <LazyImage src={el.images.file} alt={el.images.name} />
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
