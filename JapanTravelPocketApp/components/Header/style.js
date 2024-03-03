import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(26),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
    fontWeight: '400',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
  },
  title4: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(32),
    lineHeight: scaleFontSize(32),
    fontWeight: '400',
  },
});

export default style;
