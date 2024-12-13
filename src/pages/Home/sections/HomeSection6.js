import React, { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import OfficeImg from '../../../assets/images/officePhoto.webp';
import { FlexGap10 } from '../../../components/FlexBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SwiperButtons from '../../../components/SwiperButtons';
import {
  Styled50vhLoadingBox,
  StyledSwiperButtonsPosition,
} from '../../../components/StyledComponents';
import { anchorLinkHandler, formatName } from '../../../helpers/utils';
import OrionLoading from '../../../components/OrionLoading';
import { useRecoilState } from 'recoil';
import { teamRecoil } from '../../../recoil';
import { useTranslation } from 'react-i18next';
import ImageComponent from '../../../components/ImageComponent';
import DefaultButton from '../../../components/DefaultButton';
import { useNavigate } from 'react-router-dom';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '90px 0 120px',
  position: 'relative',
  [theme.breakpoints.down('lg')]: { padding: '70px 0' },
  [theme.breakpoints.down('md')]: { padding: '60px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },
}));

const StyledImageBox = styled('div')(() => ({
  '& img': {
    width: '100%',
  },
}));

const StyledPreviewMemberBox = styled('div')(({ theme }) => ({
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

const StyledFlexGap10 = styled(FlexGap10)(({ theme }) => ({
  cursor: 'pointer',

  '& .MuiTypography-subtitle1': {
    borderBottom: '3px solid transparent',
    transition: '0.3s',
  },
  '&:hover': {
    '& .MuiTypography-subtitle1': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const HomeSection6 = () => {
  const translationKey = 'home.section6';
  const { t } = useTranslation();

  const theme = useTheme();
  const navigate = useNavigate();

  const [team] = useRecoilState(teamRecoil);

  const [active, setActive] = useState(null);

  const navigateToOurTeam = () => {
    navigate('/about');
    setTimeout(() => anchorLinkHandler('aboutSection9'), 0);
  };

  useEffect(() => {
    if (team) {
      setActive(team[0]);
    }
  }, [team]);

  return (
    <StyledSection id="homeTeamSection">
      <OrionContainer>
        {team && active ? (
          <>
            <Grid
              container
              alignItems="center"
              spacing={{ lg: 5, md: 3, xs: 2 }}
            >
              <Grid item lg={5.95} md={6.95}>
                <Box mb={{ md: 5, sm: 3, xs: 2 }} pr={2}>
                  <Typography variant="h2">
                    {t(`${translationKey}.title`)}
                  </Typography>
                  {/*<Typography mt={1} variant="subtitle1" fontWeight="500">*/}
                  <Typography mt={1} variant="h2">
                    {t(`${translationKey}.description`)}
                  </Typography>
                </Box>

                <Divider />

                <FlexGap10 my={{ md: 3, xs: 2 }}>
                  <StyledPreviewMemberBox>
                    <ImageComponent
                      src={active.images.file}
                      alt={active.images.name}
                    />
                  </StyledPreviewMemberBox>
                  <div>
                    <Typography color="#4E5865" variant="body1">
                      {active.position}
                    </Typography>
                    <Typography fontWeight="500" variant="subtitle1">
                      {formatName(
                        active.firstName,
                        active.midName,
                        active.lastName,
                      )}
                    </Typography>
                  </div>
                </FlexGap10>
                <Typography variant="subtitle2" color="#332C2C">
                  {active.about}
                </Typography>

                <DefaultButton
                  sx={{ my: 2 }}
                  variant="outlined"
                  onClick={navigateToOurTeam}
                >
                  {t('buttons.learnMore')}
                </DefaultButton>
              </Grid>

              <Divider orientation={'vertical'} flexItem />

              <Grid item lg={5.95} md={5}>
                <StyledImageBox>
                  <ImageComponent src={OfficeImg} alt="office" />
                </StyledImageBox>
              </Grid>
            </Grid>

            <Box
              mt={{ lg: 8, md: 6, sm: 4, xs: 3 }}
              sx={{ position: 'relative' }}
            >
              <Typography variant="h2" mb={{ md: 5, xs: 3 }}>
                {t(`${translationKey}.subtitle`)}
              </Typography>
              <Swiper
                className="swiperStatic swiperCustomNavigation"
                navigation={true}
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                  1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                  },
                  900: {
                    spaceBetween: 15,
                    slidesPerView: 3,
                  },
                  550: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                  },
                  0: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                  },
                }}
              >
                <StyledSwiperButtonsPosition>
                  <SwiperButtons />
                </StyledSwiperButtonsPosition>

                {team.map((el, idx) => (
                  <SwiperSlide key={idx}>
                    <StyledFlexGap10
                      theme={theme}
                      onClick={() => {
                        anchorLinkHandler('homeTeamSection');
                        setActive(el);
                      }}
                    >
                      <StyledPreviewMemberBox>
                        <ImageComponent
                          src={el.images.file}
                          alt={el.images.name}
                        />
                      </StyledPreviewMemberBox>
                      <div>
                        <Typography color="#4E5865" variant="body1">
                          {el.position}
                        </Typography>
                        <Typography
                          fontWeight="500"
                          variant="subtitle1"
                          sx={{ wordBreak: 'break-all' }}
                        >
                          {formatName(el.firstName, '', el.lastName)}
                        </Typography>
                      </div>
                    </StyledFlexGap10>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </>
        ) : (
          <Styled50vhLoadingBox>
            <OrionLoading />
          </Styled50vhLoadingBox>
        )}
      </OrionContainer>
    </StyledSection>
  );
};

export default HomeSection6;
