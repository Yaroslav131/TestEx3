import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IIsChosenObjPicked {
  value: [boolean, number | null];
}

const initialState: IIsChosenObjPicked = {
  value: [false, null],
};

export const isChosenObjPickedSlice = createSlice({
  name: 'geoObjects',
  initialState,
  reducers: {
    pickChosenObj: (state, action: PayloadAction<number>) => {
      state.value = [true, action.payload];
    },
    closeChosenObj: (state) => {
      state.value = [false, null];
    },
  },
});

export const { pickChosenObj, closeChosenObj } = isChosenObjPickedSlice.actions;

export default isChosenObjPickedSlice.reducer;
