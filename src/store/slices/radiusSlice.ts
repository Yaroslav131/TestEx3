import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'


interface RadiusState {
  value: number
}

const initialState: RadiusState = {
  value: 1000,
}

export const radiusSlice = createSlice({
  name: 'radius',
  initialState,
  reducers: {
    setByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload 
    }
  },
})

export const { setByAmount } = radiusSlice.actions

export const selectCount = (state: RootState) => state.radius.value

export default radiusSlice.reducer