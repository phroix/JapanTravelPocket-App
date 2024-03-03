import {
  updateCurrencyDate,
  updateEuroCurrency,
  updateYenCurrency,
} from '../redux/reducers/CalcData';
import store from '../redux/store';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const BASE_CURRENCY = 'EUR';
const CURRENCIES = 'EUR,JPY';
const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY;

const freecurrencyapi = new Freecurrencyapi(CURRENCY_API_KEY);

export const getCurrency = async () => {
  try {
    const response = await freecurrencyapi.latest({
      base_currency: BASE_CURRENCY,
      currencies: CURRENCIES,
    });

    const rate = response.data;
    store.dispatch(updateEuroCurrency(rate.EUR));
    store.dispatch(updateYenCurrency(rate.JPY));

    const currentDate = new Date().toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    });

    // Manually adding ' UTC' to the time string
    const formattedDate = currentDate + ' UTC';
    store.dispatch(updateCurrencyDate(formattedDate));
    return response;
  } catch (error) {
    return error;
  }
};
