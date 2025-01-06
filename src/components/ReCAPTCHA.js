import { Box, Typography } from '@mui/material';
import { FlexAllCenter } from 'components/FlexBox';
import { CAPTCHA_SITE_KEY } from 'helpers/constants';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';

const ReCAPTCHAComponent = ({ setResult }) => {
  const { t } = useTranslation();

  const [captchaError, setCaptchaError] = useState(true);

  const handleCaptchaChange = value => {
    if (value) {
      setResult(value);
      setCaptchaError(false);
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <FlexAllCenter mt={2}>
      <Box sx={{ display: 'inline' }}>
        <ReCAPTCHA sitekey={CAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />

        {captchaError && (
          <Typography color="error" variant="body2" textAlign="center" mt={1}>
            {t('validation.captchaError')}
          </Typography>
        )}
      </Box>
    </FlexAllCenter>
  );
};

export default ReCAPTCHAComponent;
