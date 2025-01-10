import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = () => {
  const { i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} />
    </Helmet>
  );
};

export default SEO;
