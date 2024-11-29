import React from 'react';
import {
  Divider,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import TeamImg from '../../../assets/images/team.webp';
import { FlexBox } from '../../../components/FlexBox';
import { Trans, useTranslation } from 'react-i18next';
import ImageComponent from '../../../components/ImageComponent';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '50px 0',

  '& .aboutSection5Img': {
    width: '80%',
    marginTop: '28px',
    [theme.breakpoints.down('lg')]: { width: '95%', marginTop: '20px' },
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
  '& .aboutSection5Objectives': {
    backgroundColor: '#F7F7F7',
    padding: '15px 30px',

    '&:not(:last-child)': {
      marginBottom: '10px',
      [theme.breakpoints.down('lg')]: { marginBottom: '7px' },
    },
    [theme.breakpoints.down('lg')]: { padding: '10px 15px' },
  },
}));

const AboutSection5 = () => {
  const translationKey = 'about.section5';
  const { t } = useTranslation();

  const theme = useTheme();

  const objectives =
    t(`${translationKey}.objectives`, { returnObjects: true }) || [];

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={{ lg: 5, xs: 3 }}>
          <Grid item md={6} xs={12}>
            <FlexBox sx={{ height: '100%' }}>
              <div>
                <Typography mb={{ lg: 3, xs: 2 }} variant="h3">
                  <Trans
                    i18nKey={`${translationKey}.title1`}
                    components={{
                      span: (
                        <span style={{ color: theme.palette.primary.main }}>
                          Goal
                        </span>
                      ),
                    }}
                  />
                </Typography>
                <Typography
                  pb={{ lg: 3, xs: 2 }}
                  width={{ sm: '80%', xs: '100%' }}
                  variant="subtitle2"
                >
                  {t(`${translationKey}.subtitle`)}
                </Typography>
                <Divider />
                <ImageComponent
                  alt="team"
                  src={TeamImg}
                  className="aboutSection5Img"
                />
              </div>
              {!isTablet && <Divider orientation={'vertical'} flexItem />}
            </FlexBox>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography mb={{ lg: 3, xs: 2 }} variant="h3">
              <Trans
                i18nKey={`${translationKey}.title2`}
                components={{
                  span: (
                    <span style={{ color: theme.palette.primary.main }}>
                      Objectives
                    </span>
                  ),
                }}
              />
            </Typography>

            {objectives.map((el, ind) => (
              <Typography
                key={ind}
                variant="subtitle1"
                className="aboutSection5Objectives"
              >
                {el}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </OrionContainer>
    </StyledSection>
  );
};

export default AboutSection5;
