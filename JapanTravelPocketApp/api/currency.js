import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const BASE_CURRENCY = "EUR"
const CURRENCIES = "EUR,JPY"

const freecurrencyapi = new Freecurrencyapi(
  'fca_live_TfvnK82RAjlWFFdKMg1RQBABhX36ecAS591J6FI2',
);

export const getCurrency = async (setEuroCurrency,setYenCurrency) => {
  await freecurrencyapi
    .latest({
      base_currency: BASE_CURRENCY,
      currencies: CURRENCIES,
    })
    .then(response => {
        const rate = response.data;
        setEuroCurrency(rate.EUR)
        setYenCurrency(rate.JPY)
    });
};
