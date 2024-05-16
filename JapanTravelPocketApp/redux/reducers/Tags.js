import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tags: null,
  tagId: null,
};

const Tags = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    updateTags: (state, action) => {
      state.tags = action.payload;
    },
    updateTagId: (state, action) => {
      state.tagId = action.payload;
    },
    resetTags: () => {
      return initialState;
    },
  },
});

export const {updateTags, updateTagId, resetTags} = Tags.actions;

export default Tags.reducer;
