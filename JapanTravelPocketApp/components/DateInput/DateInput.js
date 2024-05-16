import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import style from './style';

import PropTypes from 'prop-types';

const DateInput = props => {
  const [value, setValue] = useState('');

  // // Update local state when the value prop changes
  // useEffect(() => {
  //   setValue(props.value);
  // }, [props.value]);

  const onChangeText = val => {
    setValue(val);
    props.onChangeText(val);
  };

  return (
    <Pressable style={style.container} onPress={() => props.onPress()}>
      <View style={style.labelContainer}>
        <Text style={style.label}>{props.label}</Text>
      </View>
      <View style={style.inputContainer}>
        <View style={style.input}>
          <Text style={style.text}>{props.value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

DateInput.defaultProps = {
  onPress: () => {},
};

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default DateInput;
