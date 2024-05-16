import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  spendings: null,
  spendingId: null,
};

const Spendings = createSlice({
  name: 'spendings',
  initialState: initialState,
  reducers: {
    updateSpendings: (state, action) => {
      state.spendings = action.payload;
    },
    updateSpendingsDate: (state, action) => {
      state.date = action.payload;
    },
    updateSpendingId: (state, action) => {
      state.spendingId = action.payload;
    },
    resetSpendings: () => {
      return initialState;
    },
  },
});

export const {
  updateSpendings,
  updateSpendingsDate,
  updateSpendingId,
  resetSpendings,
} = Spendings.actions;

export default Spendings.reducer;
