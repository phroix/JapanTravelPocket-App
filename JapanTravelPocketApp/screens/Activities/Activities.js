import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Button,
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import {
  verticalScale,
  scaleFontSize,
  horizontalScale,
} from '../../assets/styles/scaling';

import {useSelector, useDispatch} from 'react-redux';

import dayjs from 'dayjs';
import 'dayjs/locale/de';
import Dialog from 'react-native-dialog';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import HeaderButton from '../../components/DateHeaderButton/HeaderButton';
import AddButton from '../../components/AddButton/AddButton';
import {
  updateActivities,
  updateActivityDate,
  updateActivityId,
} from '../../redux/reducers/Activities';
import {Routes} from '../../navigation/Routes';
import ActivitiesList from '../../components/ActivitiesList/ActivitiesList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ActivitiesAPI from '../../api/activities';

const Activities = ({navigation, route}) => {
  const dispatch = useDispatch();

  const activitiesData = useSelector(state => state.activities);
  const allActivities = activitiesData.activities; //all spendings
  const date = activitiesData.date;
  // console.log('date: ' + date);
  const activities = allActivities.filter(activity => {
    // Check if the spending's date matches the specified date
    // console.log(spending.date.slice(0, 10))
    return activity.date.slice(0, 10) === date?.toString().slice(0, 10); // Compare the date strings directly
  });

  const [activityId, setActivityId] = useState(activitiesData.activityId);
  const [activityName, setActivityName] = useState(null);
  const [activityDescription, setActivityDescription] = useState(null);
  const [activityDate, setActivityDate] = useState(date);

  const initalActivity = {
    id: null,
    name: null,
    description: null,
    date: date,
  };

  const showModalParam = route.params?.showModalParam;
  const activityParam = route.params?.activityParam;
  const dateParam = route.params?.date;
  // console.log('dateParam ' + dateParam);

  const [activity, setActivity] = useState(initalActivity);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pressedActivity, setPressedActivity] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // if (!showModalParam) {
    if (date) setActivityDate(date);
    // }
  }, [date]);

  useEffect(() => {
    // console.log('useCallback');
    // console.log(showModalParam);
    // console.log(dateParam);
    if (showModalParam) {
      setShowModal(showModalParam);
      setActivity(activityParam);
      setActivityDate(dateParam);
    }
    // console.log('useFocusEffect'); // This will log every time the component gains focus
    // fetchSpendingsData();
    // fetchTagsData();
  }, [showModalParam, activityParam]);

  useEffect(() => {
    if (allActivities.length === 0) {
      // If there are no existing tags, start the tag ID at 0
      dispatch(updateActivityId(0));
      setActivityId(0);
    } else {
      let biggestId = -Infinity; // Initialize biggestId to negative infinity

      for (const activity of allActivities) {
        if (activity.id > biggestId) {
          biggestId = activity.id; // Update biggestId if a larger ID is encountered
        }
      }
      dispatch(updateActivityId(biggestId));
      setActivityId(biggestId);
      // console.log('The biggest ID is:', spendingId);
    }
  }, [activities]);

  useEffect(() => {
    setActivity(currentActivity => ({
      ...currentActivity,
      name: activityName?.toString(),
      description: activityDescription?.toString(),
      date: activityDate?.toString(),
    }));
  }, [activityName, activityDescription, activityDate]);

  const createActivityData = async activityData => {
    try {
      await ActivitiesAPI.createActivity(activityData);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const updateActivityData = async (activityId, activityData) => {
    try {
      // console.log(spendingData);
      await ActivitiesAPI.updateActivity(activityId, activityData);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const deleteActivityData = async activityId => {
    try {
      await ActivitiesAPI.deleteActivity(activityId);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const formatDateNew = dateString => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDate = dateString => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    // console.log('formatDateNew(dayjs()) ' + formatDateNew(dayjs()));
    // if (date != null) {
    //   const data = SpendingsAPI.getSpendingByDate(date.toString());
    //   setError(data);
    // }

    dispatch(updateActivityDate(formatDateNew(dayjs())));
    // fetchSpendingsData();
    // fetchTagsData();
  }, []);

  const deleteActivityPerm = () => {
    setShowModal(false);
    setShowDeleteModal(false);
    // Delete tag from local state
    deleteActivityData(activity.id);
    const updatedActivity = activities.filter(item => item.id !== activity.id);
    // Dispatch action to update Redux store
    dispatch(updateActivities(updatedActivity));

    resetNewSubmit();
  };

  const resetNewSubmit = () => {
    setShowModal(false);
    setActivityName(null);
    setActivityDescription(null);
    setActivityDate(date);
  };

  const handlePressActivity = item => {
    setShowModal(true);
    // setSpendingId(item.id);
    // console.log(item);
    setActivityName(item.name);
    setActivityDescription(item.description);
    setActivityDate(item.date);
    setActivity({
      id: item.id,
      name: item.name,
      description: item.description,
      date: item.date,
    });
    setPressedActivity(true);
  };

  const handleSubmitButton = async () => {
    setShowModal(false);

    if (pressedActivity) {
      const existingActivityIndex = allActivities.findIndex(
        item => item.id === activity.id,
      );

      const updatedActivity = {
        name: activity.name,
        description: activity.description,
        date: activity.date,
      };

      // Update spending in the list
      const updatedActivities = [...allActivities];
      updatedActivities[existingActivityIndex] = {
        ...updatedActivities[existingActivityIndex],
        ...updatedActivity,
      };

      dispatch(updateActivities(updatedActivities));
      resetNewSubmit();
      await updateActivityData(activity.id, updatedActivity);
    } else {
      let nextId = activityId;
      const newDbActiivity = {
        id: ++nextId,
        name: activity.name,
        description: activity.description,
        date: activity.date,
      };

      // Add new spending to the start of the list
      const updatedActivies = [newDbActiivity, ...allActivities];
      dispatch(updateActivities(updatedActivies));
      dispatch(updateActivityId(nextId));
      setActivityId(nextId);
      resetNewSubmit();
      // Create tag in the backend
      await createActivityData(newDbActiivity);
    }
  };

  const handleAddNewButton = () => {
    setShowModal(true);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <View style={style.headerContainer}>
        <BackButton
          onPress={() =>
            navigation.navigate(Routes.DatePickerScreen, {
              cameFrom: 'Activities',
            })
          }
        />
        <HeaderButton
          title={date && formatDate(date)}
          onPress={() =>
            navigation.navigate(Routes.DatePickerScreen, {
              cameFrom: 'Activities',
            })
          }
        />
      </View>
      <View style={style.activitiesContainer}>
        <ActivitiesList
          activities={activities}
          onPressRow={item => {
            handlePressActivity(item);
          }}
        />
      </View>
      <View style={style.addButtonContainer}>
        <AddButton
          iconName={'fa-solid fa-plus'}
          label={'Add new'}
          onPress={handleAddNewButton}
        />
      </View>
      <View
        style={[
          globalStyle.backgroundScreen,
          globalStyle.flex,
          style.modalContainer,
        ]}>
        <Modal
          visible={showModal}
          style={[
            globalStyle.backgroundScreen,
            globalStyle.flex,
            style.modalContainer,
          ]}>
          <View style={style.modalContainer}>
            <View
              style={[
                style.headerContainer2,
                !pressedActivity
                  ? {
                      paddingRight: horizontalScale(85),
                    }
                  : {paddingRight: horizontalScale(35)},
              ]}>
              <BackButton
                onPress={() => {
                  setShowModal(false);
                  handleSubmitButton();
                  setPressedActivity(false);
                  // navigation.navigate(Routes.ActivitiesDatePickerStack);
                }}
              />
              <HeaderButton
                title={activityDate && formatDate(activityDate)}
                onPress={() => {
                  setShowModal(false);

                  navigation.navigate(Routes.DatePickerScreen, {
                    showModal,
                    activity,
                    cameFrom: 'Activities',
                  });
                }}
              />
              {pressedActivity && (
                <Pressable
                  style={[style.deleteButton]}
                  disabled={!pressedActivity}
                  onPress={() => {
                    // console.log('pressed');
                    // setShowModal(false);
                    setShowDeleteModal(true);
                  }}>
                  <FontAwesomeIcon icon={'fa-trash'} color={'#FFFFFF'} />
                </Pressable>
              )}
            </View>
            <View>
              <View style={style.activityNameContainer}>
                <TextInput
                  style={style.activityName}
                  editable
                  onChangeText={text => setActivityName(text)}
                  value={activityName}
                  placeholder="name"
                  keyboardType="default"
                />
              </View>
              <View style={style.activityDescriptionContainer}>
                <TextInput
                  style={style.activityDescription}
                  editable
                  multiline
                  numberOfLines={50}
                  maxLength={100}
                  onChangeText={text => setActivityDescription(text)}
                  value={activityDescription}
                  placeholder="description"
                  keyboardType="default"
                />
              </View>
            </View>
          </View>
          <View>
            <Dialog.Container
              style={style.popupContainer}
              visible={showDeleteModal}>
              <Dialog.Title>Tag delete</Dialog.Title>
              <Dialog.Description>
                Do you want to delete this Activity? You cannot undo this
                action.
              </Dialog.Description>
              <Dialog.Button
                label="Cancel"
                onPress={() => setShowDeleteModal(!showDeleteModal)}
              />
              <Dialog.Button
                label="Delete"
                onPress={() => {
                  deleteActivityPerm();
                }}
              />
            </Dialog.Container>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Activities;
