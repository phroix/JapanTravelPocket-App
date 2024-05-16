import React, {useState, useEffect} from 'react';
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
import {ScrollView} from 'react-native-gesture-handler';
import store from '../../redux/store';
import {updateTagId, updateTags} from '../../redux/reducers/Tags';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

import {useSelector, useDispatch} from 'react-redux';

import {Routes} from '../../navigation/Routes';
import HeaderButton from '../../components/DateHeaderButton/HeaderButton';
import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Dialog from 'react-native-dialog';

import TagsAPI from '../../api/tags';
import {resetTags} from '../../redux/reducers/Tags';
import SpendingInput from '../../components/SpendingInput/SpendingInput';
import ColorPickerInput from '../../components/ColorPickerInput/ColorPickerInput';

const Tags = ({navigation}) => {
  const [tagName, setTagName] = useState(null);
  const [tagColor, setTagColor] = useState(null);
  const initalTag = {
    id: null,
    tag: null,
    color: null,
  };
  const [tag, setTag] = useState(initalTag);

  const [showBackButton, setShowBackButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const [pressedTag, setPressedTag] = useState(true);

  const tagsData = useSelector(state => state.tags || {tags: []});
  const tags = tagsData.tags;
  const dispatch = useDispatch();
  const [tagId, setTagId] = useState(tagsData.tagId);

  useEffect(() => {
    if (tags.length === 0) {
      // If there are no existing tags, start the tag ID at 0
      dispatch(updateTagId(0));
      setTagId(0);
    } else {
      let biggestId = -Infinity; // Initialize biggestId to negative infinity

      for (const tag of tags) {
        if (tag.id > biggestId) {
          biggestId = tag.id; // Update biggestId if a larger ID is encountered
        }
      }
      dispatch(updateTagId(biggestId));
      setTagId(biggestId);
      console.log('The biggest ID is:', tagId);
    }
  }, [tags]);

  const fetchTagsData = async () => {
    try {
      await TagsAPI.getTags();
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const createTagData = async tagData => {
    try {
      await TagsAPI.createTag(tagData);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const updateTagData = async (tagId, tagData) => {
    try {
      await TagsAPI.updateTag(tagId, tagData);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const deleteTagData = async tagId => {
    try {
      await TagsAPI.deleteTag(tagId);
    } catch (error) {
      return {error: 'Something went wrong with your request.'};
    }
  };

  const resetNewTag = () => {
    setTagName(null);
    setTagColor(null);
    setTag(initalTag);
    setShowBackButton(false);
    // setDisableSubmitButton(false);
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

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchTagsData();
  //   }, []),
  // );

  useEffect(() => {
    if (!pressedTag) {
      setDisableSubmitButton(tagName !== null && tagColor !== null);
    }
  }, [pressedTag, tagName, tagColor, tag]);

  useEffect(() => {
    setTag(currentTag => ({
      ...currentTag,
      tag: tagName,
      color: tagColor,
    }));
  }, [tagName, tagColor]);

  const deleteTagPerm = () => {
    setShowDeleteModal(false);
    deleteTagData(tag.id);
    // Delete tag from local state
    const updatedTags = tags.filter(item => item.id !== tag.id);
    // Dispatch action to update Redux store
    store.dispatch(updateTags(updatedTags));

    // Reset new tag
    resetNewTag();
  };

  const closeColorModal = () => {
    setShowModal(false);
    setTagColor(selectedColor.value);
  };

  const pressTag = item => {
    setDisableSubmitButton(true);
    setShowBackButton(true);
    setTagName(item.tag);
    setTagColor(item.color);
    setTag({
      id: item.id,
      tag: item.tag,
      color: item.color,
    });
    setPressedTag(true);
  };

  const handleSubmitButton = async () => {
    setShowBackButton(false);

    if (pressedTag) {
      const existingTagIndex = tags.findIndex(item => item.id === tag.id);
      console.log(existingTagIndex);
      console.log(tag.id);
      // Tag exists, update it
      const updatedTag = {
        tag: tag.tag.toString(),
        color: tag.color.toString(),
      };

      // Update tag in the list
      const updatedTags = [...tags];
      updatedTags[existingTagIndex] = {
        ...updatedTags[existingTagIndex],
        ...updatedTag,
      };

      dispatch(updateTags(updatedTags));
      resetNewTag();
      await updateTagData(tag.id, updatedTag);
    } else {
      let nextId = tagId;
      // Tag doesn't exist, create a new one
      const newTag = {
        id: ++nextId,
        tag: tag.tag.toString(),
        color: tag.color.toString(),
      };

      // Add new tag to the list
      const updatedTags = [...tags, newTag];
      dispatch(updateTags(updatedTags));
      dispatch(updateTagId(nextId));
      setTagId(nextId);
      resetNewTag();
      // Create tag in the backend
      await createTagData(newTag);

      // Dispatch action to update Redux store
    }
    //update list, add new tag to list
    // await fetchTagsData();
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        scrollEnabled={false}>
        <View>
          <Dialog.Container
            style={style.popupContainer}
            visible={showDeleteModal}>
            <Dialog.Title>Tag delete</Dialog.Title>
            <Dialog.Description>
              Do you want to delete this tag? You cannot undo this action.
            </Dialog.Description>
            <Dialog.Button
              label="Cancel"
              onPress={() => setShowDeleteModal(!showDeleteModal)}
            />
            <Dialog.Button
              label="Delete"
              onPress={() => {
                deleteTagPerm();
              }}
            />
          </Dialog.Container>
        </View>
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
                closeColorModal();
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
            {tags &&
              tags.map(item => (
                <Pressable
                  onPress={() => {
                    pressTag(item);
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
                    resetNewTag();
                  }}
                />
              </View>
            )}
            <Pressable
              disabled={showBackButton}
              style={[
                style.addButton,
                !showBackButton && {
                  marginLeft: horizontalScale(54),
                },
                showBackButton && {
                  backgroundColor: '#782b3d',
                },
              ]}
              onPress={() => {
                setShowBackButton(true);
                setPressedTag(false);
              }}>
              <Text style={style.buttonText}>Add New Tag</Text>
            </Pressable>
          </View>
          {showBackButton && (
            <View>
              <View style={style.inputContainer}>
                <SpendingInput
                  label={'Tag'}
                  value={tagName}
                  onChangeText={val => {
                    setTagName(val);
                  }}
                />
                <ColorPickerInput
                  label={'Color'}
                  value={tagColor ? tagColor : ' '}
                  color={tagColor ? tagColor : '#FFFFFF'}
                  onPress={() => {
                    setShowModal(true);
                  }}
                />
              </View>
              <View style={style.submitButtonContainer}>
                <Pressable
                  style={[
                    disableSubmitButton
                      ? style.submitButton
                      : style.submitButtonDisabled,
                  ]}
                  disabled={!disableSubmitButton}
                  onPress={() => {
                    handleSubmitButton();
                  }}>
                  <Text style={style.submitLabel}>Submit</Text>
                </Pressable>
                {pressedTag && (
                  <Pressable
                    style={[style.deleteButton]}
                    disabled={!pressedTag}
                    onPress={() => {
                      setShowDeleteModal(true);
                    }}>
                    <FontAwesomeIcon icon={'fa-trash'} color={'#FFFFFF'} />
                  </Pressable>
                )}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tags;
