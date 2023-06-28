import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IIsPickedRoutePlace {
  value: [boolean, { lan: number, lon: number } | null];
}

const initialState: IIsPickedRoutePlace = {
  value: [false, null],
};

export const isPickedRoutePlaceSlice = createSlice({
  name: 'pickedRoutePlace',
  initialState,
  reducers: {
    pickRoutePlace: (state, action: PayloadAction<{ lan: number, lon: number }>) => {
      state.value = [true, action.payload];
    },
    closeRoutePlace: (state) => {
      state.value = [false, null];
    },
  },
});

export const { pickRoutePlace, closeRoutePlace } = isPickedRoutePlaceSlice.actions;

export default isPickedRoutePlaceSlice.reducer;
