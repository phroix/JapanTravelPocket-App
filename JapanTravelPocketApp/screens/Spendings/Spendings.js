import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Modal, Pressable, Text} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {
  updateSpendings,
  updateSpendingId,
  updateSpendingsDate,
  resetSpendings,
} from '../../redux/reducers/Spendings';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import DatePicker from '../../components/DatePicker/DatePicker';
import HeaderButton from '../../components/DateHeaderButton/HeaderButton';
import BackButton from '../../components/BackButton/BackButton';
import SubmitForm from '../../components/SubmitForm/SubmitForm';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Dialog from 'react-native-dialog';

import SpendingInput from '../../components/SpendingInput/SpendingInput';
import TagInput from '../../components/TagInput/TagInput';

import dayjs from 'dayjs';
import 'dayjs/locale/de';
import {Routes} from '../../navigation/Routes';
import SpendingRow from '../../components/SpendingRow/SpendingRow';
import SpendingsList from '../../components/SpendingsList/SpendingsList';
import AddButton from '../../components/AddButton/AddButton';

import SpendingsAPI from '../../api/spendings';
import TagsAPI from '../../api/tags';
import DateInput from '../../components/DateInput/DateInput';

const Spendings = ({navigation, route}) => {
  //tags
  const tagsData = useSelector(state => state.tags || {tags: []});
  const tags = tagsData.tags;

  const spendingsData = useSelector(state => state.spendings);
  const allSpendings = spendingsData.spendings; //all spendings
  const date = spendingsData.date;
  // console.log('date: ' + date);
  const spendings = allSpendings.filter(spending => {
    // Check if the spending's date matches the specified date
    // console.log(spending.date.slice(0, 10))
    return spending.date.slice(0, 10) === date.toString().slice(0, 10); // Compare the date strings directly
  });

  // console.log("date1 " + date);
  const dispatch = useDispatch();

  const [spendingId, setSpendingId] = useState(spendingsData.spendingId);
  const [spendingName, setSpendingName] = useState(null);
  const [spendingAmount, setSpendingAmount] = useState(null);
  const [spendingDate, setSpendingDate] = useState(date);
  const [spendingCurrency, setSpendingCurrency] = useState(160);
  const [spendingTag, setSpendingTag] = useState(null);
  const initalSpending = {
    id: null,
    name: null,
    currency: spendingCurrency,
    amount: null,
    date: date,
    tags_id: null,
  };

  const showModalParam = route.params?.showModalParam;
  const spendingParam = route.params?.spendingParam;
  const dateParam = route.params?.date;
  console.log('dateParam ' + dateParam);

  const [spending, setSpending] = useState(initalSpending);
  const [pressedSpending, setPressedSpending] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

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
    // if (!showModalParam) {
    setSpendingDate(date);
    // }
  }, [date]);

  useEffect(() => {
    console.log('useCallback');
    console.log(showModalParam);
    if (showModalParam) {
      setShowModal(showModalParam);
      setSpending(spendingParam);
      setSpendingDate(dateParam);
    }
    // console.log('useFocusEffect'); // This will log every time the component gains focus
    // fetchSpendingsData();
    // fetchTagsData();
  }, [showModalParam, spendingParam]);

  useEffect(() => {
    console.log('[]');
    // if (date != null) {
    //   const data = SpendingsAPI.getSpendingByDate(date.toString());
    //   setError(data);
    // }
    dispatch(updateSpendingsDate(formatDateNew(dayjs())));
    // fetchSpendingsData();
    // fetchTagsData();
    // console.log("date3 " + date);
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [date]);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log('useCallback');
  //     console.log(showModalParam);
  //     if (showModalParam) {
  //       setShowModal(showModalParam);
  //       setSpending(spendingParam);
  //     }
  //     // console.log('useFocusEffect'); // This will log every time the component gains focus
  //     // fetchSpendingsData();
  //     // fetchTagsData();
  //   }, [showModalParam, spendingParam]),
  // );

  useEffect(() => {
    if (allSpendings.length === 0) {
      // If there are no existing tags, start the tag ID at 0
      dispatch(updateSpendingId(0));
      setSpendingId(0);
    } else {
      let biggestId = -Infinity; // Initialize biggestId to negative infinity

      for (const spending of allSpendings) {
        if (spending.id > biggestId) {
          biggestId = spending.id; // Update biggestId if a larger ID is encountered
        }
      }
      dispatch(updateSpendingId(biggestId));
      setSpendingId(biggestId);
      // console.log('The biggest ID is:', spendingId);
    }
  }, [spendings]);

  useEffect(() => {
    setDisableSubmitButton(
      spendingName === null ||
        spendingName === '' ||
        spendingAmount === null ||
        spendingAmount === '' ||
        spendingDate === null ||
        spendingDate === '' ||
        spendingTag === null ||
        spendingTag === '',
    );

    setSpending(currentSpending => ({
      ...currentSpending,
      name: spendingName?.toString(), 
      amount: parseFloat(spendingAmount),
      currency: parseFloat(spendingCurrency), 
      date: spendingDate.toString(), 
      tags_id: parseFloat(spendingTag), 
    }));
  }, [spendingName, spendingAmount, spendingDate, spendingTag]);

  const createSpendingData = async spendingData => {
    try {
      await SpendingsAPI.createSpending(spendingData);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const updateSpendingData = async (spendingId, spendingData) => {
    try {
      // console.log(spendingData);
      await SpendingsAPI.updateSpending(spendingId, spendingData);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const deleteSpendingData = async spendingId => {
    try {
      await SpendingsAPI.deleteSpending(spendingId);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const deleteSpendingPerm = () => {
    setShowDeleteModal(false);
    console.log(spending.id);
    // Delete tag from local state
    deleteSpendingData(spending.id);
    const updatedSpending = spendings.filter(item => item.id !== spending.id);
    // Dispatch action to update Redux store
    dispatch(updateSpendings(updatedSpending));

    // Reset new tag
    resetNewSubmit();
  };

  const handlePressSpending = item => {
    setShowModal(true);
    // setSpendingId(item.id);
    setSpendingName(item.name);
    setSpendingAmount(item.amount.toString());
    setSpendingCurrency(item.currency);
    setSpendingDate(item.date);
    setSpendingTag(item.tags.id);

    // console.log(item.tags.id);
    setSpending({
      id: item.id,
      name: item.name,
      currency: item.currency,
      amount: item.amount,
      date: item.date,
      tags_id: item.tags.id,
    });
    setPressedSpending(true);
  };

  const handleSubmitButton = async () => {
    setShowModal(false);

    if (pressedSpending) {
      const existingSpendingIndex = allSpendings.findIndex(
        item => item.id === spending.id,
      );

      const updatedSpending = {
        name: spending.name,
        currency: spending.currency,
        amount: spending.amount,
        date: spending.date,
        tags_id: spending.tags_id,
      };

      // Update spending in the list
      const updatedSpendings = [...allSpendings];
      updatedSpendings[existingSpendingIndex] = {
        ...updatedSpendings[existingSpendingIndex],
        ...updatedSpending,
      };

      dispatch(updateSpendings(updatedSpendings));
      resetNewSubmit();
      await updateSpendingData(spending.id, updatedSpending);
    } else {
      let nextId = spendingId;
      const newDbSpending = {
        id: ++nextId,
        name: spending.name,
        currency: spending.currency,
        amount: spending.amount,
        date: spending.date,
        tags_id: spending.tags_id,
      };

      const dbTag = tags.find(tag => tag.id === newDbSpending.tags_id);
      console.log(dbTag.id);
      console.log(dbTag.tag);
      console.log(dbTag.color);

      const newLocalSpending = {
        ...newDbSpending,
        tags: {
          id: dbTag.id,
          tag: dbTag.tag,
          color: dbTag.color,
        },
      };

      // Add new spending to the start of the list
      const updatedSpendings = [newLocalSpending, ...allSpendings];
      dispatch(updateSpendings(updatedSpendings));
      dispatch(updateSpendingId(nextId));
      setSpendingId(nextId);
      resetNewSubmit();
      // Create tag in the backend
      await createSpendingData(newDbSpending);
    }
  };

  const handleAddNewButton = () => {
    setShowModal(true);
  };

  const handleDateInput = () => {
    navigation.navigate(Routes.DatePickerScreen, {
      showModal,
      spending,
      cameFrom: 'Spendings',
    });
    setShowModal(false);
  };

  const resetNewSubmit = () => {
    setShowModal(false);
    setSpendingName(null);
    setSpendingAmount(null);
    setSpendingDate(date);
    setSpendingTag(null);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <View style={style.headerContainer}>
        <BackButton
          onPress={() =>
            navigation.navigate(Routes.DatePickerScreen, {
              cameFrom: 'Spendings',
            })
          }
        />
        <HeaderButton
          title={date && formatDate(date)}
          onPress={() =>
            navigation.navigate(Routes.DatePickerScreen, {
              cameFrom: 'Spendings',
            })
          }
        />
      </View>
      <View style={style.spendingsContainer}>
        <SpendingsList
          spendings={spendings}
          onPress={() => {
            navigation.navigate(Routes.Tags);
          }}
          onPressRow={item => {
            handlePressSpending(item);
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
      <View>
        <Dialog.Container
          style={style.popupContainer}
          visible={showDeleteModal}>
          <Dialog.Title>Tag delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this Spending? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button
            label="Cancel"
            onPress={() => setShowDeleteModal(!showDeleteModal)}
          />
          <Dialog.Button
            label="Delete"
            onPress={() => {
              deleteSpendingPerm();
            }}
          />
        </Dialog.Container>
      </View>
      <Modal transparent visible={showModal}>
        <View style={style.modalContainer}>
          <View style={style.spendingsSubmitContainer}>
            <View style={style.closeButtonContainer}>
              <Pressable
                style={style.closeButton}
                onPress={() => resetNewSubmit()}>
                <FontAwesomeIcon
                  icon={'fa-solid fa-xmark'}
                  size={25}
                  color={'white'}
                />
              </Pressable>
            </View>
            <View style={style.spendingsInputContainer}>
              <View style={style.input}>
                <SpendingInput
                  label={'Name'}
                  value={spendingName}
                  onChangeText={val => {
                    setSpendingName(val);
                  }}
                />
              </View>
              <View style={style.input}>
                <SpendingInput
                  label={'Price'}
                  hasIcon={true}
                  value={spendingAmount}
                  onChangeText={val => {
                    setSpendingAmount(val);
                  }}
                />
              </View>
              <View style={style.input}>
                <DateInput
                  onPress={() => handleDateInput()}
                  label={'Date'}
                  value={spendingDate && formatDate(spendingDate)}
                />
              </View>
              <View style={style.input}>
                <TagInput
                  label={'Tag'}
                  value={spendingTag}
                  onChangeText={val => {
                    setSpendingTag(val);
                  }}
                />
              </View>
            </View>
            <View style={style.submitButtonContainer}>
              <Pressable
                disabled={disableSubmitButton}
                style={[
                  !disableSubmitButton
                    ? style.submitButton
                    : style.submitButtonDisabled,
                ]}
                onPress={() => {
                  handleSubmitButton();
                  resetNewSubmit();
                }}>
                <Text style={style.submitLabel}>Submit</Text>
              </Pressable>
              {pressedSpending && (
                <Pressable
                  style={[style.deleteButton]}
                  disabled={!pressedSpending}
                  onPress={() => {
                    console.log('pressed');
                    setShowModal(false);
                    setShowDeleteModal(true);
                  }}>
                  <FontAwesomeIcon icon={'fa-trash'} color={'#FFFFFF'} />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Spendings;
