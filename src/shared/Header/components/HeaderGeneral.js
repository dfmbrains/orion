import React from 'react';
import {Box, Button, Container, Icon, styled, Typography} from "@mui/material";
import {FlexBetweenAlignCenter, FlexAllCenter} from "../../../components/FlexBox";
import {Logo} from "../../../components/Logo";
import {NavLink} from "react-router-dom";

const StyledBox = styled(Box)(() => ({
   backgroundColor: "transparent",
   padding: '13px 0 9px',
   borderBottom: "1px solid #FFFFFF",
   position: "fixed",
   width: "100%",
   top: 32,
   left: 0,

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
         height: 3,
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

   return (
       <StyledBox>
          <Container>
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
          </Container>
       </StyledBox>
   );
};

export default HeaderGeneral;