import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedTagId: null,
  selectedTagInformation: null,
};

const Tags = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    // resetSpendings: () => {
    //   return initialState;
    // },
    updateTags: (state, action) => {
      state.tags = action.payload;
    },
    updateSelectedTagId: (state, action) => {
      state.selectedTagId = action.payload;
      state.selectedTagInformation = state.items.find(
        item => item.selectedTagId === action.payload,
      );
    },
    resetTags: () => {
      return initalState;
    },
  },
});

export const {updateTags, updateSelectedTagId, resetTags} = Tags.actions;

export default Tags.reducer;
