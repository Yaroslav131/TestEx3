import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RadiusState {
  value: number;
}

const initialState: RadiusState = {
  value: 1000,
};

export const radiusSlice = createSlice({
  name: 'radius',
  initialState,
  reducers: {
    setByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setByAmount } = radiusSlice.actions;

export default radiusSlice.reducer;
