import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import PostCard from '../../../components/PostCard';
import { FlexBox } from '../../../components/FlexBox';
import { useRecoilValue } from 'recoil';
import { blogRecoil, selectedLanguageRecoil } from '../../../recoil';
import OrionLoading from '../../../components/OrionLoading';
import { filterArrByLanguage } from '../../../helpers/utils';

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
    width: 'calc(100% / 3 - 40px * 2 / 3)',

    [theme.breakpoints.down('md')]: { width: 'calc(100% / 2 - 40px / 2)' },
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
  '& .postCardImg': {
    height: '270px',
  },
}));

const BlogContentSection = () => {
  const blogList = useRecoilValue(blogRecoil);
  const language = useRecoilValue(selectedLanguageRecoil);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (language && blogList) {
      const filteredReviews = filterArrByLanguage(blogList, language);

      setData(filteredReviews);
    }
  }, [language, blogList]);

  return (
    <StyledSection>
      {blogList ? (
        <OrionContainer>
          <StyledFlexBox>
            {data.map(post => (
              <PostCard key={post.id} post={post} />
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
