import { configureStore } from '@reduxjs/toolkit'
import radiusSlice from './slices/radiusSlice'
import userCordsSlice from './slices/userCordsSlice'
import geoObjectsSlice from './slices/geoObjectsSlice'
import tagsSlice from './slices/tagsSlice'
import objectNameSlice from './slices/objectNameSlice'

const store = configureStore({
    reducer: {
        radius: radiusSlice,
        userCords: userCordsSlice,
        geoObjects: geoObjectsSlice,
        tags: tagsSlice,
        objectName: objectNameSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;