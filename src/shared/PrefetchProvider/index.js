import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { monthsRecoil, selectedLanguageRecoil } from '../../recoil';
import { useTranslation } from 'react-i18next';

const PrefetchProvider = () => {
  const language = useRecoilValue(selectedLanguageRecoil);
  const setMonths = useSetRecoilState(monthsRecoil);

  const { t } = useTranslation();

  useEffect(() => {
    setMonths(t('months', { returnObjects: true }) || []);
  }, [language]);

  return <Outlet />;
};

export default PrefetchProvider;
