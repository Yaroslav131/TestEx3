import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ObjectNameState {
  value: string
}

const initialState: ObjectNameState = {
  value: "",
}

export const  objectNameSlice = createSlice({
  name: 'nameObject',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})

export const { setName } = objectNameSlice.actions

export const selectCount = (state: RootState) => state.objectName.value

export default objectNameSlice.reducer