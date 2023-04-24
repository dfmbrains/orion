import React, {useEffect, useState} from 'react';
import {IconButton, Icon, styled, useTheme, useMediaQuery} from "@mui/material";
import {handleScrollToTop} from "../helpers/utils";

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
   const [active, setActive] = useState()

   const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () =>
             setActive(window.pageYOffset)
         );
      }
   }, [])

   return (
       <StyledIconButton status={active} onClick={handleScrollToTop} size={isLaptop ? "medium" : "large"} theme={theme}>
          <Icon fontSize={isLaptop ? "small" : "medium"}>arrow_upward</Icon>
       </StyledIconButton>
   );
};

export default ScrollTop;