import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  activities: null,
  activityId: null,
};

const Activities = createSlice({
  name: 'activities',
  initialState: initialState,
  reducers: {
    updateActivities: (state, action) => {
      state.activities = action.payload;
    },
    updateActivityDate: (state, action) => {
      state.date = action.payload;
    },
    updateActivityId: (state, action) => {
      state.activityId = action.payload;
    },
    resetActivities: () => {
      return initialState;
    },
  },
});

export const {
  updateActivities,
  updateActivityId,
  updateActivityDate,
  resetActivities,
} = Activities.actions;

export default Activities.reducer;
