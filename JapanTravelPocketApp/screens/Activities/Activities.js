import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import SpendingsSubmit from '../../components/SubmitForm/SubmitForm';

import {Button, Modal, StyleSheet, View} from 'react-native';

import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';

const Activities = () => {
  const [showModal, setShowModal] = useState(false);

  // Note: 👇 This can be a `worklet` function.
  const onSelectColor = ({hex}) => {
    // do something with the selected color.
    console.log(hex);
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <SpendingsSubmit />
      <View style={style.container}>
        <Button title="Color Picker" onPress={() => setShowModal(true)} />

        <Modal visible={showModal} animationType="slide">
          <View style={style.modal}>
            <ColorPicker
              style={{width: '70%'}}
              value="red"
              onComplete={onSelectColor}>
              <Preview />
              <Panel1 />
              <HueSlider />
              <OpacitySlider />
              {/* <Swatches /> */}
            </ColorPicker>
          </View>

          <Button title="Ok" onPress={() => setShowModal(false)} />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Activities;
