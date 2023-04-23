import React from 'react';
import {Box, Button, Icon, styled, Typography, useTheme} from "@mui/material";
import {FlexBetweenAlignCenter, FlexAllCenter} from "../../../components/FlexBox";
import {Logo} from "../../../components/Logo";
import {NavLink} from "react-router-dom";
import OrionContainer from "../../../components/OrionContainer";
import i18next from "i18next";
import {useTranslation} from "react-i18next";

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
   const theme = useTheme()
   const {t} = useTranslation()

   const navigations = [
      {title: t("menu.home"), link: '/'}, {title: t("menu.company"), link: '/about'},
      {title: t("menu.services"), link: '/services'},
      {title: `${t("menu.clients")} & ${t("menu.partners")}`, link: '/clients-&-partners'},
      {title: t("menu.blogs"), link: '/blog'}, {title: t("menu.contact"), link: '/contact?form=0'}
   ]

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
                <Button onClick={() => i18next.changeLanguage(t('currentLanguage') === 'ru' ? 'en' : 'ru')}
                        variant={"text"} color={"secondary"} startIcon={<Icon>language</Icon>}>
                   <Typography variant="subtitle2">{t('currentLanguage').toUpperCase()}</Typography>
                </Button>
             </FlexBetweenAlignCenter>
          </OrionContainer>
       </StyledBox>
   );
};

export default HeaderGeneral;