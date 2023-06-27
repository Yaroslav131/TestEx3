import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface TagsSliceState {
  value: string[];
}

const initialState: TagsSliceState = {
  value: [],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
    },
  },
});

export const { deleteTag, addTag } = tagsSlice.actions;

export default tagsSlice.reducer;
