import React from 'react';
import {SafeAreaView} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';

const Calculator = () => {
  return (
    <SafeAreaView
      style={[globalStyle.backgroundScreen, globalStyle.flex]}></SafeAreaView>
  );
};

export default Calculator;
