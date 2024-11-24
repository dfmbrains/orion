import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { firebaseApp } from './index';

const storage = getStorage(firebaseApp);

export const getFileFromFirebase = async path => {
  const listRef = ref(storage, path);
  return listAll(listRef)
    .then(res => {
      const promises = res.items.map(itemRef => {
        return getDownloadURL(itemRef).then(url => {
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = () => {
              const blob = xhr.response;
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onload = () => {
                resolve({ file: reader.result, name: itemRef.name });
              };
            };
            xhr.onerror = error => {
              reject(error);
            };
            xhr.open('GET', url);
            xhr.send();
          });
        });
      });
      return Promise.all(promises);
    })
    .catch(error => console.log(error));
};
