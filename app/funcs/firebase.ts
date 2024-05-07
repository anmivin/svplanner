import { addDoc, collection } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';

import { FIREBASE_DB, STORAGE_DB } from '../../firebaseConfig';

const init = () => {
  const image = getDownloadURL(ref(STORAGE_DB, 'Potato.png')).then((data) => {
    const doc = addDoc(collection(FIREBASE_DB, 'crops'), {
      name: 'Картофель',
      key: 'crop_potato',
      icon: 'Potato.png',
      prices: {
        base: 80,
        silver: 100,
        gold: 120,
        iridium: 160,
      },
      season: 'spring',
      type: 'vegetable',
      days: 6,
      repeat: 0,
      src: data,
    });
  });
};
