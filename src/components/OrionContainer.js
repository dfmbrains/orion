import React from 'react';
import { Container } from '@mui/material';

const OrionContainer = ({ children }) => {
  return (
    <Container maxWidth={false} sx={{ px: { xl: 8 } }}>
      {children}
    </Container>
  );
};

export default OrionContainer;
