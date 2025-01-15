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
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from 'store';

const SocialMediaButtons = ({ color }) => {
  const { t } = useTranslation();

  const company = useRecoilValue(companyRecoil);

  const SkypeIcons = { info: SkypeDark, secondary: SkypeLight };
  const WechatIcons = { info: WechatDark, secondary: WechatLight };

  return (
    <ButtonGroup>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openFacebook')}
        aria-label={t('ariaLabels.openFacebook')}
        href={company?.socialMedia.facebook.link || '#'}
      >
        <Icon>facebook</Icon>
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openInstagram')}
        aria-label={t('ariaLabels.openInstagram')}
        href={company?.socialMedia.instagram.link || '#'}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openLinkedIn')}
        aria-label={t('ariaLabels.openLinkedIn')}
        href={company?.socialMedia.linkedIn.link || '#'}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openWhatsapp')}
        aria-label={t('ariaLabels.openWhatsapp')}
        href={company?.socialMedia.whatsapp.link || '#'}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openTelegram')}
        aria-label={t('ariaLabels.openTelegram')}
        href={company?.socialMedia.telegram.link || '#'}
      >
        <Icon>telegram</Icon>
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openSkype')}
        aria-label={t('ariaLabels.openSkype')}
        href={company?.socialMedia.skype.link || '#'}
      >
        <LazyImage src={SkypeIcons[color]} alt="skype" />
      </IconButton>
      <IconButton
        color={color}
        target="_blank"
        rel="noopener noreferrer"
        title={t('tagTitles.openWechat')}
        aria-label={t('ariaLabels.openWechat')}
        href={company?.socialMedia.wechat.link || '#'}
      >
        <LazyImage src={WechatIcons[color]} alt="wechat" />
      </IconButton>
    </ButtonGroup>
  );
};

export default SocialMediaButtons;
