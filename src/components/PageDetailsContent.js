import React from 'react';
import { styled, Typography } from '@mui/material';
import OrionContainer from './OrionContainer';

const StyledSection = styled('section')(() => ({
  padding: '100px 0 80px',
}));

const PageDetailsContent = ({ data }) => {
  return (
    <StyledSection>
      <OrionContainer>
        <Typography fontWeight={'500'} variant={'h2'} mb={3}>
          {data.title}
        </Typography>
        <Typography fontWeight={'500'} variant={'h3'} mb={10}>
          {data.subtitle}
        </Typography>

        {data.content.map((el, ind) => (
          <React.Fragment key={ind}>
            <Typography fontWeight={'500'} variant={'h3'} mb={2}>
              {el.title}
            </Typography>
            <Typography variant={'subtitle2'} mb={5}>
              {el.text}
            </Typography>
          </React.Fragment>
        ))}
      </OrionContainer>
    </StyledSection>
  );
};

export default PageDetailsContent;
