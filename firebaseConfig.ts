import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDkCirXjbA167rAaD9Ah4hJpphmhMlt9no',
  authDomain: 'stardew-valley-super-helper.firebaseapp.com',
  projectId: 'stardew-valley-super-helper',
  storageBucket: 'stardew-valley-super-helper.appspot.com',
  messagingSenderId: '864095727517',
  appId: '1:864095727517:web:f4610a5217c99d75148974',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const STORAGE_DB = getStorage(FIREBASE_APP);
