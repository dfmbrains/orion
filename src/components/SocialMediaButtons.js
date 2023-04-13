import React from 'react';
import {ButtonGroup, Icon, IconButton} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialMediaButtons = ({color}) => {
   return (
       <ButtonGroup>
          <IconButton href={"#"} target={"_blank"} color={color}>
             <Icon>facebook</Icon>
          </IconButton>
          <IconButton href={"https://instagram.com/orion_trans?igshid=YmMyMTA2M2Y="} target={"_blank"} color={color}>
             <InstagramIcon/>
          </IconButton>
          {/*<IconButton href={"#"} target={"_blank"} color={color}>*/}
          {/*   <LinkedInIcon/>*/}
          {/*</IconButton>*/}
          <IconButton href={"https://wa.me/+996554333293"} target={"_blank"} color={color}>
             <WhatsAppIcon/>
          </IconButton>
          <IconButton href={"https://t.me/+996554333293"} target={"_blank"} color={color}>
             <Icon>telegram</Icon>
          </IconButton>
       </ButtonGroup>
   );
};

export default SocialMediaButtons;