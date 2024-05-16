import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {updateSpendingsDate} from '../../redux/reducers/Spendings';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import SpendingsAPI from '../../api/spendings';

import DatePicker from '../../components/DatePicker/DatePicker';
import Header from '../../components/Header/Header';
import {Routes} from '../../navigation/Routes';
import {updateActivityDate} from '../../redux/reducers/Activities';

const DatePickerScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const formatDate = dateString => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const showModalParam = route.params?.showModal;
  const spendingParam = route.params?.spending;
  const activityParam = route.params?.activity;
  const cameFromRoute = route.params?.cameFrom;

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <View style={style.headerContainer}>
        <Header
          title={'Pick a Date'}
          type={4}
          color={'#FFFFFF'}
          numberOfLines={1}
        />
      </View>
      <View style={style.datePicker}>
        <DatePicker
          onChangeDate={value => {
            if (cameFromRoute == 'Spendings') {
              // console.log(formatDate(value));
              // SpendingsAPI.getSpendingByDate(value.toString());
              if (showModalParam) {
                navigation.navigate(Routes.Spendings, {
                  showModalParam,
                  spendingParam,
                  date: value,
                });
              } else {
                dispatch(updateSpendingsDate(formatDate(value)));
                navigation.navigate(Routes.Spendings);
              }
            } else {
              if (showModalParam) {
                navigation.navigate(Routes.Activities, {
                  showModalParam,
                  activityParam,
                  date: value,
                });
              } else {
                dispatch(updateActivityDate(formatDate(value)));
                navigation.navigate(Routes.Activities);
              }
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePickerScreen;
