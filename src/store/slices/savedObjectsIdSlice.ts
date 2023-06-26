import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface GeoObjectState {
  value: number[];
}

const initialState: GeoObjectState = {
  value: [],
};

export const savedObjectsIdSlice = createSlice({
  name: 'geoObjects',
  initialState,
  reducers: {
    setGeoObjectId: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
  },
});

export const { setGeoObjectId } = savedObjectsIdSlice.actions;

export default savedObjectsIdSlice.reducer;
