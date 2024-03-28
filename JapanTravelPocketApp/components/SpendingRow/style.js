import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#3E4553',
    marginHorizontal: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    height: verticalScale(45),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    fontWeight: '400',
  },
  title2: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    fontWeight: '700',
  },
  title3: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(17),
    lineHeight: scaleFontSize(20),
    fontWeight: '800',
  },
  tag: {
    borderRadius: 18,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
  },
});

export default style;
