import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
  Button,
  Modal,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import ColorPicker, {
  Panel1,
  Swatches,
  OpacitySlider,
  HueSlider,
  colorKit,
  PreviewText,
} from 'reanimated-color-picker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

import {useSelector, useDispatch} from 'react-redux';

import {Routes} from '../../navigation/Routes';
import HeaderButton from '../../components/DateHeaderButton/HeaderButton';
import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';

import TagsAPI from '../../api/tags';
import {ScrollView} from 'react-native-gesture-handler';
import {resetTags} from '../../redux/reducers/Tags';
import SpendingInput from '../../components/SpendingInput/SpendingInput';
import ColorPickerInput from '../../components/ColorPickerInput/ColorPickerInput';

const Tags = ({navigation}) => {
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const tagsData = useSelector(state => state.tags);
  const tags = tagsData.tags;
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      fetchTagsData();
    }, []),
  );

  const fetchTagsData = async () => {
    await TagsAPI.getTags();
  };

  const customSwatches = new Array(6)
    .fill('#fff')
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);
  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));

  const onColorSelect = color => {
    'worklet';
    selectedColor.value = color.hex;
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        scrollEnabled={false}>
        <Modal
          onRequestClose={() => setShowModal(false)}
          visible={showModal}
          animationType="slide">
          <Animated.View style={[style.container, backgroundColorStyle]}>
            <View style={style.pickerContainer}>
              <ColorPicker
                value={selectedColor.value}
                sliderThickness={25}
                thumbSize={24}
                thumbShape="circle"
                onChange={onColorSelect}
                boundedThumb>
                <Panel1 style={style.panelStyle} />
                <HueSlider style={style.sliderStyle} />
                <OpacitySlider style={style.sliderStyle} />
                <Swatches
                  style={style.swatchesContainer}
                  swatchStyle={style.swatchStyle}
                  colors={customSwatches}
                />
                <View style={style.previewTxtContainer}>
                  <PreviewText style={{color: '#FFFFFF'}} />
                </View>
              </ColorPicker>
            </View>

            <Pressable
              style={style.closeButton}
              onPress={() => {
                setShowModal(false);
                setTagColor(selectedColor.value)
                console.log(selectedColor.value);

                // setTagColor()
              }}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Close</Text>
            </Pressable>
          </Animated.View>
        </Modal>
        <View style={style.headerContainer}>
          <BackButton onPress={() => navigation.navigate(Routes.Spendings)} />
          <HeaderButton title={'Edit Tags'} />
        </View>
        <View style={style.title}>
          <Header
            title={'Current Tags:'}
            type={5}
            color={'#FFFFFF'}
            numberOfLines={1}
          />
        </View>
        <View style={style.tagsContainer}>
          <ScrollView
            contentContainerStyle={style.tagsScroll}
            showsVerticalScrollIndicator={false}>
            {tags.map(item => (
              <Pressable
                onPress={() => {
                  setShowBackButton(true);
                  setTagName(item.tag);
                  setTagColor(item.color);
                }}
                style={[style.tag, {backgroundColor: item.color}]}
                key={item.id}>
                <Text style={style.text} numberOfLines={1}>
                  {item.tag}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={style.addTagContainer}>
          <View style={style.addTagButtonContainer}>
            {showBackButton && (
              <View style={style.backButton}>
                <BackButton
                  onPress={() => {
                    setTagName('');
                    setTagColor('');
                    setShowBackButton(!showBackButton);
                  }}
                />
              </View>
            )}
            <Pressable
              style={[
                style.addButton,
                !showBackButton && {
                  marginLeft: horizontalScale(54),
                },
              ]}
              // onPress={() => setBackButton(!showBackButton)}
              onPress={() => setShowBackButton(true)}>
              <Text style={style.buttonText}>Add New Tag</Text>
            </Pressable>
          </View>
          {showBackButton && (
            <View>
              <View style={style.inputContainer}>
                <SpendingInput label={'Tag'} value={tagName} />
                <ColorPickerInput
                  label={'Color'}
                  value={tagColor ? tagColor : ' '}
                  color={tagColor ? tagColor : '#FFFFFF'}
                  onPress={() => {
                    setShowModal(true);
                    console.log('pressed');
                  }}
                />
              </View>
              <View style={style.submitButtonContainer}>
                <Pressable
                  style={style.submitButton}
                  onPress={() => props.onPressSubmit()}>
                  <Text style={style.submitLabel}>Submit</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tags;
