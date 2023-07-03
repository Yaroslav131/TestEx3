import { configureStore } from '@reduxjs/toolkit';
import radiusSlice from './slices/radiusSlice';
import userCordsSlice from './slices/userCordsSlice';
import geoObjectsSlice from './slices/geoObjectsSlice';
import tagsSlice from './slices/tagsSlice';
import isChosenObjPickedSlice from './slices/isChosenObjPickedSlice';
import savedObjectsIdSlice from './slices/savedObjectsIdSlice';
import isPickedRoutePlaceSlice from "./slices/isPickedRoutePlaceSlice"
import loadingSlice from './slices/loadingSlice';

const store = configureStore({
  reducer: {
    pickedRoutePlace: isPickedRoutePlaceSlice,
    loading: loadingSlice,
    radius: radiusSlice,
    userCords: userCordsSlice,
    geoObjects: geoObjectsSlice,
    tags: tagsSlice,
    isChosenObjPicked: isChosenObjPickedSlice,
    savedObjectsId: savedObjectsIdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
