import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import ReviewsBg from 'assets/images/backgrounds/reviews.webp';
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
import { reviewsRecoil, selectedLanguageRecoil } from 'store';

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

  '& .box': {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '50%',
  },

  '& .img': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    maxWidth: '130%',
    maxHeight: '130%',
  },

  '& .child': {
    position: 'absolute',
    right: '0',
    top: '0',
    transform: 'translate(25%, -25%)',
    width: '50%',
    height: '50%',
    borderRadius: '50%',
  },
}));

const HomeSection5 = () => {
  const translationKey = 'home.section5';
  const { t } = useTranslation();

  const reviews = useRecoilValue(reviewsRecoil);
  const language = useRecoilValue(selectedLanguageRecoil);

  const theme = useTheme();

  const [data, setData] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (language && reviews) {
      const filteredReviews = filterArrByLanguage(reviews, language);

      setData(filteredReviews);
      setSelectedReview(filteredReviews[0]);
    }
  }, [language, reviews]);

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
                <div className="box">
                  <LazyImage
                    className="img"
                    src={selectedReview?.img}
                    alt={selectedReview?.name}
                  />
                </div>

                <LazyImage
                  className="child"
                  src={selectedReview?.companyLogo}
                  alt={selectedReview.company}
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
                        size="small"
                        key={item.id}
                        aria-label={`Go to slide #${idx + 1}`}
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

            <Button
              component={Link}
              color="secondary"
              variant="contained"
              sx={{ mt: { lg: 5, md: 4, sm: 3, xs: 2 } }}
              to="/clients-&-partners#testimonialsSection"
            >
              {t('buttons.readOthers')}
            </Button>
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
