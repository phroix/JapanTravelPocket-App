import React from 'react';
import {Pressable, Text, View} from 'react-native';
import SpendingInput from '../SpendingInput/SpendingInput';

import PropTypes from 'prop-types';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SubmitForm = props => {
  return (
    <View style={style.spendingsSubmitContainer}>
      <View style={style.closeButtonContainer}>
        <Pressable
          style={style.closeButton}
          onPress={() => props.onPressSubmit()}>
          <FontAwesomeIcon
            icon={'fa-solid fa-xmark'}
            size={25}
            color={'white'}
          />
        </Pressable>
      </View>
      <View style={style.spendingsInputContainer}>
        <View style={style.input}>
          <SpendingInput label={'Name'} />
        </View>
        <View style={style.input}>
          <SpendingInput label={'Price'} hasIcon={true} />
        </View>
        <View style={style.input}>
          <SpendingInput label={'Date'} />
        </View>
        <View style={style.input}>
          <SpendingInput label={'Tag'} />
        </View>
      </View>
      <View style={style.submitButtonContainer}>
        <Pressable
          style={style.submitButton}
          onPress={() => props.onPressSubmit()}>
          <Text style={style.submitLabel}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

SubmitForm.defaultProps = {
  onPressSubmit: () => {},
  onPressClose: () => {},
};

SubmitForm.propTypes = {
  onPressSubmit: PropTypes.func,
  onPressClose: PropTypes.func,
};

export default SubmitForm;
