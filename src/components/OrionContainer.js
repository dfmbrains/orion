import { Container } from '@mui/material';
import React from 'react';

const OrionContainer = ({ children }) => {
  return (
    <Container maxWidth={false} sx={{ px: { xl: 8 } }}>
      {children}
    </Container>
  );
};

export default OrionContainer;
