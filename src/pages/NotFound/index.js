import { Button, styled, Typography } from '@mui/material';
import BgImg from 'assets/images/backgrounds/meet_team.webp';
import {
  StyledPromoBackgroundBox,
  StylePromoColumn,
} from 'components/StyledComponents';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFoundRoot = styled('section')(() => ({
  position: 'relative',
  height: '100vh',
  backgroundColor: '#252525',

  '& h5': {
    textAlign: 'center',
    color: '#FFFFFF',
    width: '50%',
  },
}));

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      <StyledPromoBackgroundBox bgimage={BgImg}>
        <StylePromoColumn>
          <Typography mt={3} variant="h1">
            {t('notFound.title')}
          </Typography>
          <Typography my={3} variant="h5">
            {t('notFound.description')}
          </Typography>

          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{ textTransform: 'capitalize' }}
          >
            {t('buttons.goBack')}
          </Button>
        </StylePromoColumn>
      </StyledPromoBackgroundBox>
    </NotFoundRoot>
  );
};

export default NotFound;
