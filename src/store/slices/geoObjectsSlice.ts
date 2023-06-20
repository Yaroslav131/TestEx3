import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import IGeoObject from "../../interfaces/IGeoObject"

interface GeoObjectState {
    value: IGeoObject[]
}

const initialState: GeoObjectState = {
    value: []
};

export const geoObjectsSlice = createSlice({
    name: 'geoObjects',
    initialState,
    reducers: {
        setGeoObjects: (state, action: PayloadAction<IGeoObject[]>) => {
            state.value = action.payload
        }
    },
})

export const { setGeoObjects } = geoObjectsSlice.actions

export const selectCount = (state: RootState) => state.geoObjects.value

export default geoObjectsSlice.reducer