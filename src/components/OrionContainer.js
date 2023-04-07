import React from 'react';
import {Container} from "@mui/material";

const OrionContainer = ({children}) => {
   return (
       <Container maxWidth={false}>
          {children}
       </Container>
   );
};

export default OrionContainer;