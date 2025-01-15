import { MenuItem, styled, Typography } from '@mui/material';
import LanguageLink from 'components/LanguageLink';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StyledBox = styled('li')(({ theme }) => ({
  padding: '12px 15px',
  position: 'relative',

  [theme.breakpoints.down('lg')]: { padding: '0 10px' },

  '& .navLink': {
    color: '#FFFFFF',
    transition: '0.3s',

    h6: {
      fontWeight: '500',
    },
  },

  '&:hover': {
    '& .navLink': {
      color: theme.palette.primary.main,
      transition: '0.3s',
    },
  },

  '.active': {
    position: 'relative',

    '&:after': {
      content: "''",
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translate(-50%)',
      backgroundColor: '#F6803D',
      height: 2,
      width: 'calc(100% + 20px)',
      borderRadius: 5,
    },
  },
}));

const StyledMenu = styled('nav')(() => ({
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))',
  color: '#FFFFFF',
  borderRadius: '8px',
  top: 'calc(100%)',
  left: 0,
  backdropFilter: 'blur(20px)',
  minWidth: '300px',
  position: 'absolute',
  transition: '0.3s',
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  padding: '8px 12px',

  '&:hover': {
    backgroundColor: '#00000030',
  },
}));

const HeaderLink = ({ headerLink, controlsId }) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    if (headerLink?.subLinks) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    if (headerLink?.subLinks) {
      setAnchorEl(null);
    }
  };

  const isOpen = Boolean(anchorEl);

  return (
    <StyledBox
      aria-controls={controlsId}
      onMouseEnter={handleMenuOpen}
      onMouseLeave={handleMenuClose}
      aria-haspopup={headerLink?.subLinks ? 'true' : undefined}
      aria-expanded={headerLink?.subLinks && isOpen ? 'true' : 'false'}
    >
      <LanguageLink
        type="navLink"
        className="navLink"
        to={headerLink.link}
        aria-label={t(headerLink.ariaLabel)}
      >
        <Typography variant="subtitle2">{t(headerLink.text)}</Typography>
      </LanguageLink>

      {headerLink?.subLinks && (
        <StyledMenu
          id={controlsId}
          aria-label="Submenu"
          aria-hidden={isOpen ? 'false' : 'true'}
          style={{
            visibility: isOpen ? 'visible' : 'hidden',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          <ul role="menu" onClose={handleMenuClose}>
            {headerLink.subLinks.map((subLink, index) => (
              <StyledMenuItem
                key={index}
                component="li"
                onClick={handleMenuClose}
              >
                <LanguageLink
                  to={subLink.link}
                  title={subLink.title}
                  style={{ color: '#FFF' }}
                  aria-label={t(subLink.ariaLabel)}
                >
                  <Typography variant="body1">{t(subLink.text)}</Typography>
                </LanguageLink>
              </StyledMenuItem>
            ))}
          </ul>
        </StyledMenu>
      )}
    </StyledBox>
  );
};

export default HeaderLink;
