import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import style from './style';

const SuggestionButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <Text style={style.amount}>{props.amount}</Text>
      <FontAwesomeIcon
        icon={props.iconName}
        size={props.iconSize}
        style={style.icon}
      />
    </Pressable>
  );
};

SuggestionButton.defaultProps = {
  iconSize: 20,
};

SuggestionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
  iconName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default SuggestionButton;
