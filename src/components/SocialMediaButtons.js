import React from 'react';
import {ButtonGroup, Icon, IconButton} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialMediaButtons = ({color}) => {
   return (
       <ButtonGroup>
          <IconButton href={"#"} color={color}>
             <Icon>facebook</Icon>
          </IconButton>
          <IconButton href={"#"} color={color}>
             <InstagramIcon/>
          </IconButton>
          <IconButton href={"#"} color={color}>
             <LinkedInIcon/>
          </IconButton>
          <IconButton href={"#"} color={color}>
             <WhatsAppIcon/>
          </IconButton>
          <IconButton href={"#"} color={color}>
             <Icon>telegram</Icon>
          </IconButton>
       </ButtonGroup>
   );
};

export default SocialMediaButtons;