import { createSlice } from '@reduxjs/toolkit';


interface LagingObjectState {
  value: boolean;
}

const initialState: LagingObjectState = {
  value: false,
};

export const loadingObjectsSlice = createSlice({
  name: 'loadingObjects',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.value = true
    },
    hideLoading: (state) => {
      state.value = false
    },
  },
});

export const { showLoading,hideLoading } = loadingObjectsSlice.actions;

export default loadingObjectsSlice.reducer;
