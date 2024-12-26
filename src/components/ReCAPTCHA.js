import { Box } from '@mui/material';
import { CAPTCHA_SECRET_KEY, CAPTCHA_SITE_KEY } from 'helpers/constants';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCAPTCHAComponent = ({ setResult }) => {
  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptchaChange = value => {
    setCaptchaToken(value);
  };

  const verifyCaptcha = async token => {
    try {
      const response = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          body: new URLSearchParams({
            secret: CAPTCHA_SECRET_KEY,
            response: token,
          }),
        },
      );

      const data = await response.json();
      if (data.success) {
        console.log('Captcha verification successful');
        setResult(true);
      } else {
        console.log('Captcha verification failed');
      }
    } catch (error) {
      console.error('Error verifying captcha', error);
    }
  };

  useEffect(() => {
    if (captchaToken) {
      verifyCaptcha(captchaToken);
    }
  }, [captchaToken]);

  return (
    <Box mt={2}>
      <ReCAPTCHA sitekey={CAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
    </Box>
  );
};

export default ReCAPTCHAComponent;
