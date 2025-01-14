import { styled } from '@mui/material';
import { FlexBox } from 'components/FlexBox';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import PostCard from 'components/PostCard';
import { filterArrByLanguage } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { blogRecoil } from 'store';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '100px 0 80px',
  position: 'relative',

  [theme.breakpoints.down('lg')]: { padding: '90px 0 70px' },
  [theme.breakpoints.down('md')]: { padding: '80px 0 60px' },
  [theme.breakpoints.down('sm')]: { padding: '60px 0' },
}));

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  gap: '80px 60px',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: { gap: '60px 30px' },
  [theme.breakpoints.down('sm')]: { gap: '40px' },

  '& .postCard': {
    width: 'calc(100% / 3 - 60px * 2 / 3)',

    [theme.breakpoints.down('md')]: { width: 'calc(100% / 2 - 40px / 2)' },
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
  '& .postCardImg': {
    height: '270px',
  },
}));

const BlogContentSection = () => {
  const { i18n } = useTranslation();
  const blogList = useRecoilValue(blogRecoil);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (i18n.language && blogList) {
      const filteredReviews = filterArrByLanguage(blogList, i18n.language);

      setData(filteredReviews);
    }
  }, [i18n.language, blogList]);

  return (
    <StyledSection>
      {blogList ? (
        <OrionContainer>
          <StyledFlexBox>
            {data.map((post, idx) => (
              <PostCard key={idx} post={post} />
            ))}
          </StyledFlexBox>
        </OrionContainer>
      ) : (
        <OrionLoading />
      )}
    </StyledSection>
  );
};

export default BlogContentSection;
