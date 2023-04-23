import React from 'react';
import OrionContainer from "../../components/OrionContainer";
import {Grid, styled, Typography} from "@mui/material";
import {FlexBetweenAlignCenter} from "../../components/FlexBox";
import {Logo} from "../../components/Logo";
import {useLocation, useNavigate} from "react-router-dom";
import SocialMediaButtons from "../../components/SocialMediaButtons";

const StyledFooter = styled('footer')(() => ({
   padding: "60px 0 15px",
   backgroundColor: "#1B1B1B",

   "& .footerLink": {
      transition: "0.2s",
      cursor: "pointer",

      "&:hover": {
         color: "#FFFFFF",
      }
   }
}));

const StyledBottomBox = styled('div')(() => ({
   padding: "15px 20px 0 0",
   borderTop: "1px solid #2F2F2F",
   margin: "32px 0 0"
}));

const Footer = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const footerMenu = [
      {
         title: 'Our Divisions',
         elements: [
            {title: 'About US', link: '/', hash: 'header'},
            {title: 'Company', link: '/about', hash: 'header'},
            {title: 'Services', link: '/services', hash: 'header'},
            {title: 'Clients & Partners', link: '/clients-&-partners', hash: 'header'},
            {title: 'Blogs', link: '/blog', hash: 'header'},
            {title: 'Contact Us', link: '/contact', hash: 'header'},
         ]
      },
      {
         title: 'Contact Us',
         elements: [
            {title: 'Get In Touch', link: '/contact?form=0', hash: 'getInTouch'},
            {title: 'Leave a review', link: '/contact?form=1', hash: 'getInTouch'}
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
                             <Typography variant={"subtitle2"} color={"#FFFFFF"} mb={2}>{el.title}</Typography>

                             {el.elements.map((item, index) => (
                                 <Typography key={index} className="footerLink" variant={"body1"} color={"#919191"}
                                             onClick={() => anchorLink(item.hash, item.link, location.pathname === el.link ? "smooth" : "auto")}
                                             mb={1}>{item.title}</Typography>
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
                   <Typography variant={"body2"} color={"#FFFFFF"}>Copyright ©{new Date().getFullYear()} All rights
                      reserved oriontrans.kg</Typography>
                   <SocialMediaButtons color={"secondary"}/>
                </FlexBetweenAlignCenter>
             </OrionContainer>
          </StyledBottomBox>
       </StyledFooter>
   );
};

export default Footer;