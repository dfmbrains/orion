import { Box, styled, Typography, useTheme } from '@mui/material';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import { Styled50vhLoadingBox } from 'components/StyledComponents';
import { SwiperButtonNext, SwiperButtonPrev } from 'components/SwiperButtons';
import { createDesiredArrays, filterArrByLanguage } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { selectedLanguageRecoil, teamRecoil } from 'store';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamMemberCard from '../components/TeamMemberCard';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '100px 0',
  [theme.breakpoints.down('lg')]: { padding: '80px 0' },
  [theme.breakpoints.down('lg')]: { padding: '60px 0 70px' },

  '& .MuiTypography-root': {
    textAlign: 'center',
  },
  '& .swiperButtonPrev': {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-100%, -50%)',
    left: '-10%',
    [theme.breakpoints.down('lg')]: { left: '-10px' },
    [theme.breakpoints.down('md')]: { left: '20px' },
    [theme.breakpoints.down('sm')]: { left: '25px' },
  },
  '& .swiperButtonNext': {
    position: 'absolute',
    top: '50%',
    transform: 'translate(100%, -50%)',
    right: '-10%',
    [theme.breakpoints.down('lg')]: { right: '-10px' },
    [theme.breakpoints.down('lg')]: { right: '20px' },
    [theme.breakpoints.down('sm')]: { right: '25px' },
  },
}));

const AboutSection9 = () => {
  const translationKey = 'about.section9';
  const { t } = useTranslation();

  const theme = useTheme();

  const team = useRecoilValue(teamRecoil);
  const language = useRecoilValue(selectedLanguageRecoil);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (team) {
      const filteredTeam = filterArrByLanguage(team, language);

      setData(createDesiredArrays(filteredTeam));
    }
  }, [team, language]);

  return (
    <StyledSection id="aboutSection9">
      <OrionContainer>
        {team ? (
          <>
            <Typography variant="h3">
              <Trans
                i18nKey={`${translationKey}.title`}
                components={{
                  span: (
                    <span style={{ color: theme.palette.primary.main }}>
                      Our team{' '}
                    </span>
                  ),
                }}
              />
            </Typography>
            <Typography
              width={{ lg: '50%', md: '80%', xs: '100%' }}
              mx={'auto'}
              variant="subtitle2"
              mt={1}
            >
              {t(`${translationKey}.subtitle`)}
            </Typography>

            <Box
              mx={'auto'}
              mt={{ lg: 8, md: 6, xs: 4 }}
              px={{ sm: 3, xs: 4, lg: 0 }}
              sx={{
                position: 'relative',
                width: { lg: '60%', md: '80%', xs: '100%' },
              }}
            >
              <Swiper
                navigation
                spaceBetween={50}
                slidesPerView={2}
                modules={[Navigation]}
                className="swiperStatic swiperCustomNavigation"
                breakpoints={{
                  900: { spaceBetween: 50, slidesPerView: 2 },
                  0: { spaceBetween: 30, slidesPerView: 1 },
                }}
              >
                <>
                  <SwiperButtonPrev />
                  <SwiperButtonNext />
                </>

                {data.map((membersArr, idx) => (
                  <SwiperSlide key={idx}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '20px',
                      }}
                    >
                      {membersArr.map(member => (
                        <TeamMemberCard key={member.id} member={member} />
                      ))}
                    </Box>
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

export default AboutSection9;
