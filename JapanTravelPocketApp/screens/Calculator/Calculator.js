import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import CalcInput from '../../components/CalcInput/CalcInput';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import Header from '../../components/Header/Header';
import SuggestionButton from '../../components/SuggestionButton/SuggestionButton';

import {useSelector, useDispatch} from 'react-redux';
import {resetCalcData} from '../../redux/reducers/CalcData';
import {getCurrency} from '../../api/currency';

const Calculator = () => {
  //const currency data from redux
  const calcData = useSelector(state => state.calcData);
  const yenSug = calcData.yenSug;
  const euroSug = calcData.euroSug;
  const yenIcon = calcData.yenIcon;
  const euroIcon = calcData.euroIcon;
  const dispatch = useDispatch();
  // dispatch(resetCalcData());

  //for switching between euro and yen
  const [isEuro, setIsEuro] = useState(false);

  //currency data from the currency api
  const [euroCurrency, setEuroCurrency] = useState(null);
  const [yenCurrency, setYenCurrency] = useState(null);
  const [currencyDate, setCurrencyDate] = useState(null);

  //input currency amount
  const [euroInput, setEuroInput] = useState(null);
  const [yenInput, setYenInput] = useState(null);

  useEffect(() => {
    // getCurrency(setEuroCurrency, setYenCurrency, setCurrencyDate);
    console.log('getCurrency');
  }, []);

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
        {/* <ScrollView> */}
        <View style={style.header}>
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
        </View>
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Calculator;
