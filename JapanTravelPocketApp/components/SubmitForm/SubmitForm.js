import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import PropTypes from 'prop-types';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import SpendingInput from '../SpendingInput/SpendingInput';
import TagInput from '../TagInput/TagInput';

const SubmitForm = props => {
  return (
    <View style={style.spendingsSubmitContainer}>
      <View style={style.closeButtonContainer}>
        <Pressable
          style={style.closeButton}
          onPress={() => props.onPressClose()}>
          <FontAwesomeIcon
            icon={'fa-solid fa-xmark'}
            size={25}
            color={'white'}
          />
        </Pressable>
      </View>
      <View style={style.spendingsInputContainer}>
        <View style={style.input}>
          <SpendingInput label={'Name'} value={props.spendingName} />
        </View>
        <View style={style.input}>
          <SpendingInput
            label={'Price'}
            hasIcon={true}
            value={props.spendingPrice}
          />
        </View>
        <View style={style.input}>
          <SpendingInput label={'Date'} value={props.spendingDate} />
        </View>
        <View style={style.input}>
          <TagInput label={'Tag'} value={props.spendingTag} />
        </View>
      </View>
      <View style={style.submitButtonContainer}>
        <Pressable
          disabled={(

            props.spendingName != null &&
            props.spendingPrice != null &&
            props.spendingDate != null &&
            props.spendingTag != null
          )
          }
          style={style.submitButton}
          onPress={() => {
            props.onPressSubmit();

            console.log(props.spendingName);
          }}>
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
  spendingName: PropTypes.string,
  spendingPrice: PropTypes.number,
  spendingDate: PropTypes.string,
  spendingTag: PropTypes.string,
};

export default SubmitForm;
