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

const createTag = async tagData => {
  try {
    const response = await axios.post(API_URL + '/tags', tagData);

    if (response.status !== 201) {
      throw new Error('Failed to create tag.');
    }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const updateTag = async (tagId, tagData) => {
  try {
    const response = await axios.put(API_URL + `/tags/${tagId}`, tagData);

    if (response.status !== 201) {
      throw new Error('Failed to create tag.');
    }

    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const deleteTag = async tagId => {
  try {
    const response = await axios.delete(API_URL + `/tags/${tagId}`);

    if (response.status !== 200) {
      throw new Error('Failed to delete tag.');
    }
    return response.data;
  } catch (error) {
    return {error: 'Something went wrong with your request.'};
  }
};

const TagsAPI = {
  getTags,
  createTag,
  updateTag,
  deleteTag,
};

export default TagsAPI;
