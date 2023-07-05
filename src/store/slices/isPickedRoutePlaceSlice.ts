import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IGeoObject from '@customTypes/IGeoObject';

interface IIsPickedRoutePlace {
  value: { isPicked: boolean, object: IGeoObject | null }
}

const initialState: IIsPickedRoutePlace = {
  value: { isPicked: false, object: null }
};

export const isPickedRoutePlaceSlice = createSlice({
  name: 'pickedRoutePlace',
  initialState,
  reducers: {
    pickRoutePlace: (state, action: PayloadAction<{ isPicked: boolean, object: IGeoObject | null }>) => {
      state.value = action.payload;
    },
    closeRoutePlace: (state) => {
      state.value = { isPicked: false, object: null };
    },
  },
});

export const { pickRoutePlace, closeRoutePlace } = isPickedRoutePlaceSlice.actions;

export default isPickedRoutePlaceSlice.reducer;
