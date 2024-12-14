import { getAllCollection } from '../firebase/firestoreFirebase';
import { getFileFromFirebase } from '../firebase/fileFirebase';

export const anchorLinkHandler = elementId => {
  const target = document.getElementById(elementId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
    });
  }
};

export const handleScrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

export const formatName = (lastName, firstName, midName) => {
  let fio = '';

  if (lastName) fio += lastName;
  if (firstName) fio += fio ? ` ${firstName}` : firstName;
  if (midName) fio += fio ? ` ${midName}` : midName;

  if (fio) return fio;
  else return '--- --- ---';
};

export const getAllCollectionsWithImg = async (path, multiFile) => {
  return await getAllCollection(path).then(data => {
    const createdData = data.map(item => {
      return getFileFromFirebase(`${path}/${item.id}`).then(files => ({
        ...item,
        images: multiFile ? files : files[0],
      }));
    });
    return Promise.all(createdData);
  });
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
