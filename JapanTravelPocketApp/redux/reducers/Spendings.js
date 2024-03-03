import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const Spendings = createSlice({
  name: 'spendings',
  initialState: initialState,
  reducers: {
    // resetSpendings: () => {
    //   return initialState;
    // },
    updateSpendings: (state, action) => {
      state.spendings = action.payload;
    },
    updateSpendingsDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {updateSpendings, updateSpendingsDate} = Spendings.actions;

export default Spendings.reducer;
