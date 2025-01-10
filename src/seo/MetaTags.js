import { defaultAppLanguage } from 'helpers/constants';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const getOgLocale = (lang = defaultAppLanguage) => {
  const locales = {
    en: 'en_US',
    ru: 'ru_RU',
    zh: 'zh_CN',
  };
  return locales[lang];
};

const defaultOgImage = `${window.location.origin}/assets/logoWhite.png`;

const MetaTags = ({
  titleKey,
  descriptionKey,
  ogType = 'website',
  imageUrl = defaultOgImage,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <Helmet>
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />

      <meta httpEquiv="content-language" content={i18n.language} />

      <link rel="canonical" href={window.location.href} />

      {/*facebook, linkedIn, etc.*/}
      <meta property="og:title" content={t(titleKey)} />
      <meta property="og:description" content={t(descriptionKey)} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:locale" content={getOgLocale(i18n.language)} />
      <meta property="og:site_name" content="Orion-Trans" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/*twitter*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t(titleKey)} />
      <meta name="twitter:description" content={t(descriptionKey)} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  );
};

export default MetaTags;
