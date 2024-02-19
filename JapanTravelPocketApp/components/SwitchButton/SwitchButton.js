import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import style from './style';

const SwitchButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon icon={'fa-retweet'} size={props.iconSize} style={style.icon}/>
    </Pressable>
  );
};

SwitchButton.defaultProps = {
  iconSize: 25,
};

SwitchButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
};

export default SwitchButton;
