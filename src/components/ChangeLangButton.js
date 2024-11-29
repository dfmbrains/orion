import React from 'react';
import i18next from 'i18next';
import {
  Button,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChangeLangButton = ({ color }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Button
      onClick={() =>
        i18next.changeLanguage(t('currentLanguage') === 'ru' ? 'en' : 'ru')
      }
      variant="text"
      color={color || 'secondary'}
      size={isLaptop ? 'small' : 'medium'}
      startIcon={<Icon>language</Icon>}
    >
      <Typography variant="subtitle2">
        {t('currentLanguage').toUpperCase()}
      </Typography>
    </Button>
  );
};

export default ChangeLangButton;
