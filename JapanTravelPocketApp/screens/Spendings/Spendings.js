import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {updateSpendingsDate} from '../../redux/reducers/Spendings';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import DatePicker from '../../components/DatePicker/DatePicker';
import DateHeaderButton from '../../components/DateHeaderButton/DateHeaderButton';
import BackButton from '../../components/BackButton/BackButton';

import dayjs from 'dayjs';
import 'dayjs/locale/de';
import SpendingsAPI from '../../api/spendings';
import {Routes} from '../../navigation/Routes';
import SpendingRow from '../../components/SpendingRow/SpendingRow';
import SpendingsList from '../../components/SpendingsList/SpendingsList';

const Spendings = ({navigation}) => {
  const spendingsData = useSelector(state => state.spendings);
  const spendings = spendingsData.spendings;
  const date = spendingsData.date;
  const dispatch = useDispatch();

  // const [date, setDate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log(date);
    // if (date != null) {
    //   const data = SpendingsAPI.getSpendingByDate(date.toString());
    //   setError(data);
    // }
    dispatch(updateSpendingsDate(dayjs()));
  }, []);

  useEffect(() => {
    console.log(date);
    console.log(error);
  }, [spendings]);

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
        <DateHeaderButton
          title={date && formatDate(date)}
          onPress={() => navigation.navigate(Routes.DatePickerScreen)}
        />
      </View>
      <SpendingRow
        name={'Ramen miso und shoyu'}
        price={1500}
        tag={'Dönerbox'}
        tagColor={'red'}
      />
      <SpendingsList />
    </SafeAreaView>
  );
};

export default Spendings;
