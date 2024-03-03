import axios from 'axios';
import store from '../redux/store';
import {updateSpendings} from '../redux/reducers/Spendings';

const API_URL = process.env.API_URL;

const getSpendingByDate = async date => {
  try {
    const response = await axios.get(API_URL + `/spendings?date=${date}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch spendings.');
    }

    // console.log(response.data);

    // if (response.data.length > 0) {
    store.dispatch(updateSpendings(response.data));
    // } else {
    //   console.log('No spendings found for the given date.');
    // }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const SpendingsAPI = {
  getSpendingByDate,
};

export default SpendingsAPI;
