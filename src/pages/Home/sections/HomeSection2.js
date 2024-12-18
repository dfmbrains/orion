import {
  Box,
  Card,
  Divider,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ContainerFreight from 'assets/images/containerFreight.webp';
import EllipseBg from 'assets/images/ellipse.webp';
import FreightTriangleBg from 'assets/images/freightTriangle.webp';
import DefaultButton from 'components/DefaultButton';
import { FlexGap10 } from 'components/FlexBox';
import ImageComponent from 'components/ImageComponent';
import OrionContainer from 'components/OrionContainer';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: '120px 0 0',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: { padding: '100px 0 0' },
  [theme.breakpoints.down('md')]: { padding: '80px 0 60px' },
  [theme.breakpoints.down('sm')]: { padding: '40px 0 50px' },

  '& .freightTriangleBg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2,
  },

  '& .ellipseBg': {
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%)',
    width: '90%',
    height: '120%',
    zIndex: -1,

    [theme.breakpoints.down('md')]: { display: 'none' },
  },

  '& .containerFreightImg': {
    position: 'absolute',
    left: '8%',
    bottom: '-6px',
    width: '25%',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      position: 'static',
      width: 'auto',
    },

    '& img': {
      width: '100%',

      [theme.breakpoints.down('lg')]: { bottom: '-150px' },
      [theme.breakpoints.down('md')]: { bottom: '0' },
    },
  },
}));

const HomeSection2 = () => {
  const translationKey = 'home.section2';

  const theme = useTheme();
  const { t } = useTranslation();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const otherServicesList =
    t(`${translationKey}.otherServices.list`, { returnObjects: true }) || [];

  return (
    <StyledSection>
      <OrionContainer>
        {!isTablet && (
          <div className="containerFreightImg">
            <ImageComponent
              src={ContainerFreight}
              alt={t(`${translationKey}.title`)}
            />
          </div>
        )}

        <Grid container spacing={{ sm: 4, xs: 3 }}>
          {!isMobile && (
            <Grid item md={4.5} sm={5} xs={5}>
              {isTablet && (
                <div className="containerFreightImg">
                  <ImageComponent
                    src={ContainerFreight}
                    alt={t(`${translationKey}.title`)}
                  />
                </div>
              )}
            </Grid>
          )}

          <Grid item md={4.5} xs={12}>
            <Box sx={{ pb: { xs: 0, md: 5, lg: 15 } }}>
              <Typography mb={{ xs: 1, sm: 2, md: 3, lg: 6 }} variant="h2">
                {t(`${translationKey}.title`)}
              </Typography>
              <Typography mb={{ xs: 1, lg: 3 }} color="primary" variant="h4">
                {t(`${translationKey}.subtitle`)}
              </Typography>
              <Typography mb={{ xs: 1, lg: 3 }} variant="body1">
                {t(`${translationKey}.description`)}
              </Typography>

              <Divider />

              <FlexGap10 sx={{ mt: { md: 3, xs: 2 } }}>
                <DefaultButton variant="contained" linkTo="/services">
                  {t('buttons.learnMore')}
                </DefaultButton>

                <DefaultButton variant="outlined" linkTo="/contact?form=1">
                  {t('buttons.order')}
                </DefaultButton>
              </FlexGap10>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              alignSelf: { sm: 'center', md: 'flex-start', lg: 'center' },
            }}
          >
            <Card
              sx={{
                pt: { lg: 4, sm: 2, xs: 4 },
                pb: { xs: 1 },
                px: { lg: 4, sm: 2, xs: 4 },
                mb: { lg: 10, sm: 0 },
              }}
            >
              <Typography mb={2} sx={{ fontWeight: 'bold' }} variant="h5">
                {t(`${translationKey}.otherServices.title`)}
              </Typography>

              {otherServicesList.map((el, ind) => (
                <Typography key={ind} mt={ind === 0 ? 0 : 1} variant="body1">
                  {el}
                </Typography>
              ))}

              <DefaultButton
                fullWidth
                linkTo="/services"
                variant="text"
                sx={{ mt: 2 }}
              >
                {t('buttons.otherServices')}
              </DefaultButton>
            </Card>
          </Grid>
        </Grid>
      </OrionContainer>
      <ImageComponent
        className="freightTriangleBg"
        src={FreightTriangleBg}
        alt="triangle"
      />
      <ImageComponent className="ellipseBg" src={EllipseBg} alt="ellipse" />
    </StyledSection>
  );
};

export default HomeSection2;
