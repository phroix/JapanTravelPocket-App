import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Modal,
  Text,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import store from '../../redux/store';
import {updateYenCurrency} from '../../redux/reducers/CalcData';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import CalcInput from '../../components/CalcInput/CalcInput';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import Header from '../../components/Header/Header';
import SuggestionButton from '../../components/SuggestionButton/SuggestionButton';
import SpendingInput from '../../components/SpendingInput/SpendingInput';

import {useSelector, useDispatch} from 'react-redux';
import {resetCalcData} from '../../redux/reducers/CalcData';
import {getCurrency} from '../../api/currency';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Calculator = () => {
  //const currency data from redux
  const calcData = useSelector(state => state.calcData);
  const yenSug = calcData.yenSug;
  const euroSug = calcData.euroSug;
  const yenIcon = calcData.yenIcon;
  const euroIcon = calcData.euroIcon;
  const yenCurrency = calcData.yenCurrency;
  const euroCurrency = calcData.euroCurrency;
  const currencyDate = calcData.currencyDate;
  const dispatch = useDispatch();

  //for switching between euro and yen
  const [isEuro, setIsEuro] = useState(false);

  //currency data from the currency api
  // const [euroCurrency, setEuroCurrency] = useState(null);
  // const [yenCurrency, setYenCurrency] = useState(null);
  // const [currencyDate, setCurrencyDate] = useState(null);

  //input currency amount
  const [euroInput, setEuroInput] = useState(null);
  const [yenInput, setYenInput] = useState(null);

  const [customYenCurrency, setCustomYenCurrency] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // dispatch(resetCalcData());
  // console.log('general');

  useEffect(() => {
    // getCurrency();
    // getCurrency(setEuroCurrency, setYenCurrency, setCurrencyDate);
    // console.log('useEffect');
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // console.log('useFocusEffect'); // This will log every time the component gains focus
    }, []),
  );

  const handleEurChange = amount => {
    const normalizedAmount = amount.replace(/,/g, '.');
    setEuroInput(normalizedAmount);

    if (normalizedAmount === '') {
      setYenInput('');
    } else if (yenCurrency !== null) {
      const yenEquivalent =
        (parseFloat(normalizedAmount) * yenCurrency) / euroCurrency;
      setYenInput(yenEquivalent.toFixed(0));
    }
  };

  const handleJpyChange = amount => {
    const normalizedAmount = amount.replace(/,/g, '.');
    setYenInput(normalizedAmount);

    if (normalizedAmount === '') {
      setEuroInput('');
    } else if (euroCurrency !== null) {
      const euroEquivalent =
        (parseFloat(normalizedAmount) * euroCurrency) / yenCurrency;
      setEuroInput(euroEquivalent.toFixed(2));
    }
  };

  const setCurrencyHeader = euro => {
    if (euroCurrency && yenCurrency) {
      return euro
        ? yenCurrency.toFixed(2) + ' Yen'
        : (euroCurrency / yenCurrency).toFixed(4) + ' Euro';
    }
  };

  const switchCurrency = () => {
    setIsEuro(!isEuro);
  };

  const formatNumberWithSpaceSeparator = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleSubmitButton = () => {
    if (customYenCurrency !== '' && customYenCurrency !== null) {
      store.dispatch(updateYenCurrency(parseFloat(customYenCurrency)));
    } else {
      getCurrency();
    }
    setShowModal(false);
    setCustomYenCurrency(null);
  };

  const handlePressSetting = () => {
    setShowModal(true);
  };

  const handleCloseSubmitForm = () => {
    setShowModal(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
        <Pressable
          onPress={() => {
            handlePressSetting();
          }}
          style={style.header}>
          <View style={style.headerSpace}>
            <Header
              title={isEuro ? '1 Euro entspricht' : '1 Yen entspricht'}
              type={2}
              color={'#FFFFFF'}
              numberOfLines={1}
            />
          </View>
          <View style={style.headerSpace}>
            <Header
              title={setCurrencyHeader(isEuro)}
              type={1}
              color={'#FFFFFF'}
              numberOfLines={1}
            />
          </View>
          <View style={style.headerSpace}>
            <Header
              title={currencyDate && currencyDate}
              type={3}
              color={'#FFFFFF'}
              numberOfLines={1}
            />
          </View>
        </Pressable>
        <View style={style.inputs}>
          <View style={style.headerSpace}>
            <CalcInput
              label={isEuro ? 'Yen' : 'Euro'}
              keyboardType={'decimal-pad'}
              iconName={isEuro ? 'fa-yen-sign' : 'fa-euro-sign'}
              value={isEuro ? yenInput : euroInput}
              onChangeText={val => {
                isEuro ? handleJpyChange(val) : handleEurChange(val);
              }}
            />
          </View>
          <View style={style.headerSpace}>
            <SwitchButton
              onPress={() => {
                switchCurrency();
              }}
            />
          </View>
          <CalcInput
            label={isEuro ? 'Euro' : 'Yen'}
            keyboardType={'decimal-pad'}
            iconName={isEuro ? 'fa-euro-sign' : 'fa-yen-sign'}
            value={isEuro ? euroInput : yenInput}
            onChangeText={val => {
              isEuro ? handleEurChange(val) : handleJpyChange(val);
            }}
          />
        </View>
        {isEuro
          ? yenSug.length > 0 && (
              <View style={style.sugContainer}>
                {yenSug.map(yenValue => {
                  return (
                    <View key={yenValue.yenSugId} style={style.singleSugItem}>
                      <SuggestionButton
                        amount={formatNumberWithSpaceSeparator(
                          yenValue.yenSugAmount,
                        )}
                        iconName={yenIcon}
                        onPress={() => {
                          const amount = yenValue.yenSugAmount;
                          if (amount) {
                            handleJpyChange(amount.toString());
                          }
                        }}
                      />
                    </View>
                  );
                })}
              </View>
            )
          : euroSug.length > 0 && (
              <View style={style.sugContainer}>
                {euroSug.map(euroValue => {
                  return (
                    <View key={euroValue.euroSugId} style={style.singleSugItem}>
                      <SuggestionButton
                        amount={formatNumberWithSpaceSeparator(
                          euroValue.euroSugAmount,
                        )}
                        iconName={euroIcon}
                        onPress={() => {
                          const amount = euroValue.euroSugAmount;
                          if (amount) {
                            handleEurChange(amount.toString());
                          }
                        }}
                      />
                    </View>
                  );
                })}
              </View>
            )}

        {/* </ScrollView> */}
        <Modal transparent visible={showModal}>
          <View style={style.modalContainer}>
            <View style={style.customCurrencyContainer}>
              <View style={style.closeButtonContainer}>
                <Pressable
                  style={style.closeButton}
                  onPress={() => handleCloseSubmitForm()}>
                  <FontAwesomeIcon
                    icon={'fa-solid fa-xmark'}
                    size={25}
                    color={'white'}
                  />
                </Pressable>
              </View>
              <View style={style.input}>
                <SpendingInput
                  label={'Currency'}
                  value={customYenCurrency}
                  onChangeText={val => {
                    setCustomYenCurrency(val);
                  }}
                />
              </View>
              <View style={style.submitButtonContainer}>
                <Pressable
                  style={style.submitButton}
                  disabled={false}
                  onPress={() => {
                    handleSubmitButton();
                  }}>
                  <Text style={style.submitLabel}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Calculator;
