import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DropDownPicker from 'react-native-dropdown-picker';

import style from './style';

import PropTypes from 'prop-types';

import {Dropdown} from 'react-native-element-dropdown';
import {useSelector, useDispatch} from 'react-redux';

const TagInput = props => {
  const tagsData = useSelector(state => state.tags || {tags: []});
  const tags = tagsData.tags;
  const dispatch = useDispatch();

  const data = tags.map(item => ({
    label: item.tag,
    value: item.id.toString(), // Assuming value needs to be a string
  }));

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  return (
    <View style={style.container}>
      <View style={style.labelContainer}>
        <Text style={style.label}>{props.label}</Text>
      </View>
      <Pressable onPress={() => props.onPress()} style={style.inputContainer}>
        <DropDownPicker
          style={style.dropDownPicker}
          containerStyle={style.dropDownPickerContainer}
          textStyle={style.dropDownPickerText}
          labelStyle={style.dropDownPickerLabel}
          disabledStyle={style.dropDownPickerDisabled}
          bottomOffset={100}
          theme="DARK"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={val => {
            setValue(val);
            props.onChangeText(val);
          }}
        />
      </Pressable>
    </View>
  );
};

TagInput.defaultProps = {
  onPress: () => {},
  onChangeText: () => {},
  keyboardType: 'default',
  iconSize: 20,
  hasIcon: false,
};

TagInput.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  hasIcon: PropTypes.bool,
};

export default TagInput;
