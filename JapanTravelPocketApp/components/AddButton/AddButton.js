import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import PropTypes from 'prop-types';
import style from './style';

const AddButton = props => {
  return (
    <Pressable style={style.addButtonContainer} onPress={() => props.onPress()}>
      <View style={style.plusSymbol}>
        <FontAwesomeIcon
          icon={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      </View>
      <View>
        <Text style={style.label}>{props.label}</Text>
      </View>
    </Pressable>
  );
};

AddButton.defaultProps = {
  onPress: () => {},
  iconSize: 22,
  iconColor: '#181818',
};

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
};

export default AddButton;
