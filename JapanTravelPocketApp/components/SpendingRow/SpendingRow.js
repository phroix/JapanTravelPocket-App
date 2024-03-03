import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import PropTypes from 'prop-types';

import style from './style';

const SpendingRow = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <View style={style.column}>
        <Text style={style.text} numberOfLines={props.numberOfLines}>
          {props.name}
        </Text>
      </View>
      <View style={style.column}>
        <Text style={style.text} numberOfLines={props.numberOfLines}>
          {props.price}
        </Text>
        <FontAwesomeIcon icon={'fa-yen-sign'} color={"#FFFFFF"}/>
      </View>
      <View style={style.column}>
        <View style={[style.tag, {backgroundColor: props.tagColor}]}>
          <Text style={style.text} numberOfLines={props.numberOfLines}>
            {props.tag}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

SpendingRow.defaultProps = {
  onPress: () => {},
  numberOfLines: 2,
};

SpendingRow.propTypes = {
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  tagColor: PropTypes.string.isRequired,
};

export default SpendingRow;
