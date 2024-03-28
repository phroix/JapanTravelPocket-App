import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {updateSpendingsDate} from '../../redux/reducers/Spendings';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import DatePicker from '../../components/DatePicker/DatePicker';
import HeaderButton from '../../components/DateHeaderButton/HeaderButton';
import BackButton from '../../components/BackButton/BackButton';

import dayjs from 'dayjs';
import 'dayjs/locale/de';
import SpendingsAPI from '../../api/spendings';
import {Routes} from '../../navigation/Routes';
import SpendingRow from '../../components/SpendingRow/SpendingRow';
import SpendingsList from '../../components/SpendingsList/SpendingsList';
import AddButton from '../../components/AddButton/AddButton';
import TagsAPI from '../../api/tags';

const Spendings = ({navigation}) => {
  const spendingsData = useSelector(state => state.spendings);
  const spendings = spendingsData.spendings;
  const date = spendingsData.date;
  // console.log("date1 " + date);
  const dispatch = useDispatch();

  // const [date, setDate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log(date);
    // if (date != null) {
    //   const data = SpendingsAPI.getSpendingByDate(date.toString());
    //   setError(data);
    // }
    // console.log("date2 " + date);
    dispatch(updateSpendingsDate(dayjs()));
    fetchSpendingsData();
    fetchTagsData();
    // console.log("date3 " + date);
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [date]);
  useFocusEffect(
    React.useCallback(() => {
      // console.log('useFocusEffect'); // This will log every time the component gains focus
      fetchSpendingsData();
      fetchTagsData();
    }, [date]),
  );

  useEffect(() => {
    // console.log('spendings');
    // console.log(date);
    // SpendingsAPI.getSpendingByDate(date.toString());
    // console.log(spendings);
    // console.log(error);
  }, [spendings]);

  const fetchSpendingsData = async () => {
    await SpendingsAPI.getSpendingByDate(date.toString());
  };

  const fetchTagsData = async () => {
    await TagsAPI.getTags();
  };

  const formatDate = dateString => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <View style={style.headerContainer}>
        <BackButton
          onPress={() => navigation.navigate(Routes.DatePickerScreen)}
        />
        <HeaderButton
          title={date && formatDate(date)}
          onPress={() => navigation.navigate(Routes.DatePickerScreen)}
        />
      </View>
      <View style={style.spendingsContainer}>
        <SpendingsList
          spendings={spendings}
          onPress={() => {
            console.log('press tag');
            navigation.navigate(Routes.Tags);
          }}
        />
      </View>
      <View style={style.addButtonContainer}>
        <AddButton iconName={'fa-solid fa-plus'} label={'Add new'} />
      </View>
    </SafeAreaView>
  );
};

export default Spendings;
