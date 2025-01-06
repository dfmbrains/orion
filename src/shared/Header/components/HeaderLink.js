import { MenuItem, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

const StyledBox = styled('li')(({ theme }) => ({
  padding: '12px 15px',
  position: 'relative',

  [theme.breakpoints.down('lg')]: { padding: '0 10px' },

  '&:hover': {
    '& .link': {
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

const StyledLink = styled(NavLink)(() => ({
  color: '#FFFFFF',
  transition: '0.3s',

  h6: {
    fontWeight: '500',
  },
}));

const StyledMenu = styled('ol')(({ isActive }) => ({
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))',
  color: '#FFFFFF',
  borderRadius: '8px',
  top: 'calc(100%)',
  left: 0,
  padding: 0,
  backdropFilter: 'blur(20px)',
  minWidth: '300px',
  position: 'absolute',
  visibility: isActive ? 'visible' : 'hidden',
  opacity: isActive ? 1 : 0,
  transition: '0.3s',
  pointerEvents: isActive ? 'auto' : 'none',
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  padding: '8px 12px',

  '&:hover': {
    backgroundColor: '#00000030',
  },
}));

const HeaderLink = ({ headerLink }) => {
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

  return (
    <StyledBox onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
      <StyledLink
        className="link"
        to={headerLink.link}
        title={headerLink.title}
        aria-label={t(headerLink.ariaLabel)}
      >
        <Typography variant="subtitle2">{t(headerLink.text)}</Typography>
      </StyledLink>

      {headerLink?.subLinks && (
        <nav>
          <StyledMenu isActive={anchorEl} onClose={handleMenuClose}>
            {headerLink.subLinks.map((subLink, index) => (
              <StyledMenuItem
                key={index}
                component="li"
                onClick={handleMenuClose}
              >
                <Link
                  to={subLink.link}
                  title={subLink.title}
                  style={{ color: '#FFF' }}
                  aria-label={t(subLink.ariaLabel)}
                >
                  <Typography variant="body1">{t(subLink.text)}</Typography>
                </Link>
              </StyledMenuItem>
            ))}
          </StyledMenu>
        </nav>
      )}
    </StyledBox>
  );
};

export default HeaderLink;
