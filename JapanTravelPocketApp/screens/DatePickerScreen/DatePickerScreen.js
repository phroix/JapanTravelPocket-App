import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {updateSpendingsDate} from '../../redux/reducers/Spendings';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import DatePicker from '../../components/DatePicker/DatePicker';
import Header from '../../components/Header/Header';
import {Routes} from '../../navigation/Routes';

const DatePickerScreen = ({navigation}) => {
  const dispatch = useDispatch();

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
            console.log(Routes.Spendings);
            dispatch(updateSpendingsDate(value));
            navigation.navigate(Routes.Spendings);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePickerScreen;
