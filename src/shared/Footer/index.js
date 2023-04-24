import React from 'react';
import OrionContainer from "../../components/OrionContainer";
import {Grid, styled, Typography} from "@mui/material";
import {FlexBetweenAlignCenter} from "../../components/FlexBox";
import {Logo} from "../../components/Logo";
import {useLocation, useNavigate} from "react-router-dom";
import SocialMediaButtons from "../../components/SocialMediaButtons";
import {useTranslation} from "react-i18next";

const StyledFooter = styled('footer')(({theme}) => ({
   padding: "60px 0 15px",
   backgroundColor: "#1B1B1B",
   [theme.breakpoints.down("lg")]: {padding: "40px 0 10px"},

   "& .footerLink": {
      transition: "0.2s",
      cursor: "pointer",

      "&:hover": {
         color: "#FFFFFF",
      }
   }
}));

const StyledBottomBox = styled('div')(({theme}) => ({
   padding: "15px 20px 0 0",
   borderTop: "1px solid #2F2F2F",
   margin: "32px 0 0",
   [theme.breakpoints.down("lg")]: {margin: "24px 0 0", padding: "10px 15px 0 0"},
}));

const Footer = () => {
   const {t} = useTranslation()

   const navigate = useNavigate()
   const location = useLocation()

   const footerMenu = [
      {
         title: t('footer.menu.column1'),
         elements: [
            {title: t('menu.home'), link: '/', hash: 'header'},
            {title: t('menu.company'), link: '/about', hash: 'header'},
            {title: t('menu.services'), link: '/services', hash: 'header'},
            {title: `${t('menu.clients')} & ${t('menu.partners')}`, link: '/clients-&-partners', hash: 'header'},
            {title: t('menu.blogs'), link: '/blog', hash: 'header'},
            {title: t('menu.contact'), link: '/contact', hash: 'header'},
         ]
      },
      {
         title: t('footer.menu.column2'),
         elements: [
            {title: t('menu.getInTouch'), link: '/contact?form=0', hash: 'getInTouch'},
            {title: t('menu.leaveReview'), link: '/contact?form=1', hash: 'getInTouch'}
         ]
      }
   ]

   const anchorLink = async (hash, page, behavior) => {
      await navigate(page);

      const target = document.getElementById(hash);
      if (target) {
         const {top: nodeTop, height: nodeHeight} = target.getBoundingClientRect();

         const offsetTop = nodeTop > 0
             ? nodeTop
             : window.pageYOffset + nodeTop;

         window.scrollTo({
            top: offsetTop - (nodeHeight / 5),
            behavior
         });
      }
   };

   return (
       <StyledFooter>
          <OrionContainer>
             <Grid container spacing={12}>
                <Grid item xs={3}>
                   <Logo/>
                </Grid>
                <Grid item xs={9}>
                   <Grid container justifyContent={"flex-end"} spacing={2}>
                      {footerMenu.map((el, idx) => (
                          <Grid item xs={3} key={idx}>
                             <Typography variant={"subtitle2"} color={"#FFFFFF"}
                                         mb={{lg: 2, xs: 1}}>{el.title}</Typography>

                             {el.elements.map((item, index) => (
                                 <Typography key={index} className="footerLink" variant={"body1"} color={"#919191"}
                                             onClick={() => anchorLink(item.hash, item.link, location.pathname === el.link ? "smooth" : "auto")}
                                             mb={{lg: 2, xs: 0.6}}>{item.title}</Typography>
                             ))}
                          </Grid>
                      ))}
                   </Grid>
                </Grid>
             </Grid>
          </OrionContainer>

          <StyledBottomBox>
             <OrionContainer>
                <FlexBetweenAlignCenter>
                   <Typography variant={"body2"} color={"#FFFFFF"}>
                      {t('footer.privacy.left')} ©{new Date().getFullYear()} {t('footer.privacy.right')} oriontrans.kg
                   </Typography>
                   <SocialMediaButtons color={"secondary"}/>
                </FlexBetweenAlignCenter>
             </OrionContainer>
          </StyledBottomBox>
       </StyledFooter>
   );
};

export default Footer;