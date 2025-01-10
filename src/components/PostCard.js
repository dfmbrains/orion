import { styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import DefaultButton from 'components/DefaultButton';
import LazyImage from 'components/LazyImage';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { blogDetailsRecoil, monthsRecoil } from 'store';
import { FlexGap10 } from './FlexBox';
import { StyledResponsiveImageBox } from './StyledComponents';

const StyledBox = styled('div')(({ theme }) => ({
  paddingLeft: '15px',
  borderLeft: '1px solid #A6A6A6',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '0',
    borderLeft: 'none',
    paddingTop: '10px',
    borderTop: '1px solid #A6A6A6',
  },
  [theme.breakpoints.down('sm')]: { paddingTop: '8px' },
}));

const PostCard = ({ post }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const date = new Date(post.created);

  const setBlog = useSetRecoilState(blogDetailsRecoil);
  const months = useRecoilValue(monthsRecoil);

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="postCard">
      <StyledResponsiveImageBox className="postCardImg">
        <LazyImage src={post.images[0].file} alt={post.images[0].name} />
      </StyledResponsiveImageBox>
      <FlexGap10
        mt={{ lg: 3, xs: 1 }}
        sx={{
          alignItems: 'flex-start',
          flexDirection: isTablet ? 'column' : 'row',
        }}
      >
        {isTablet ? (
          <FlexGap10 sx={{ alignItems: 'flex-end' }}>
            <Typography variant="h2" component={'h5'}>
              {date.getDate()}
            </Typography>
            <Typography variant="subtitle1">
              {months[date.getMonth()]}
            </Typography>
            <Typography variant="subtitle1">{date.getFullYear()}</Typography>
          </FlexGap10>
        ) : (
          <div>
            <Typography variant="h2" component={'h5'}>
              {date.getDate()}
            </Typography>
            <Typography variant="subtitle1">
              {months[date.getMonth()]}
            </Typography>
            <Typography variant="subtitle1">{date.getFullYear()}</Typography>
          </div>
        )}
        <StyledBox>
          <Typography variant="h5" fontWeight="500" mb={{ lg: 1.5, xs: 1 }}>
            {post.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="##6C6C6C"
            mb={{ lg: 3, xs: 2 }}
          >
            {post.subtitle}
          </Typography>

          <DefaultButton
            color="primary"
            component={Link}
            variant="contained"
            to={`/blog/${post.id}`}
            onClick={() => setBlog(post)}
            size={isTablet ? 'small' : 'medium'}
          >
            {t('buttons.readMore')}
          </DefaultButton>
        </StyledBox>
      </FlexGap10>
    </div>
  );
};

export default PostCard;
