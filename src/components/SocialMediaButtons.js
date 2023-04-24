import React from 'react';
import {ButtonGroup, Icon, IconButton, useMediaQuery, useTheme} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {useRecoilState} from "recoil";
import {companyRecoil} from "../recoil";

const SocialMediaButtons = ({color}) => {
   const [company] = useRecoilState(companyRecoil)

   const theme = useTheme()

   const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));

   return (
       <ButtonGroup>
          <IconButton size={isLaptop ? 'small' : 'medium'} href={company?.socialMedia.facebook.link || ''}
                      target={"_blank"} color={color}>
             <Icon fontSize={isLaptop && color === 'secondary' ? 'small' : 'medium'}>facebook</Icon>
          </IconButton>
          <IconButton size={isLaptop ? 'small' : 'medium'} href={company?.socialMedia.instagram.link || ''}
                      target={"_blank"} color={color}>
             <InstagramIcon fontSize={isLaptop && color === 'secondary' ? 'small' : 'medium'}/>
          </IconButton>
          <IconButton size={isLaptop ? 'small' : 'medium'}
                      href={`https://wa.me/${company?.socialMedia.whatsapp.link || ''}`} target={"_blank"}
                      color={color}>
             <WhatsAppIcon fontSize={isLaptop && color === 'secondary' ? 'small' : 'medium'}/>
          </IconButton>
          <IconButton size={isLaptop ? 'small' : 'medium'}
                      href={`https://t.me/${company?.socialMedia.telegram.link || ''}`} target={"_blank"} color={color}>
             <Icon fontSize={isLaptop && color === 'secondary' ? 'small' : 'medium'}>telegram</Icon>
          </IconButton>
       </ButtonGroup>
   );
};

export default SocialMediaButtons;