import React from 'react';
import {IconButton, Icon, styled, useTheme} from "@mui/material";

const StyledIconButton = styled(IconButton)(({theme}) => ({
   position: "fixed",
   bottom: "3%",
   right: "3%",
   zIndex: theme.zIndex.mobileStepper,
   backgroundColor: theme.palette.primary.main,

   "&:hover": {
      backgroundColor: theme.palette.primary.dark
   },
   "& .material-icons": {
      color: theme.palette.secondary.main
   }
}));

const ScrollTop = () => {
   const theme = useTheme()

   const handleScroll = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"})

   return (
       <StyledIconButton onClick={handleScroll} size={"large"} theme={theme}>
          <Icon>arrow_upward</Icon>
       </StyledIconButton>
   );
};

export default ScrollTop;