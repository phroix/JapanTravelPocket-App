import axios from 'axios';
import store from '../redux/store';
import {updateActivities} from '../redux/reducers/Activities';

const API_URL = process.env.API_URL;

const getActivities = async () => {
  try {
    const response = await axios.get(API_URL + '/activities');

    if (response.status !== 200) {
      throw new Error('Failed to fetch activities.');
    }

    // if (response.data.length > 0) {
    store.dispatch(updateActivities(response.data));
    // } else {
    //   console.log('No spendings found for the given date.');
    // }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const createActivity = async activityData => {
  try {
    const response = await axios.post(API_URL + '/activities', activityData);
    // console.log(spendingData);
    // console.log(response);
    if (response.status !== 201) {
      throw new Error('Failed to create activity.');
    }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const updateActivity = async (activityId, activityData) => {
  try {
    const response = await axios.put(
      API_URL + `/activities/${activityId}`,
      activityData,
    );

    if (response.status !== 201) {
      throw new Error('Failed to create activity.');
    }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const deleteActivity = async activityId => {
  try {
    const response = await axios.delete(API_URL + `/activities/${activityId}`);

    if (response.status !== 200) {
      throw new Error('Failed to delete activity.');
    }
    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const ActivitiesAPI = {
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity,
};

export default ActivitiesAPI;
