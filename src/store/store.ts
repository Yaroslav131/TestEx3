import { configureStore } from '@reduxjs/toolkit';
import radiusSlice from './slices/radiusSlice';
import userCordsSlice from './slices/userCordsSlice';
import geoObjectsSlice from './slices/geoObjectsSlice';
import tagsSlice from './slices/tagsSlice';

import isChosenObjPickedSlice from './slices/isChosenObjPickedSlice';
import savedObjectsIdSlice from './slices/savedObjectsIdSlice';

const store = configureStore({
  reducer: {
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
