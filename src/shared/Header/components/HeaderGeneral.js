import React from 'react';
import {Box, Button, Icon, styled, Typography, useTheme} from "@mui/material";
import {FlexBetweenAlignCenter, FlexAllCenter} from "../../../components/FlexBox";
import {Logo} from "../../../components/Logo";
import {NavLink} from "react-router-dom";
import OrionContainer from "../../../components/OrionContainer";

const StyledBox = styled(Box)(({color}) => ({
   backgroundColor: color === 'dark' ? '#252525' : 'transparent',
   padding: '13px 0 10px',
   borderBottom: "1px solid #FFFFFF",
   position: "absolute",
   width: "100%",
   top: 32,
   left: 0,
   zIndex: 10,
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

const StyledLink = styled(NavLink)(({theme}) => ({
   padding: "0 15px",
   color: "#FFFFFF",
   transition: "0.3s",

   "&:hover": {
      color: theme.palette.primary.main,
      transition: "0.3s"
   }
}));

const HeaderGeneral = ({color}) => {
   const navigations = [
      {title: "Home", link: '/'}, {title: "Company", link: '/about'},
      {title: "Services", link: '/services'}, {title: "Clients & Partners", link: '/clients-&-partners'},
      {title: "Blogs", link: '/blog'}, {title: "Contact", link: '/contact'}
   ]
   const theme = useTheme()

   return (
       <StyledBox color={color}>
          <OrionContainer>
             <FlexBetweenAlignCenter>
                <Logo/>
                <FlexAllCenter>
                   {navigations.map((el, idx) => (
                       <StyledLink theme={theme} to={el.link} key={idx}>
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