import { defaultAppLanguage, languages } from 'helpers/constants';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang) {
      if (languages.some(item => item.value === lang)) {
        i18n.changeLanguage(lang);
      } else {
        const pathname = location.pathname.split('/').slice(1).join('/');

        if (pathname) {
          navigate(`/${defaultAppLanguage}/${pathname}`, { replace: true });
        } else {
          navigate(`/${defaultAppLanguage}`, { replace: true });
        }
      }
    }
  }, [lang, i18n, navigate, location.pathname]);

  return children;
};

export default LanguageWrapper;
