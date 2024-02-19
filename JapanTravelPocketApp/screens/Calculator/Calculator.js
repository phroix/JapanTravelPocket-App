import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import CalcInput from '../../components/CalcInput/CalcInput';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import Header from '../../components/Header/Header';
import SuggestionButton from '../../components/SuggestionButton/SuggestionButton';

import {useSelector, useDispatch} from 'react-redux';
import {resetCalcData} from '../../redux/reducers/CalcData';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import {getCurrency} from '../../api/currency';

const Calculator = () => {
  const calcData = useSelector(state => state.calcData);
  // const yenCurrency = useSelector(state => state.yenCurrency);
  // const euroCurrency = useSelector(state => state.euroCurrency);
  const yenSug = calcData.yenSug;
  const euroSug = calcData.euroSug;
  const yenIcon = calcData.yenIcon;
  const euroIcon = calcData.euroIcon;
  const dispatch = useDispatch();

  const [isEuro, setIsEuro] = useState(false);

  const [euroCurrency, setEuroCurrency] = useState(null);
  const [yenCurrency, setYenCurrency] = useState(null);
  // dispatch(resetCalcData());

  useEffect(() => {
    // getCurrency(setEuroCurrency, setYenCurrency);
    // const jpyCurrency = await getCurrency('EUR', 'JPY');
    // setYenCurrency();
    // console.log('euroCurrency ' + euroCurrency);
    // console.log('yenCurrency ' + yenCurrency);
  }, []);

  useEffect(() => {
    console.log(euroCurrency);
    console.log(yenCurrency);
  }, [euroCurrency, yenCurrency]);
  // console.log('euroCurrency ' + getCurrency('JPY', 'EUR'));

  // console.log(calcData);
  // console.log(yenSug);
  // console.log(yenIcon);

  const formatNumberWithSpaceSeparator = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      {/* <ScrollView> */}
      <View style={style.header}>
        <View style={style.headerSpace}>
          <Header
            title={'1 Yen entspricht'}
            type={2}
            color={'#FFFFFF'}
            numberOfLines={1}
          />
        </View>
        <View style={style.headerSpace}>
          <Header
            title={'0,0062 Euro'}
            type={1}
            color={'#FFFFFF'}
            numberOfLines={1}
          />
        </View>
        <View style={style.headerSpace}>
          <Header
            title={'11. Feb. 13.33 UTC'}
            type={3}
            color={'#FFFFFF'}
            numberOfLines={1}
          />
        </View>
      </View>
      <View style={style.inputs}>
        <View style={style.headerSpace}>
          <CalcInput
            label={'Yen'}
            keyboardType={'number-pad'}
            iconName={'fa-yen-sign'}
          />
        </View>
        <View style={style.headerSpace}>
          <SwitchButton
            onPress={() => {
              console.log('switch');
            }}
          />
        </View>
        <CalcInput
          label={'Euro'}
          keyboardType={'number-pad'}
          iconName={'fa-euro-sign'}
        />
      </View>
      {yenSug.length > 0 && (
        <View style={style.sugContainer}>
          {yenSug.map(value => {
            return (
              <View key={value.yenSugId} style={style.singleSugItem}>
                <SuggestionButton
                  amount={formatNumberWithSpaceSeparator(value.yenSugAmount)}
                  iconName={yenIcon}
                  onPress={() => {
                    console.log(
                      'amount ' + value.yenSugAmount + ' id: ' + value.yenSugId,
                    );
                  }}
                />
              </View>
            );
          })}
        </View>
      )}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Calculator;
