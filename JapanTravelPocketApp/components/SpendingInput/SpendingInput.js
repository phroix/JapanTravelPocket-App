import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import style from './style';

import PropTypes from 'prop-types';

const SpendingInput = props => {
  const [value, setValue] = useState('');

  return (
    <View style={style.container}>
      <View style={style.labelContainer}>
        <Text style={style.label}>{props.label}</Text>
      </View>
      <View style={style.inputContainer}>
        <TextInput
          placeholder={props.placeholder ? props.placeholder : ''}
          style={style.input}
          //   value={props.value}
          selectTextOnFocus={true}
          keyboardAppearance={'dark'}
          value={props.value}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          // onChangeText={val => {
          //   setValue(val);
          //   props.onChangeText(val);
          // }}
        />
        {props.hasIcon && (
          <FontAwesomeIcon
            icon={'fa-yen-sign'}
            color={'#FFFFFF'}
            size={props.iconSize}
          />
        )}
      </View>
    </View>
  );
};

SpendingInput.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  iconSize: 20,
  hasIcon: false,
};

SpendingInput.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  hasIcon: PropTypes.bool,
};

export default SpendingInput;
