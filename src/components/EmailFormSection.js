import emailjs from '@emailjs/browser';
import { LoadingButton } from '@mui/lab';
import { styled, TextField, Typography } from '@mui/material';
import ReCAPTCHAComponent from 'components/ReCAPTCHA';
import {
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID_FOR_EMAIL,
} from 'helpers/constants';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexAllCenter, FlexGap10 } from './FlexBox';

const StyledSection = styled('section')(({ theme, background }) => ({
  padding: '60px 0',
  backgroundColor: background || '#F7F7F7',

  [theme.breakpoints.down('lg')]: { padding: '45px 0' },
  [theme.breakpoints.down('sm')]: { padding: '30px 0' },
}));

const StyledBox = styled('div')(() => ({
  textAlign: 'center',
}));

const EmailFormSection = ({ background }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [CAPTCHAResult, setCAPTCHAResult] = useState(false);

  const handleSubmit = e => {
    if (CAPTCHAResult) {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          EMAIL_JS_SERVICE_ID,
          EMAIL_JS_TEMPLATE_ID_FOR_EMAIL,
          {
            email: email,
          },
          EMAIL_JS_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            enqueueSnackbar('Ваша почта отправлена', { variant: 'success' });

            setEmail('');
          },
            error => {
              setLoading(false);
              console.error(error);

              enqueueSnackbar('Попробуйте позже', { variant: 'error' });
            };,
        )
        .catch(error => {
          setLoading(false);
          console.error(error);

          enqueueSnackbar('Попробуйте позже', { variant: 'error' });
        });
    }
  };

  return (
    <StyledSection background={background} className="emailFormSection">
      <FlexAllCenter>
        <StyledBox>
          <Typography mb={1} variant="h4" color="#1B1B1B">
            {t('emailFormSection.title')}
          </Typography>
          <Typography mb={{ lg: 6, md: 4, xs: 2 }} variant="h5" color="#8A8A8A">
            {t('emailFormSection.subtitle')}
          </Typography>

          <form onSubmit={handleSubmit}>
            <FlexGap10 sx={{ justifyContent: 'center' }}>
              <TextField
                required
                fullWidth
                type="text"
                size="small"
                name="email"
                value={email}
                variant="outlined"
                label={t('emailFormSection.placeholder')}
                onChange={e => setEmail(e.target.value)}
              />

              <LoadingButton
                type="submit"
                color="primary"
                loading={loading}
                variant="contained"
                disabled={!CAPTCHAResult}
              >
                {t('buttons.send')}
              </LoadingButton>
            </FlexGap10>

            <ReCAPTCHAComponent setResult={setCAPTCHAResult} />
          </form>
        </StyledBox>
      </FlexAllCenter>
    </StyledSection>
  );
};

export default EmailFormSection;
