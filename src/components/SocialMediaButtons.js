import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ButtonGroup, Icon, IconButton } from '@mui/material';
import SkypeDark from 'assets/icons/skype-dark.svg';
import SkypeLight from 'assets/icons/skype.svg';
import WechatDark from 'assets/icons/wechat-dark.svg';
import WechatLight from 'assets/icons/wechat.svg';
import LazyImage from 'components/LazyImage';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from 'store';

const SocialMediaButtons = ({ color }) => {
  const company = useRecoilValue(companyRecoil);

  const SkypeIcons = { info: SkypeDark, secondary: SkypeLight };
  const WechatIcons = { info: WechatDark, secondary: WechatLight };

  return (
    <ButtonGroup>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our Facebook page"
        aria-label="Visit our Facebook page"
        href={company?.socialMedia.facebook.link || '#'}
      >
        <Icon>facebook</Icon>
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our Instagram page"
        aria-label="Visit our Instagram page"
        href={company?.socialMedia.instagram.link || '#'}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our LinkedIn page"
        aria-label="Visit our LinkedIn page"
        href={company?.socialMedia.linkedIn.link || '#'}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our Whatsapp"
        aria-label="Visit our Whatsapp"
        href={company?.socialMedia.whatsapp.link || '#'}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our Telegram"
        aria-label="Visit our Telegram"
        href={company?.socialMedia.telegram.link || '#'}
      >
        <Icon>telegram</Icon>
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our Skype"
        aria-label="Visit our Skype"
        href={company?.socialMedia.skype.link || '#'}
      >
        <LazyImage src={SkypeIcons[color]} alt="skype" />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit our Wechat"
        aria-label="Visit our Wechat"
        href={company?.socialMedia.wechat.link || '#'}
      >
        <LazyImage src={WechatIcons[color]} alt="wechat" />
      </IconButton>
    </ButtonGroup>
  );
};

export default SocialMediaButtons;
