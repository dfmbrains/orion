import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { monthsRecoil, selectedLanguageRecoil } from 'store';

const PrefetchProvider = () => {
  const language = useRecoilValue(selectedLanguageRecoil);
  const setMonths = useSetRecoilState(monthsRecoil);

  const { t } = useTranslation();

  useEffect(() => {
    setMonths(t('months', { returnObjects: true }) || []);
  }, [language, setMonths, t]);

  return <Outlet />;
};

export default PrefetchProvider;
