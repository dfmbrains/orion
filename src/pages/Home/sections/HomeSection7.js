import {
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import PostCard from 'components/PostCard';
import { Styled50vhLoadingBox } from 'components/StyledComponents';
import { filterArrByLanguage } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { blogRecoil } from 'store';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '45px 0 90px',
  position: 'relative',
  [theme.breakpoints.down('lg')]: { padding: '35px 0' },
  [theme.breakpoints.down('md')]: { padding: '25px 0 0' },
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: '45px 0 90px',

  '& .postCardImg': {
    height: '270px',
    [theme.breakpoints.down('lg')]: { height: '240px' },
    [theme.breakpoints.down('md')]: { height: '220px' },
    [theme.breakpoints.down('sm')]: { height: '210px' },
  },
}));

const HomeSection7 = () => {
  const translationKey = 'home.section7';
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const blogList = useRecoilValue(blogRecoil);

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [data, setData] = useState([]);

  useEffect(() => {
    if (i18n.language && blogList) {
      const filteredReviews = filterArrByLanguage(blogList, i18n.language);

      setData(filteredReviews.slice(0, isMobile ? 3 : isLaptop ? 2 : 3));
    }
  }, [i18n.language, blogList, isLaptop, isMobile]);

  return (
    <StyledSection>
      {blogList ? (
        <OrionContainer>
          <Typography variant="h2" mb={{ lg: 5, sm: 4, xs: 3 }}>
            {t(`${translationKey}.title`)}
          </Typography>

          <Grid container spacing={{ md: 5, xs: 2 }}>
            {data.map((el, idx) => (
              <StyledGridItem key={idx} item lg={4} sm={6} xs={12}>
                <PostCard post={el} />
              </StyledGridItem>
            ))}
          </Grid>
        </OrionContainer>
      ) : (
        <Styled50vhLoadingBox>
          <OrionLoading />
        </Styled50vhLoadingBox>
      )}
    </StyledSection>
  );
};

export default HomeSection7;
