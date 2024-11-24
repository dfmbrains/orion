import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  setDoc,
} from 'firebase/firestore';
import { firebaseApp } from './index';

const db = getFirestore(firebaseApp);

export const getAllCollection = async path => {
  const q = query(collection(db, path));

  const querySnapshot = await getDocs(q);
  const data = [];

  querySnapshot.forEach(doc => data.push(doc.data()));
  return data;
};

export const getCollectionDocumentById = async (path, id) => {
  const docRef = doc(db, path, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
};

export const getCollectionsByFilter = async (path, key, value) => {
  const q = query(collection(db, path), where(key, '==', value));

  const querySnapshot = await getDocs(q);
  const data = [];

  querySnapshot.forEach(doc => data.push(doc.data()));
  return data;
};

export const createCollectionDocument = async (path, data) => {
  return await setDoc(doc(db, path, data.id), data);
};
