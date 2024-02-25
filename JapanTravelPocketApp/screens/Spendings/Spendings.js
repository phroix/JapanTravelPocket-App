import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import DatePicker from '../../components/DatePicker/DatePicker';
import DateHeaderButton from '../../components/DateHeaderButton/DateHeaderButton';

const Spendings = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <DateHeaderButton title={date && date} />
      <View style={style.datePicker}>
        <DatePicker
          onChangeDate={value => {
            setDate(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Spendings;
