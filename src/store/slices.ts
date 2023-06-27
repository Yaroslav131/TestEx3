import geoObjectsSlice from './slices/loadingObjectsSlice';
import isChosenObjPickedSlice from './slices/isChosenObjPickedSlice';
import radiusSlice from './slices/radiusSlice';
import savedObjectsIdSlice from './slices/savedObjectsIdSlice';
import tagsSlice from './slices/tagsSlice';
import userCordsSlice from './slices/userCordsSlice';
import loadingObjectsSlice from './slices/loadingObjectsSlice';

const slices = {
    loadingObjectsSlice,
    geoObjectsSlice,
    isChosenObjPickedSlice,
    radiusSlice,
    savedObjectsIdSlice,
    tagsSlice,
    userCordsSlice,
};

export default slices;