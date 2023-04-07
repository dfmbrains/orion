import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {themeOptions} from "./options";

const OrionTheme = ({children}) => {
   const theme = createTheme({
      ...themeOptions
   })

   return (
       <ThemeProvider theme={theme}>
          <CssBaseline/>
          {children}
       </ThemeProvider>
   );
};

export default OrionTheme;