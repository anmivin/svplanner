import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cropTypes } from '../../types/dbtypes';

import { fetchCrops } from './ActionCreators';
interface CropsStoreProps {
  crops: cropTypes[];
  pendingCrops: boolean;
  error: string;
}
const initialState: CropsStoreProps = {
  crops: [],
  pendingCrops: false,
  error: '',
};

export const cropsSlice = createSlice({
  name: 'crops',
  initialState,
  reducers: {
    cropsFetching: (state) => {
      state.pendingCrops = true;
    },
    cropsFetchingSuccess: (state, action: PayloadAction<cropTypes[]>) => {
      state.pendingCrops = false;
      state.error = '';
      state.crops = action.payload;
    },
    cropsFetchingFailed: (state, action: PayloadAction<string>) => {
      state.pendingCrops = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrops.pending, (state) => {
      state.pendingCrops = true;
    }),
      builder.addCase(fetchCrops.fulfilled, (state, action: PayloadAction<cropTypes[]>) => {
        state.pendingCrops = false;
        state.error = '';
        state.crops = action.payload;
      }),
      builder.addCase(fetchCrops.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingCrops = false;
        state.error = action.payload as string;
      });
  },
});

export default cropsSlice.reducer;
