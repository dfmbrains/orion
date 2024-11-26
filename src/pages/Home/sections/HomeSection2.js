import React from 'react';
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FreightTriangleBg from '../../../assets/images/freightTriangle.webp';
import ContainerFreight from '../../../assets/images/containerFreight.webp';
import EllipseBg from '../../../assets/images/ellipse.webp';
import OrionContainer from '../../../components/OrionContainer';
import { useNavigate } from 'react-router-dom';
import { handleScrollToTop } from '../../../helpers/utils';
import { useTranslation } from 'react-i18next';

const StyledSection = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: '120px 0 0',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: { padding: '100px 0 0' },
  [theme.breakpoints.down('md')]: { padding: '80px 0 60px' },
  [theme.breakpoints.down('sm')]: { padding: '60px 0' },

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
    '& img': {
      width: '100%',
    },
    [theme.breakpoints.down('lg')]: { display: 'flex', alignItems: 'flex-end' },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

const HomeSection2 = () => {
  const translationKey = 'home.section2';

  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();

  const otherServicesList =
    t(`${translationKey}.otherServices.list`, { returnObjects: true }) || [];

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={{ xs: 4, lg: 8 }}>
          <Grid
            sx={{ order: 0 }}
            item
            md={3.5}
            sm={5}
            xs={5}
            className="containerFreightImg"
          >
            <img src={ContainerFreight} alt={t(`${translationKey}.title`)} />
          </Grid>
          <Grid sx={{ order: 2 }} item md={5} xs={12}>
            <Box sx={{ pb: { xs: 1, md: 5, lg: 0 } }}>
              <Typography mb={{ xs: 1, sm: 2, md: 3, lg: 6 }} variant="h2">
                {t(`${translationKey}.title`)}
              </Typography>
              <Typography mb={{ xs: 1, lg: 3 }} color={'primary'} variant="h4">
                {t(`${translationKey}.subtitle`)}
              </Typography>
              <Typography mb={{ xs: 1, lg: 3 }} variant="body1">
                {t(`${translationKey}.description`)}
              </Typography>

              <Divider />

              <Button
                onClick={() => {
                  handleScrollToTop();
                  navigate('/services');
                }}
                sx={{ mt: { md: 3, xs: 2 } }}
                size={isLaptop ? 'medium' : 'large'}
                variant={'contained'}
                color={'primary'}
              >
                {t('buttons.learnMore')}
              </Button>

            {/*  @Todo button to get in touch*/}
            </Box>
          </Grid>
          <Grid
            item
            xs={7}
            md={3.5}
            sx={{
              alignSelf: { sm: 'center', md: 'flex-start', lg: 'center' },
              order: { sm: 1, md: 3 },
            }}
          >
            <Card
              sx={{ py: { sm: 2, lg: 6, xs: 2 }, px: { sm: 2, lg: 6, xs: 1 } }}
            >
              <Typography mb={2} sx={{ fontWeight: 'bold' }} variant="h5">
                {t(`${translationKey}.otherServices.title`)}
              </Typography>

              {otherServicesList.map((el, ind) => (
                <Typography key={ind} mt={ind === 0 ? 0 : 1} variant="body1">
                  {el}
                </Typography>
              ))}
            </Card>
          </Grid>
        </Grid>
      </OrionContainer>
      <img
        className="freightTriangleBg"
        src={FreightTriangleBg}
        alt="triangle"
      />
      <img className="ellipseBg" src={EllipseBg} alt="ellipse" />
    </StyledSection>
  );
};

export default HomeSection2;
