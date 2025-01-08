import {
  Avatar,
  Box,
  Divider,
  Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import OfficeImg from 'assets/images/office.webp';
import DefaultButton from 'components/DefaultButton';
import { FlexGap10 } from 'components/FlexBox';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import {
  Styled50vhLoadingBox,
  StyledAvatar,
  StyledSwiperButtonsPosition,
} from 'components/StyledComponents';
import SwiperButtons from 'components/SwiperButtons';
import { scrollIntoView, filterArrByLanguage, formatName } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectedLanguageRecoil, teamRecoil } from 'store';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    borderRadius: '16px',
  },
}));

const StyledAvatarSmall = styled(Avatar)(({ theme }) => ({
  width: '80px',
  height: '80px',

  [theme.breakpoints.down('lg')]: {
    width: '70px',
    height: '70px',
  },
  [theme.breakpoints.down('md')]: {
    width: '60px',
    height: '60px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
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

  const team = useRecoilValue(teamRecoil);
  const language = useRecoilValue(selectedLanguageRecoil);

  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (team) {
      const filteredTeam = filterArrByLanguage(team, language);

      setData(filteredTeam);
      setActive(filteredTeam[0]);
    }
  }, [team, language]);

  return (
    <StyledSection id="homeTeamSection">
      <OrionContainer>
        {active ? (
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
                  <Typography mt={1} variant="subtitle1" fontWeight="500">
                    {/*<Typography mt={1} variant="h2">*/}
                    {t(`${translationKey}.description`)}
                  </Typography>
                </Box>

                <Divider />

                <FlexGap10 my={{ md: 3, xs: 2 }}>
                  <StyledAvatar
                    src={active.images.file}
                    alt={active.images.name}
                  />
                  <div>
                    <Typography color="#4E5865" variant="body1">
                      {active.position}
                    </Typography>
                    <Typography fontWeight="500" variant="subtitle1">
                      {formatName(
                        language,
                        active.lastName,
                        active.firstName,
                        active.midName,
                      )}
                    </Typography>
                  </div>
                </FlexGap10>
                <Typography variant="subtitle2" color="#332C2C">
                  {active.about}
                </Typography>

                <DefaultButton
                  sx={{ my: 2 }}
                  component={Link}
                  variant="outlined"
                  to="/about#aboutSection9"
                >
                  {t('buttons.learnMore')}
                </DefaultButton>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid item lg={5.95} md={5}>
                <StyledImageBox>
                  <LazyImage src={OfficeImg} alt="office" />
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

                {data.map(
                  (member, idx) =>
                    member.id !== active.id && (
                      <SwiperSlide key={idx}>
                        <StyledFlexGap10
                          theme={theme}
                          onClick={() => {
                            scrollIntoView('#homeTeamSection');
                            setActive(member);
                          }}
                        >
                          <StyledAvatarSmall
                            src={member.images.file}
                            alt={member.images.name}
                          />
                          <div>
                            <Typography color="#4E5865" variant="body1">
                              {member.position}
                            </Typography>
                            <Typography
                              fontWeight="500"
                              variant="subtitle1"
                              sx={{ wordBreak: 'break-all' }}
                            >
                              {formatName(
                                language,
                                member.lastName,
                                member.firstName,
                              )}
                            </Typography>
                          </div>
                        </StyledFlexGap10>
                      </SwiperSlide>
                    ),
                )}
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
