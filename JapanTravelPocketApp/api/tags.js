import axios from 'axios';
import store from '../redux/store';
import {updateTags} from '../redux/reducers/Tags';

const API_URL = process.env.API_URL;

const getTags = async () => {
  try {
    const response = await axios.get(API_URL + `/tags`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch tags.');
    }

    // if (response.data.length > 0) {
    store.dispatch(updateTags(response.data));
    // } else {
    //   console.log('No spendings found for the given date.');
    // }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const TagsAPI = {
  getTags,
};

export default TagsAPI;
