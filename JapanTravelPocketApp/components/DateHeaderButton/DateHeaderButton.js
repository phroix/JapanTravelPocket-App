import React from 'react';
import {View, Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const DateHeaderButton = props => {
  return (
    <Pressable onPress={() => props.onPress()}>
      <Text
        style={[style.title, props.color && {color: props.color}]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
        {props.title}
      </Text>
    </Pressable>
  );
};

DateHeaderButton.defaultProps = {
  title: '',
  color: '#FFFFFF',
  onPress: () => {},
};

DateHeaderButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  numberOfLines: PropTypes.number,
  onPress: PropTypes.func,
};

export default DateHeaderButton;
