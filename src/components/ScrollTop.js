import React, {useEffect, useState} from 'react';
import {IconButton, Icon, styled, useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";

const StyledIconButton = styled(IconButton)(({theme, status}) => ({
   position: "fixed",
   bottom: "3%",
   right: "1.5%",
   zIndex: theme.zIndex.mobileStepper,
   backgroundColor: theme.palette.primary.main,
   transition: "0.2s",
   transform: `scale(${status > 0 ? '1' : '0'})`,

   "&:hover": {
      backgroundColor: theme.palette.primary.dark
   },
   "& .material-icons": {
      color: theme.palette.secondary.main
   }
}));

const ScrollTop = () => {
   const theme = useTheme()
   const location = useLocation()
   const [active, setActive] = useState()

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () =>
             setActive(window.pageYOffset)
         );
      }
   }, [])

   const handleScroll = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"})

   useEffect(() => {
      handleScroll()
   }, [location.pathname])

   return (
       <StyledIconButton status={active} onClick={handleScroll} size={"large"} theme={theme}>
          <Icon>arrow_upward</Icon>
       </StyledIconButton>
   );
};

export default ScrollTop;