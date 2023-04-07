import React, {useEffect, useState} from 'react';
import {Box, Button, Icon, styled, Typography, useTheme} from "@mui/material";
import {FlexBetweenAlignCenter, FlexAllCenter} from "../../../components/FlexBox";
import {Logo} from "../../../components/Logo";
import {NavLink} from "react-router-dom";
import OrionContainer from "../../../components/OrionContainer";

const StyledBox = styled(Box)(({theme, active}) => ({
   backgroundColor: active === 'true' ? '#252525' : 'transparent',
   padding: '13px 0 10px',
   borderBottom: "1px solid #FFFFFF",
   position: "fixed",
   width: "100%",
   top: active === 'true' ? 0 : 32,
   left: 0,
   zIndex: theme.zIndex.appBar,
   transition: "0.2s",

   "& .material-icons": {
      color: "#FFFFFF"
   },
   ".active": {
      position: "relative",

      "&:after": {
         content: "''",
         position: "absolute",
         top: "100%",
         left: "0",
         backgroundColor: "#F6803D",
         height: 2,
         width: "100%",
         borderRadius: 5
      }
   }
}));

const StyledLink = styled(NavLink)(() => ({
   padding: "0 15px",
   color: "#FFFFFF"
}));

const HeaderGeneral = () => {
   const navigations = [
      {title: "Home", link: '/'}, {title: "Company", link: '/company'},
      {title: "Services", link: '/services'}, {title: "Clients & Partners", link: '/clients-&-partners'},
      {title: "Blogs", link: '/blogs'}, {title: "Contact", link: '/contact'}
   ]
   const theme = useTheme()

   const [active, setActive] = useState(false)

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () =>
             setActive(window.pageYOffset > 32)
         );
      }
   }, [])

   return (
       <StyledBox theme={theme} active={active.toString()}>
          <OrionContainer>
             <FlexBetweenAlignCenter>
                <Logo/>
                <FlexAllCenter>
                   {navigations.map((el, idx) => (
                       <StyledLink to={el.link} key={idx}>
                          <Typography variant="subtitle2">{el.title}</Typography>
                       </StyledLink>
                   ))}
                </FlexAllCenter>
                <Button variant={"text"} color={"secondary"}
                        startIcon={<Icon>language</Icon>}>
                   <Typography variant="subtitle2">RU</Typography>
                </Button>
             </FlexBetweenAlignCenter>
          </OrionContainer>
       </StyledBox>
   );
};

export default HeaderGeneral;