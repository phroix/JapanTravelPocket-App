import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const BASE_CURRENCY = 'EUR';
const CURRENCIES = 'EUR,JPY';

const freecurrencyapi = new Freecurrencyapi(
  'fca_live_TfvnK82RAjlWFFdKMg1RQBABhX36ecAS591J6FI2',
);

export const getCurrency = async (
  setEuroCurrency,
  setYenCurrency,
  setCurrencyDate,
) => {
  await freecurrencyapi
    .latest({
      base_currency: BASE_CURRENCY,
      currencies: CURRENCIES,
    })
    .then(response => {
      const rate = response.data;
      setEuroCurrency(rate.EUR);
      setYenCurrency(rate.JPY);
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
      setCurrencyDate(formattedDate);
    });
};
