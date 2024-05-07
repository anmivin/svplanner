import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../firebaseConfig';
import { cropTypes } from '../../types/dbtypes';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';

export const fetchCrops = createAsyncThunk('crops/fetchCrops', async (_, thunkApi: GetThunkAPI<{}>) => {
  try {
    const snapshot = await getDocs(collection(FIREBASE_DB, 'crops'));
    const crops: cropTypes[] = [];
    snapshot.forEach(async (item) => {
      crops.push(item.data() as cropTypes);
    });
    return crops;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});
