import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  yenCurrency: null,
  yenSug: [
    {
      yenSugId: 1,
      yenSugAmount: 100,
    },
    {
      yenSugId: 2,
      yenSugAmount: 200,
    },
    {
      yenSugId: 3,
      yenSugAmount: 500,
    },
    {
      yenSugId: 4,
      yenSugAmount: 1000,
    },
    {
      yenSugId: 5,
      yenSugAmount: 1500,
    },
    {
      yenSugId: 6,
      yenSugAmount: 2000,
    },
    {
      yenSugId: 7,
      yenSugAmount: 2500,
    },
    {
      yenSugId: 8,
      yenSugAmount: 5000,
    },
    {
      yenSugId: 9,
      yenSugAmount: 10000,
    },
    {
      yenSugId: 10,
      yenSugAmount: 100000,
    },
  ],
  yenIcon: 'fa-yen-sign',
  euroCurrency: null,
  euroSug: [
    {
      euroSugId: 1,
      euroSugAmount: '5',
    },
    {
      euroSugId: 2,
      yenSugAmount: '10',
    },
    {
      euroSugId: 3,
      yenSugAmount: '15',
    },
    {
      euroSugId: 4,
      yenSugAmount: '20',
    },
    {
      euroSugId: 5,
      yenSugAmount: '25',
    },
    {
      euroSugId: 6,
      yenSugAmount: '30',
    },
    {
      euroSugId: 7,
      yenSugAmount: '40',
    },
    {
      euroSugId: 8,
      yenSugAmount: '50',
    },
    {
      euroSugId: 9,
      yenSugAmount: '100',
    },
    {
      euroSugId: 10,
      yenSugAmount: '1000',
    },
  ],
  euroIcon: 'fa-euro-sign',
};

const CalcData = createSlice({
  name: 'calcData',
  initialState: initialState,
  reducers: {
    resetCalcData: () => {
      return initialState;
    },
    updateYenCurrency: (state, action) => {
      state.yenCurrency = action.payload;
    },
    updateEuroCurrency: (state, action) => {
      state.euroCurrency = action.payload;
    },
  },
});

export const {resetCalcData, updateYenCurrency, updateEuroCurrency} = CalcData.actions;

export default CalcData.reducer;
