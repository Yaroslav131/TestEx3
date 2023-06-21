import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserCoordsState {
  value: [number, number]
}

const initialState: UserCoordsState = {
  value: [0, 0],
}

export const userCordsSlice = createSlice({
  name: 'radius',
  initialState,
  reducers: {
    setCoords: (state, action: PayloadAction<[number,number]>) => {
      state.value = action.payload
    }
  },
})

export const { setCoords } = userCordsSlice.actions

export const selectCount = (state: RootState) => state.userCords.value

export default userCordsSlice.reducer