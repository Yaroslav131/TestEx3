import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserCoordsState {
  value: [number, number] | null;
}

const initialState: UserCoordsState = {
  value: null,
};

export const userCordsSlice = createSlice({
  name: 'radius',
  initialState,
  reducers: {
    setCoords: (state, action: PayloadAction<[number, number]>) => {
      state.value = action.payload;
    },
  },
});

export const { setCoords } = userCordsSlice.actions;

export default userCordsSlice.reducer;
