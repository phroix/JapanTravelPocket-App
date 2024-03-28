import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import style from './style';

import PropTypes from 'prop-types';

const ColorPickerInput = props => {
  const [value, setValue] = useState('');

  return (
    <View style={style.container}>
      <View style={style.labelContainer}>
        <Text style={style.label}>{props.label}</Text>
      </View>
      <Pressable style={style.inputContainer} onPress={() => props.onPress()}>
        <Text
          style={[style.input, {color: props.color}]}
          placeholder={props.placeholder ? props.placeholder : ''}>
          {props.value}
        </Text>
      </Pressable>
    </View>
  );
};

ColorPickerInput.defaultProps = {
  onPress: () => {},
  color: '"FFFFFF',
};

ColorPickerInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

export default ColorPickerInput;
