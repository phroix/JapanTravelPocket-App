import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusSymbol: {
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(50),
    padding: horizontalScale(3),
  },
  label: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    fontWeight: '400',
    color: '#FFFFFF',
    marginLeft: horizontalScale(5),
  },
});

export default style;
