import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import PropTypes from 'prop-types';

import style from './style';

const SpendingRow = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <View style={style.column}>
        <Text style={styleToApply()} numberOfLines={props.numberOfLines}>
          {props.name}
        </Text>
      </View>
      <View style={style.column}>
        <Text style={styleToApply()} numberOfLines={props.numberOfLines}>
          {props.amount}
        </Text>
        <FontAwesomeIcon icon={'fa-yen-sign'} color={'#FFFFFF'} />
      </View>
      <View style={style.column}>
        <View style={[style.tag, {backgroundColor: props.tagColor}]}>
          <Text style={styleToApply()} numberOfLines={props.numberOfLines}>
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
  type: 1,
};

SpendingRow.propTypes = {
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  type: PropTypes.number,
};

export default SpendingRow;
