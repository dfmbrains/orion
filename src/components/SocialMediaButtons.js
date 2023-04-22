import React from 'react';
import {ButtonGroup, Icon, IconButton} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {useRecoilState} from "recoil";
import {companyRecoil} from "../recoil";

const SocialMediaButtons = ({color}) => {
   const [company] = useRecoilState(companyRecoil)

   return (
       <ButtonGroup>
          <IconButton href={company?.socialMedia.facebook.link || ''} target={"_blank"} color={color}>
             <Icon>facebook</Icon>
          </IconButton>
          <IconButton href={company?.socialMedia.instagram.link || ''} target={"_blank"} color={color}>
             <InstagramIcon/>
          </IconButton>
          <IconButton href={`https://wa.me/${company?.socialMedia.whatsapp.link || ''}`} target={"_blank"}
                      color={color}>
             <WhatsAppIcon/>
          </IconButton>
          <IconButton href={`https://t.me/${company?.socialMedia.telegram.link || ''}`} target={"_blank"} color={color}>
             <Icon>telegram</Icon>
          </IconButton>
       </ButtonGroup>
   );
};

export default SocialMediaButtons;