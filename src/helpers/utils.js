import { ENVIROMENT } from 'helpers/constants';

export const scrollIntoView = (elementId, behavior = 'instant') => {
  const element = document.querySelector(elementId);
  if (element) {
    element.scrollIntoView({ behavior: behavior });
  }
};

export const handleScrollToTop = (behavior = 'instant') =>
  window.scrollTo({ top: 0, left: 0, behavior });

export const formatName = (locale, lastName, firstName, midName) => {
  let fio = '';

  if (lastName) fio += lastName;
  if (firstName) {
    if (locale === 'ru') {
      fio += fio ? ` ${firstName}` : firstName;
    } else {
      fio = fio ? `${firstName} ` + fio : firstName;
    }
  }
  if (midName && locale === 'ru') fio += fio ? ` ${midName}` : midName;

  if (fio) return fio;
  else return '--- --- ---';
};

export const createDesiredArrays = arr => {
  const pairedValues = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairedValues.push(arr.slice(i, i + 2));
  }

  return pairedValues;
};

export const filterArrByLanguage = (arr = [], language = '') => {
  return arr.filter(
    item => item?.language?.toLowerCase() === language.toLowerCase(),
  );
};

export const getMapLinkByLocaleAndCoordinates = (language, coordinates) => {
  if (language === 'ru') {
    const joinedCoordinates = coordinates.join(',');
    return `https://2gis.kg/bishkek/search/${joinedCoordinates}/geo/${joinedCoordinates}`;
  } else {
    return `https://www.google.com/maps?q=${coordinates[1]},${coordinates[0]}`;
  }
};

export const isEnviromentProd = () => ENVIROMENT === 'prod';
