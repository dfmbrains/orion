import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ButtonGroup, Icon, IconButton } from '@mui/material';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from 'store';

const SocialMediaButtons = ({ color }) => {
  const company = useRecoilValue(companyRecoil);

  return (
    <ButtonGroup>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page"
        href={company?.socialMedia.facebook.link || '#'}
      >
        <Icon>facebook</Icon>
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Instagram page"
        href={company?.socialMedia.instagram.link || '#'}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our LinkedIn page"
        href={company?.socialMedia.linkedIn.link || '#'}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Whatsapp page"
        href={company?.socialMedia.whatsapp.link || '#'}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Telegram page"
        href={company?.socialMedia.telegram.link || '#'}
      >
        <Icon>telegram</Icon>
      </IconButton>
    </ButtonGroup>
  );
};

export default SocialMediaButtons;
