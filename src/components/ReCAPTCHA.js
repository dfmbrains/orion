import { Box } from '@mui/material';
import { CAPTCHA_SITE_KEY } from 'helpers/constants';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCAPTCHAComponent = ({ setResult }) => {
  const handleCaptchaChange = value => {
    setResult(value);
  };

  return (
    <Box mt={2}>
      <ReCAPTCHA sitekey={CAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
    </Box>
  );
};

export default ReCAPTCHAComponent;
