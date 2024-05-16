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

const getSpendings = async () => {
  try {
    const response = await axios.get(API_URL + '/spendings');

    if (response.status !== 200) {
      throw new Error('Failed to fetch spendings.');
    }

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

const createSpending = async spendingData => {
  try {
    const response = await axios.post(API_URL + '/spendings', spendingData);
    // console.log(spendingData);
    // console.log(response);
    if (response.status !== 201) {
      throw new Error('Failed to create spending.');
    }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const updateSpending = async (spendingId, spendingData) => {
  try {
    const response = await axios.put(
      API_URL + `/spendings/${spendingId}`,
      spendingData,
    );

    if (response.status !== 201) {
      throw new Error('Failed to create spending.');
    }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const deleteSpending = async spendingId => {
  try {
    const response = await axios.delete(API_URL + `/spendings/${spendingId}`);

    if (response.status !== 200) {
      throw new Error('Failed to delete spending.');
    }
    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const SpendingsAPI = {
  getSpendings,
  getSpendingByDate,
  createSpending,
  updateSpending,
  deleteSpending,
};

export default SpendingsAPI;
