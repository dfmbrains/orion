import {
  Box,
  ButtonGroup,
  Icon,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import ReviewsBg from 'assets/images/backgrounds/reviews.webp';
import DefaultButton from 'components/DefaultButton';
import { FlexGap10 } from 'components/FlexBox';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import { Styled50vhLoadingBox } from 'components/StyledComponents';
import { filterArrByLanguage } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewsRecoil } from 'store';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '80px 0',
  background: `url(${ReviewsBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('lg')]: { padding: '60px 0' },
  [theme.breakpoints.down('md')]: { padding: '50px 0' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0 40px' },

  '& .MuiTypography-root': {
    color: '#FFFFFF',
  },
  '& h5': {
    fontWeight: '500',
    width: '50%',
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
}));

const StyledImageBox = styled('div')(({ theme }) => ({
  width: '80px',
  height: '80px',
  position: 'relative',
  minWidth: '80px',

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

  '& .img': {
    width: '100%',
    height: '100%',
  },
}));

const HomeSection5 = () => {
  const translationKey = 'home.section5';
  const { t, i18n } = useTranslation();

  const reviews = useRecoilValue(reviewsRecoil);

  const theme = useTheme();

  const [data, setData] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (i18n.language && reviews) {
      const filteredReviews = filterArrByLanguage(reviews, i18n.language);

      setData(filteredReviews);
      setSelectedReview(filteredReviews[0]);
    }
  }, [i18n.language, reviews]);

  return (
    <StyledSection>
      <OrionContainer>
        <Typography variant="h3">{t(`${translationKey}.title`)}</Typography>

        {selectedReview ? (
          <>
            <Typography my={{ lg: 2, xs: 1 }} variant="h5">
              {selectedReview.text}
            </Typography>

            <FlexGap10>
              <StyledImageBox>
                <LazyImage
                  className="img"
                  alt={selectedReview?.company}
                  src={selectedReview?.companyLogo}
                />
              </StyledImageBox>

              <div style={{ flex: 'auto' }}>
                <Typography variant="subtitle2">
                  {selectedReview.name}
                </Typography>
                <Typography variant="h5">{selectedReview.company}</Typography>
              </div>
            </FlexGap10>

            {data.length > 1 && (
              <Box mt={{ lg: 3, sm: 2, xs: 1 }}>
                <ButtonGroup>
                  {data.map((item, idx) => {
                    const isSelected = item.id === selectedReview.id;

                    return (
                      <IconButton
                        key={idx}
                        size="small"
                        title={t('tagTitles.goToSlideNumber', {
                          item: idx + 1,
                        })}
                        aria-label={t('ariaLabels.goToSlideNumber', {
                          item: idx + 1,
                        })}
                        onClick={() => setSelectedReview(item)}
                        sx={{
                          color: isSelected
                            ? theme.palette.primary.main
                            : '#D6D6D6',
                        }}
                      >
                        <Icon sx={{ fontSize: '14px' }}>
                          {isSelected ? 'star' : 'fiber_manual_record'}
                        </Icon>
                      </IconButton>
                    );
                  })}
                </ButtonGroup>
              </Box>
            )}

            <DefaultButton
              size="medium"
              component={Link}
              color="secondary"
              variant="contained"
              sx={{ mt: { lg: 5, md: 4, sm: 3, xs: 2 } }}
              to="/clients-&-partners#testimonialsSection"
            >
              {t('buttons.readOthers')}
            </DefaultButton>
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

export default HomeSection5;
