import { handleScrollToTop, scrollIntoView } from 'helpers/utils';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { monthsRecoil } from 'store';
import LanguageWrapper from 'wrappers/LanguageWrapper';

const SettingsWrapper = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const setMonths = useSetRecoilState(monthsRecoil);

  useEffect(() => {
    if (location.hash) {
      scrollIntoView(location.hash);
    } else {
      handleScrollToTop();
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setMonths(t('months', { returnObjects: true }) || []);
  }, [i18n, setMonths, t]);

  return (
    <LanguageWrapper>
      <Outlet />
    </LanguageWrapper>
  );
};

export default SettingsWrapper;
