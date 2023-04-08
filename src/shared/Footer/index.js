import React from 'react';
import OrionContainer from "../../components/OrionContainer";
import {ButtonGroup, Grid, Icon, IconButton, styled, Typography} from "@mui/material";
import {FlexBetweenAlignCenter, FlexGap10} from "../../components/FlexBox";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Logo} from "../../components/Logo";
import {Link} from "react-router-dom";

const StyledFooter = styled('footer')(() => ({
   padding: "60px 0 40px",
   backgroundColor: "#1B1B1B",

   "& .footerLink": {
      transition: "0.2s",

      "&:hover": {
         color: "#FFFFFF",
      }
   }
}));

const StyledBottomBox = styled('div')(() => ({
   padding: "32px 20px 0 0",
   borderTop: "1px solid #2F2F2F",
   margin: "32px 0 0"
}));

const StyledMenuStatus = styled(Typography)(() => ({
   backgroundColor: "#FFF017",
   padding: "3px 10px",
   borderRadius: "5px",
   fontWeight: "500",
   userSelect: "none"
}));

const Footer = () => {
   const footerMenu = [
      {
         title: 'Our Divisions',
         elements: ['About US', 'Company', 'Services', 'Clients & Partners', 'Blogs', {
            title: 'Career',
            status: 'We Are Hiring'
         }]
      },
      {
         title: 'Company Service',
         elements: ['Our Services', 'Track & Trace', 'Air Freight', 'Air Freight', 'Rail Freight', 'Container Freight Transport', 'Provision Of Rolling Stock']
      },
      {
         title: 'Contact Us',
         elements: ['Find us', 'Get In Touch']
      },
      {
         title: 'Latest News',
         elements: ['Expert Tips', 'A Sustainable Future', 'Fresh Start', 'Clean Spaces', 'Tips & Strategies']
      }
   ]

   return (
       <StyledFooter>
          <OrionContainer>
             <Grid container spacing={12}>
                <Grid item xs={3}>
                   <Logo/>
                </Grid>
                <Grid item xs={9}>
                   <Grid container spacing={2}>
                      {footerMenu.map((el, idx) => (
                          <Grid item xs={3} key={idx}>
                             <Typography variant={"subtitle2"} color={"#FFFFFF"} mb={2}>{el.title}</Typography>

                             {el.elements.map((item, index) => (
                                 item?.title
                                     ? <FlexGap10 key={index} mb={1}>
                                        <Link to={'/'}>
                                           <Typography className="footerLink" variant={"body1"}
                                                       color={"#919191"}>{item.title}</Typography>
                                        </Link>
                                        <StyledMenuStatus variant={"body2"}>{item.status}</StyledMenuStatus>
                                     </FlexGap10>
                                     : <Link to={'/'} key={index}>
                                        <Typography className="footerLink" variant={"body1"} color={"#919191"}
                                                    mb={1}>{item}</Typography>
                                     </Link>
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
                   <Typography variant={"body2"} color={"#FFFFFF"}>Copyright ©2020 All rights reserved
                      oriontrans.kg</Typography>
                   <ButtonGroup>
                      <IconButton href={"#"} color={"secondary"}>
                         <Icon>facebook</Icon>
                      </IconButton>
                      <IconButton href={"#"} color={"secondary"}>
                         <InstagramIcon/>
                      </IconButton>
                      <IconButton href={"#"} color={"secondary"}>
                         <LinkedInIcon/>
                      </IconButton>
                      <IconButton href={"#"} color={"secondary"}>
                         <WhatsAppIcon/>
                      </IconButton>
                      <IconButton href={"#"} color={"secondary"}>
                         <Icon>telegram</Icon>
                      </IconButton>
                   </ButtonGroup>
                </FlexBetweenAlignCenter>
             </OrionContainer>
          </StyledBottomBox>
       </StyledFooter>
   );
};

export default Footer;