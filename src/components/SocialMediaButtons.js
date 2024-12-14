import React from 'react';
import { ButtonGroup, Icon, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from '../recoil';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMediaButtons = ({ color }) => {
  const company = useRecoilValue(companyRecoil);

  return (
    <ButtonGroup>
      <IconButton
        color={color}
        target="_blank"
        href={company?.socialMedia.facebook.link || ''}
      >
        <Icon>facebook</Icon>
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        href={company?.socialMedia.instagram.link || ''}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        href={company?.socialMedia.linkedIn.link || ''}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color={color}
        target={'_blank'}
        href={`https://wa.me/${company?.socialMedia.whatsapp.link || ''}`}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        href={`https://t.me/${company?.socialMedia.telegram.link || ''}`}
      >
        <Icon>telegram</Icon>
      </IconButton>
    </ButtonGroup>
  );
};

export default SocialMediaButtons;
