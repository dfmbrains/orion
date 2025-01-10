import { Icon, Typography, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { languages } from 'helpers/constants';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedLanguageRecoil } from 'store';

const ChangeLangButton = ({ color }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const setSelectedLang = useSetRecoilState(selectedLanguageRecoil);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleCloseOnScroll = () => {
    setAnchorEl(null);
    window.removeEventListener('scroll', handleCloseOnScroll);
  };

  const handleChangeLanguage = async language => {
    await i18next.changeLanguage(language);

    setSelectedLang(language);

    setAnchorEl(null);
    window.removeEventListener('scroll', handleCloseOnScroll);

    const currentPath = location.pathname;
    const segments = currentPath.split('/');
    segments[1] = language;
    const newPath = segments.join('/');

    navigate(newPath, { replace: true });
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    window.addEventListener('scroll', handleCloseOnScroll);
  };

  return (
    <div>
      <Button
        variant="text"
        id="basic-button"
        aria-haspopup="true"
        onClick={handleClick}
        color={color || 'secondary'}
        startIcon={<Icon>language</Icon>}
        size={isLaptop ? 'small' : 'medium'}
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'basic-menu' : undefined}
      >
        <Typography variant="subtitle2">
          {t('currentLanguage').toUpperCase()}
        </Typography>
      </Button>
      <Menu
        open={open}
        id="basic-menu"
        disableScrollLock
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        {languages.map((language, idx) => (
          <MenuItem
            key={idx}
            sx={{ color: 'white' }}
            onClick={() => handleChangeLanguage(language.value)}
          >
            <Typography variant="body1" fontWeight="500">
              {language.title}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ChangeLangButton;
