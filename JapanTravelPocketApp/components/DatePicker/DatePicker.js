import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import style from './style';
import {
  scaleFontSize,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

import PropTypes from 'prop-types';

const DatePicker = props => {
  const [locale, setLocale] = useState('de');
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    handleDatePick(date);
  }, []);

  const handleDatePick = dateValue => {
    const formatedDate = dateValue.locale(locale).format('DD/MM/YYYY');
    setDate(dateValue);
    props.onChangeDate(formatedDate);
  };

  return (
    <View style={style.container}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={params => handleDatePick(params.date)}
        locale={'de'}
        firstDayOfWeek={1}
        displayFullDays={true}
        dayContainerStyle={{
          borderRadius: horizontalScale(8),
          backgroundColor: '#262629',
          fontSize: scaleFontSize(30),
        }}
        weekDaysTextStyle={{color: '#FFFFFF', fontSize: scaleFontSize(18)}}
        calendarTextStyle={{color: '#FFFFFF', fontSize: scaleFontSize(16)}}
        todayTextStyle={{color: '#FFFFFF', fontSize: scaleFontSize(18)}}
        headerTextStyle={{color: '#FFFFFF', fontSize: scaleFontSize(24)}}
        selectedTextStyle={{color: '#FFFFFF', fontSize: scaleFontSize(18)}}
        yearContainerStyle={{
          borderRadius: horizontalScale(8),
          borderWidth: 0,
          backgroundColor: '#262629',
          fontSize: scaleFontSize(50),
          justifyContent: 'center',
          alignItems: 'center',
          height: verticalScale(40),
          width: 'auto',
        }}
        monthContainerStyle={{
          borderRadius: horizontalScale(8),
          borderWidth: 0,
          backgroundColor: '#262629',
          fontSize: scaleFontSize(50),
          justifyContent: 'center',
          alignItems: 'center',
          height: verticalScale(40),
          width: 'auto',
        }}
        headerButtonColor={'#FFFFFF'}
        selectedItemColor={'#780621'}
      />
    </View>
  );
};

DatePicker.defaultProps = {
  onChangeDate: () => {},
};
DatePicker.propTypes = {
  onChangeDate: PropTypes.func,
};

export default DatePicker;
