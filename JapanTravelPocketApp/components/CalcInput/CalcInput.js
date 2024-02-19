import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import style from './style';

import PropTypes from 'prop-types';

const CalcInput = props => {
  const [value, setValue] = useState('');

  return (
    <View style={style.container}>
      <Text style={style.label}>{props.label}</Text>
      <View style={style.inputContainer}>
        <FontAwesomeIcon
          style={style.icon}
          icon={props.iconName}
          size={props.iconSize}
        />
        <TextInput
          placeholder={props.placeholder ? props.placeholder : ''}
          style={style.input}
          // value={value}
          value={props.value}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          onChangeText={val => {
            setValue(val);
            props.onChangeText(val);
          }}
        />
      </View>
    </View>
  );
};

CalcInput.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  iconSize: 25,
};

CalcInput.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

export default CalcInput;
