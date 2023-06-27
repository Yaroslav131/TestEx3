import { PayloadAction, createSlice } from '@reduxjs/toolkit';


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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
});

export const { setIsLoading } = loadingObjectsSlice.actions;

export default loadingObjectsSlice.reducer;
